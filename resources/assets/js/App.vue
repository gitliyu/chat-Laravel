<template>
  <router-view/>
</template>

<script>
  import * as socket from 'socket.io-client';
  export default {
    name: 'App',
    created () {
      axios.get('/user').then(res => {
        let user = res.data.data;
        this.$store.commit('_setUser', user);
        this.$store.commit('_setRecord', user.records);
        io.emit('set id', user.id);
      });
    },
    mounted(){
      window.io = socket.connect('http://localhost:8000');
      io.on('private chat', (data) => {
        this.$store.dispatch('setRecord', data);
      })
    }
  }
</script>

<style lang="scss">

</style>