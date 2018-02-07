<template>
    <div class="chat-item-widget">
        <mu-list-item :title="data.name" @click="onChat(data.id)">
            <img class="avatar" :src="'https://www.liyu.fun/img/' + data.avatar" slot="leftAvatar"/>
            <span slot="describe">
                   {{data.signature}}
                </span>
        </mu-list-item>
        <mu-divider inset/>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {

            }
        },
        props:{
            data : Object,
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
                        params : {
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