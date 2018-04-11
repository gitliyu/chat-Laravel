<template>
    <div class="message-page">
        <mu-list>
            <chat-item
                    v-if="currentUser.records.length"
                    v-for="item in currentUser.records"
                    :key="item.id"
                    :user="item.user"
                    :msg="item.message">
            </chat-item>
            <mu-list-item v-if="!currentUser.records.length">
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
        computed :{
          currentUser : function(){
            return this.$store.state.currentUser;
          },
        },
        mounted(){

        },
        methods: {

        },
    }
</script>

<style lang="scss">
.message-page{

}
</style>