<template>
    <div class="login-page">
        <form method="POST" action="/register" class="center">
            <mu-text-field label="邮箱" v-model="form.email" labelFloat/><br/>
            <mu-text-field label="昵称" v-model="form.name" labelFloat/><br/>
            <mu-text-field label="密码" v-model="form.password" labelFloat/><br/>
            <mu-text-field label="确认密码" v-model="form.password_confirmation" labelFloat/><br/>
            <div class="button-group">
                <el-button type="primary" round @click="onRegister">注册</el-button>
                <el-button round @click="onCancel">返回登录</el-button>
            </div>
        </form>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
          return {
            form: {
              email: null,
              name: null,
              password: null,
              password_confirmation: null
            }
          }
        },
        methods: {
            onRegister () {
                axios.post('/register', this.form).then(() => {
                  this.$message.success('注册成功');
                }).catch(() => {
                  this.$message.error('注册失败');
                })
            },
            onCancel () {
                this.$router.push('/login')
            }
        }
    }
</script>