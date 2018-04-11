<template>
    <div class="chat-page">
        <mu-appbar :title="friend.name">
            <i class="el-icon-arrow-left" @click="onBack" slot="left"></i>
        </mu-appbar>
        <div class="message-box">
            <div :class="['message-item',{'mine': item.mine }]" v-for="item in recordList" :key="item.msg">
                <div class="avatar">
                    <img v-if="!item.mine" :src="'https://www.liyu.fun/img/' + friend.avatar"/>
                    <img v-if="item.mine" :src="'https://www.liyu.fun/img/' + currentUser.avatar"/>
                </div>
                <div class="message">
                    {{item.msg}}
                </div>
            </div>
        </div>
        <div class="input-box">
            <mu-text-field v-model="message" @keydown.native.enter="onSend" hintText="请输入聊天内容"/>
            <el-button type="primary" @click="onSend" size="small">发送</el-button>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {
                message : '',
                friend_id : null,
                friend : {},
                recordList : []
            }
        },
        computed : {
            currentUser : function(){
                return this.$store.state.currentUser;
            },
            records : function(){
                return this.$store.state.records;
            }
        },
        mounted(){
            this.friend_id = this.$route.params.id;
            this.friend = this.users.find(item => item.id === this.friend_id);
            this.initRecords(this.records);
        },
        methods: {
            initRecords (val){
                this.recordList = val.filter(item => item.from === this.friend_id || item.mine);
            },
            onBack () {
                this.$router.push('/message')
            },
            onSend () {
                let data = {
                    from : this.currentUser.id,
                    to   : this.friend_id,
                    msg  : this.message,
                    date : new Date()
                };
                this.$store.dispatch('setRecord', {
                    msg  : this.message,
                    mine : true
                });
                io.emit('private chat',data);
                this.message = '';
            }
        },
        watch : {
            records : function(val){
                this.initRecords(val);
            }
        }
    }
</script>

<style lang="scss">
    .chat-page{
        .mu-appbar{
            position: fixed;
            top: 0;
            i{
                font-size: 1.5rem;
            }
            .mu-appbar-title{
                text-align: center;
            }
        }
        .message-box{
            padding: 70px 5px 48px;
            .message-item{
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 100%;
                padding-bottom: 0.5rem;
                &.mine{
                    float: right;
                    flex-direction: row-reverse;
                }
                .avatar img{
                    width: 4rem;
                    border-radius: 50%;
                }
                .message{
                    padding: 10px;
                    background: #eee;
                    border-radius: 10px;
                    max-width: 16rem;
                    word-break: break-all;
                }
            }
        }
        .input-box{
            width: 100%;
            position: fixed;
            bottom: 0;
            .mu-text-field{
                padding: 0 10px;
                margin: 0 0 0 2rem;
            }
            .mu-text-field-hint{
                color: #666;
            }
        }
    }
</style>