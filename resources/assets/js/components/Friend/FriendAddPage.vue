<template>
  <div class="friend-add-page">
    <div class="input-box mt-4">
      <mu-text-field v-model="email" @keydown.native.enter="onSearchUser" hintText="请输入邮箱"/>
      <el-button type="primary" @click="onSearchUser" size="small">搜索</el-button>
    </div>
    <mu-list>
      <chat-item v-if="user" :user="user" :is-chat="false" @click.native="onAddFriend"></chat-item>
    </mu-list>
  </div>
</template>

<script type="text/javascript">
  import ChatItem from '../widget/ChatItem.vue';
  export default {
    components: {
      'ChatItem': ChatItem
    },
    data () {
      return {
        email: '',
        user: null
      }
    },
    methods: {
      onSearchUser () {
        axios.post('/user/search', {
          email: this.email
        }).then(res => {
          this.user = res.data.data;
        }).catch(() => {
          this.$message.error('没有查询到用户，请检查邮箱是否正确');
        })
      },
      onAddFriend () {
        this.$confirm('确定要添加好友么', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          axios.post('/user/add', {
            id: this.user.id
          }).then(() => {
            this.$message.success('添加好友成功');
          }).catch(() => {
            this.$message.error('添加好友失败');
          })
        })
      }
    }
  }
</script>