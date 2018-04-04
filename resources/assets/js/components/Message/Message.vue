<template>
    <div class="message-page">
        <mu-list>
            <chat-item
                    v-if="messages.length"
                    v-for="item in messages"
                    :key="item.id"
                    :id="item.id"
                    :msg="item.msg">
            </chat-item>
            <mu-list-item v-if="!messages.length">
                暂无消息记录
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script type="text/javascript">
    import ChatItem from '../widget/ChatItem.vue';
    export default {
        components: {
            'ChatItem': ChatItem
        },
        data(){
            return {
                messages : []
            }
        },
        computed :{
            records : function(){
                return this.$store.state.records;
            }
        },
        mounted(){
            this.initRecords(this.records);
        },
        methods: {
            initRecords(val){
                let messages = {};
                val.forEach( item => {
                    messages[item.from] = item;
                });
                Object.values(messages).forEach(item => {
                    this.messages.push({
                        id : item.from,
                        msg : item.msg
                    });
                });
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
.message-page{

}
</style>