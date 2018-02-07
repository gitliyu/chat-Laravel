<template>
    <div class="message-page">
        <mu-list>
            <chat-item
                    v-if="messages"
                    v-for="item in messages"
                    :key="item.id"
                    :data="item">
            </chat-item>
            <mu-list-item v-if="!messages">
                暂无消息记录
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
                messages : null
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss">
.message-page{

}
</style>