<template>
    <div class="friend-page">
        <mu-list>
            <mu-sub-header>群聊</mu-sub-header>
            <mu-list-item>
                暂无
            </mu-list-item>
            <mu-sub-header>好友</mu-sub-header>
            <chat-item
                v-if="currentUser.friends.length"
                v-for="item in currentUser.friends"
                :key="item.id"
                :user="item">
            </chat-item>
            <mu-list-item v-if="!currentUser.friends.length">
                暂无
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script type="text/javascript">
    import ChatItem from '../widget/ChatItem';
    export default {
        components: {
            'ChatItem': ChatItem
        },
        data(){
            return {}
        },
        computed : {
            currentUser : function(){
                return this.$store.state.currentUser;
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss">
.friend-page{

}
</style>