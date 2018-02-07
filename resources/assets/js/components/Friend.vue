<template>
    <div class="friend-page">
        <mu-list>
            <mu-sub-header>群聊</mu-sub-header>
            <mu-list-item>
                暂无
            </mu-list-item>
            <mu-sub-header>好友</mu-sub-header>
            <chat-item
                v-if="friends"
                v-for="item in friends"
                :key="item.id"
                :data="item">
            </chat-item>
            <mu-list-item v-if="!friends">
                暂无
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script type="text/javascript">
    export default {
        components: {
            'ChatItem': () => System.import('./widget/ChatItem')
        },
        data(){
            return {
                friends : null
            }
        },
        computed : {
            users : function(){
                return this.$store.state.users;
            },
            currentUser : function(){
                return this.$store.state.currentUser;
            }
        },
        mounted(){
            this.friends = this.users.filter(item => {
                return this.currentUser.friends.includes(item.id)
            })
        },
        methods: {

        }
    }
</script>

<style lang="scss">
.friend-page{

}
</style>