<template>
  <div class="message-page">
    <mu-list>
      <chat-item
              v-if="messages.length"
              v-for="item in messages"
              :key="item.id"
              :user="item.user"
              :msg="item.message">
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
        messages: []
      }
    },
    computed: {
      currentUser: function () {
        return this.$store.state.currentUser;
      },
      records: function () {
        return this.$store.state.records;
      }
    },
    mounted(){
      this.initRecords(this.records);
    },
    methods: {
      initRecords(val){
        let messages = {};
        this.messages = [];
        val.forEach(item => {
          messages[item.from] = item;
        });
        Object.values(messages).forEach(item => {
          this.messages.push(item);
        });
      }
    },
    watch: {
      records: function (val) {
        this.initRecords(val);
      }
    }
  }
</script>

<style lang="scss">
  .message-page {

  }
</style>