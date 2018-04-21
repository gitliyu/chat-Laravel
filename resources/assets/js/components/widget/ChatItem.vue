<template>
    <div class="chat-item-widget">
        <mu-list-item :title="user.name" @click="onChat(user.id)">
            <img class="avatar" :src="'https://www.liyu.fun/img/' + user.avatar" slot="leftAvatar"/>
            <span slot="describe">
               {{ msg || user.signature}}
            </span>
        </mu-list-item>
        <mu-divider inset/>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {}
        },
        props:{
            user : Object,
            msg: String,
            canChat: {
                type    : Boolean,
                default : true
            }
        },
        methods: {
            onChat (id) {
                if(this.canChat){
                    this.$router.push({
                        name   : 'chat',
                        query : {
                            id : id
                        }
                    });
                }
            }
        }
    }
</script>

<style lang="scss">
.chat-item-widget{
    .avatar{
        width: 3rem;
        border-radius: 50%;
    }
}
</style>