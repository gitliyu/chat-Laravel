<template>
    <router-view/>
</template>

<script type="text/javascript">
    export default {
        name: 'App',
        created () {
            if(this.$route.fullPath.indexOf('login') < 0){
                this.$router.push('/login');
            }
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