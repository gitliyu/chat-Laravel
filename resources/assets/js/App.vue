<template>
  <router-view/>
</template>

<script>
  import * as socket from 'socket.io-client';
  export default {
    name: 'App',
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