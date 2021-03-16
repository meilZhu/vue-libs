<!--
 * @fileName: 
 * @Date: 2021-01-26 13:58:57
 * @Author: manyao.zhu
-->
<template>
  <section class="m_user">
    <el-tooltip class="item" effect="dark" :disabled="userInfo.userName.length < 5" :content="userInfo.userName" placement="bottom">
      <span> {{ userInfo.userName }} </span>
    </el-tooltip>
    <el-dropdown trigger="click" @command="userClick">
      <el-avatar class="m_user_logo" :src="userInfo.userImage"></el-avatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </section>
</template>

<script>
  import {mapState, mapActions} from 'vuex';
  export default {
    name: 'User',
    data() {
      return {}
    },
    computed: {
      ...mapState(['userInfo']),
    },
    methods: {
      ...mapActions(['setUserInfo']),
      userClick(command) {
        switch (command) {
          case 'logout':
            console.log('推出')
            break;
          default:
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~/css/shared.scss';
  @import '~/css/mixin.scss';
  .m_user {
    display: flex;
    align-items: center;
    &>span {
      margin-right: 10px;
      color: $fontColor;
      max-width: 73px;
      @include ellipse;
    }
    .m_user_logo {
      cursor: pointer;
    }
  }
</style>