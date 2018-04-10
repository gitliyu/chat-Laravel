<template>
  <div class="full-page">
    <header-bar></header-bar>
    <router-view/>
    <mu-paper class="bottom-nav">
      <mu-bottom-nav>
        <mu-bottom-nav-item to="/message" title="消息" icon=":fa fa-commenting"/>
        <mu-bottom-nav-item to="/friend" title="联系人" icon=":fa fa-group"/>
        <mu-bottom-nav-item to="/personal" title="我" icon=":fa fa-user"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script type="text/javascript">
  import HeaderBar from './widget/HeaderBar';
  export default {
    components: {
      'HeaderBar': HeaderBar
    },
    data(){
      return {}
    },
    created () {
      axios.get('/user').then(res => {
        this.$store.commit('_setUser', res.data);
        io.emit('set id', res.data.id);
      });
    },
    methods: {}
  }
</script>

<style lang="scss">
  .full-page {
    padding: 56px 0;
    .bottom-nav {
      position: fixed;
      bottom: 0;
      width: 100%;
      i {
        font-size: 1rem;
      }
      .router-link-active {
        color: #474a4f;
      }
    }
  }
</style>