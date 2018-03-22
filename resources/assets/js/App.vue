<template>
  <router-view/>
</template>

<script>
  import * as socket from 'socket.io-client';
  export default {
    name: 'App',
    created () {
      if (this.$route.fullPath.indexOf('login') < 0) {
        this.$router.push('/login');
      }
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
    html{
        height: 100%;
        body{
            height: 100%;
            #app{
                height: 100%;
            }
        }
    }
</style>