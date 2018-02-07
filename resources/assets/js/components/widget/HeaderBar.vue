<template>
    <div class="header-bar-widget">
        <!--头部菜单-->
        <mu-appbar :title="title">
            <div class="avatar-box" slot="left">
                <img @click="openPopup" :src="'https://www.liyu.fun/img/' + currentUser.avatar">
            </div>
            <i class="el-icon-plus" @click="openBottomSheet"  slot="right"></i>
        </mu-appbar>
        <!--底部选项-->
        <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
            <mu-list @itemClick="closeBottomSheet">
                <mu-sub-header>
                    请选择
                </mu-sub-header>
                <mu-list-item title="发起群聊"/>
                <mu-list-item title="添加好友"/>
            </mu-list>
        </mu-bottom-sheet>
        <!--左侧详情-->
        <mu-popup position="left" popupClass="left-popup" :open="leftPopup" @close="closePopup">
            <img class="avatar" :src="'https://www.liyu.fun/img/' + currentUser.avatar">
            <div class="text-center user-name">
                {{currentUser.name}}
            </div>
            <div class="signature">
                {{currentUser.signature}}
            </div>
            <el-button class="sign-out-btn" @click="onSignOut">退出</el-button>
        </mu-popup>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {
                title : '消息',
                bottomSheet : false,
                leftPopup : false
            }
        },
        computed : {
            currentUser : function(){
                return this.$store.state.currentUser;
            }
        },
        methods: {
            closeBottomSheet () {
                this.bottomSheet = false
            },
            openBottomSheet () {
                this.bottomSheet = true
            },
            openPopup () {
                this.leftPopup = true;
            },
            closePopup () {
                this.leftPopup = false;
            },
            onSignOut () {
                //TO DO
                location.reload();
//                this.$router.push('/login');
            }
        },
        watch : {
            '$route'(to, from){
                this.title = to.name;
            }
        }
    }
</script>

<style lang="scss">
.header-bar-widget{
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    .avatar-box{
        img{
            width: 2.8rem;
            border-radius: 50%;
            vertical-align: middle;
        }
    }
    .mu-appbar-title{
        text-align: center;
    }
    .el-icon-plus{
        font-size: 1.5rem;
        padding-right: 0.5rem;
    }
}
.left-popup{
    width: 55%;
    max-width: 375px;
    height: 100%;
    padding: 24px;
    .avatar{
        width: 100%;
        border-radius: 50%;
    }
    .user-name{
        font-size: 1.5rem;
        padding: 0.5rem 0;
    }
    .sign-out-btn{
        position: absolute;
        bottom: 1rem;
        left: 0;
        border: none !important;
    }
}
</style>