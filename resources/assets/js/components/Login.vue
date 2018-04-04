<template>
    <div class="login-page">
        <div class="center">
            <mu-text-field label="用户名" v-model="name" labelFloat/><br/>
            <mu-text-field label="密码" v-model="password" labelFloat/><br/>
            <div class="button-group">
                <el-button type="primary" round @click="login">登录</el-button>
                <el-button round @click="register">注册</el-button>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {
                name : '',
                password : ''
            }
        },
        computed : {
            users : function(){
                return this.$store.state.users;
            }
        },
        methods: {
            login(){
                let currentUser = this.users.find( user => {
                    return user.account === this.name;
                });
                if(currentUser && currentUser.password === this.password){
                    this.$store.dispatch('setUser', currentUser);
                    io.emit('set id', currentUser.id);
                    this.$router.push('/message');
                } else{
                    this.$message('用户名或密码不正确');
                }
            },
            register(){
                this.$router.push('/register')
            }
        }
    }
</script>