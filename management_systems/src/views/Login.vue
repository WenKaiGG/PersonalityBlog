<template>
  <div class="Loginbox">
    <el-card class="w350 h250 mat mt250 pb30">
      <el-form :model="ruleForm" :rules="rules" ref="loginRef">
        <el-form-item>
          <h1 db mb100>个人博客后台管理系统</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" clearable maxlength="10">
            <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type='password' v-model="ruleForm.password" clearable maxlength="22">
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>

        <el-button type="primary" @click="submit">登录</el-button>
        <el-button type="success " @click="reset">重置</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请登录管理员账号", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请登录管理员密码", trigger: "blur" }
        ]
      }
    };
  },
  created() {},
  methods: {
    reset() {
      this.ruleForm.username = "";
      this.ruleForm.password = " ";
    },
    async submit() {
      this.$refs.loginRef.validate(async valid => {
        if (!valid) return this.$message.error("请输入账号");
        try {
          const { data: res } = await this.$axios.post("/s2/login", {
            user_name: this.ruleForm.username,
            user_password: this.ruleForm.password
          });
          if (res.resultCode == 200) {
            this.$message.success(res.success);
            this.$router.push("/home");
            this.reset();
          }
        } catch (error) {
          console.log(error);
            this.$message.error('登录失败');
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.Loginbox {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("../assets//img/yld.jpg");
  background-size: cover;
  .el-card {
    background-color: rgba($color: #ffffff, $alpha: 1);
  }
}
</style>