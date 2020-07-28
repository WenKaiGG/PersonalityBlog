<template>
  <div class style="width:100%;height:100%;">
    <el-container>
      <el-header>
        <span>Blog后台管理系统</span>
        <span>
          <el-button type="info" size="medium" @click="exit">退出登录</el-button>
        </span>
      </el-header>
      <el-container>
        <el-aside :width="isCollapse ? '64px' :'200px'">
          <div class="flexibleb" @click="isCollapse = !isCollapse">|||</div>
          <el-menu
            :collapse="isCollapse"
            :collapse-transition="false"
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#409eff"
            :router=true
          >
            <div></div>
            <el-submenu index="/welcom">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="/home/User" >
                <i class="el-icon-menu"></i>
                <span slot="title">个人信息</span>
              </el-menu-item>
            </el-submenu>
             <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-edit-outline"></i>
                <span>创作中心</span>
              </template>
              <el-menu-item index="/home/Writing">
                <i class="el-icon-edit"></i>
                <span slot="title">写博客</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-folder-checked"></i>
                <span>名句集锦</span>
              </template>
              <el-menu-item index="/home/Ana">
                <i class="el-icon-tickets"></i>
                <span slot="title">列表</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    exit() {
      this.$message.success('退出成功')
      sessionStorage.clear()
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/.el-menu-vertical-demo{
    width: 200px;
}
.el-container.is-vertical {
  height: 100%;
  // 头部
  .el-header {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    background-color: #373d41;
    color: white;
    text-align: left;
    font-weight: bold;
    line-height: 60px;
  }

  .el-aside {
    background-color: #545c64;
    color: #333;
    box-sizing: border-box;
    text-align: center;
    .flexibleb {
      width: 100%;
      height: 30px;
      line-height: 30px;
      background-color: #333743;
      color: white;
    }
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
  }
}
</style>