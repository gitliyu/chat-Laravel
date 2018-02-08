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
    import * as socket from 'socket.io-client';
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
                    window.io = socket.connect('http://localhost:8000');
                    io.emit('set id', currentUser.id);
                    this.$router.push('/message');
                } else{
                    this.$message('用户名或密码不正确');
                }
            },
            register(){
                this.$message('TO DO');
            }
        }
    }
</script>

<style lang="scss">
    .login-page{
        height: 100%;
        background: url("../../image/login.jpg");
        -webkit-background-size: cover;
        background-size: cover;
        .center{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .mu-text-field.has-label .mu-text-field-label.float{
            color: #666;
        }
        .mu-text-field-line{
            background-color: rgba(0,0,0,.12);
        }
        .button-group{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .el-button{
                width: 12rem;
                margin: 10px 0;
            }
        }
    }
</style>