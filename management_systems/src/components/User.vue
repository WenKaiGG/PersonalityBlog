<template>
  <div style="color:white">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/Welcome">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>个人信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="mt20 h800 pr">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card shadow="hover">
            <span>作者名:</span>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <span>职业: <el-tag type="info">admin</el-tag></span>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <span>邮箱:</span>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="8">
          <el-card shadow="hover">
            <span>github:</span>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <span>联系方式:</span>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <span>城市:</span>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" class='mb80'>
        <el-col :span="8">
          <el-card shadow="hover">
            <!-- <span>自我介绍:</span> -->
            <el-collapse accordion>
              <el-collapse-item>
                <template slot="title">自我介绍</template>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </el-col>
          <el-col :span="8">
          <el-card shadow="hover">
            <!-- <span>自我介绍:</span> -->
            <el-collapse accordion>
              <el-collapse-item>
                <template slot="title">自我介绍</template>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <!-- <span>自我介绍:</span> -->
            <el-collapse accordion>
              <el-collapse-item>
                <template slot="title">自我介绍</template>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </el-col>
         
        
      </el-row>
              <el-button type="primary  fr">主要按钮</el-button>
    </el-card>


  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        userinfor_author: ""
      }
    };
  },
  created() {
 
  },
  mounted() {
       this.getInfor()
  },
  methods: {
  async getInfor(){
    const {data:res} = await this.$axios.get('/s2/getinfor');
    if(res){
       console.log(res)
    }

    }
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  margin: 20px 0;
}
</style>