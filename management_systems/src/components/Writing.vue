<template>
  <div style="height:100%">
    <div class="top">
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="8" class="mt14">
          <el-breadcrumb separator-class="el-icon-arrow-right ">
            <el-breadcrumb-item to="/Welcome">首页</el-breadcrumb-item>
            <el-breadcrumb-item>创作中心</el-breadcrumb-item>
            <el-breadcrumb-item>写博客</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="8">
          <el-input placeholder="请输入文章标题" v-model="article_title"></el-input>
        </el-col>
        <el-col :span="8" class="tr">
          <el-button type="danger" plain size="small" @click="save">保存草稿</el-button>
          <el-button type="danger" icon="el-icon-edit" size="small" @click="PublishArticle">发布文章</el-button>
        </el-col>
      </el-row>
    </div>
    <el-card style="height:100%" class="mt20">
      <mavon-editor v-model="content" @change="change"></mavon-editor>
    </el-card>
    <el-dialog
  title="发布文章"
  :visible.sync="dialogVisible"
  width="60%"
  :before-close="handleClose">
    <span>文章标签:</span><el-tag
  :key="tag.label"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  effect="dark"
  :type="tag.type"
  @close="handleClose(tag)" class="ml6 mr6 ">
  {{tag.label}}
</el-tag>
<el-input
  class="input-new-tag mt12"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  data() {
    return {
      // 类型
       dynamicTags: [
         { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' }
       ],
      //  控制input显示隐藏
        inputVisible: false,
        inputValue: '',
      dialogVisible:false,
      content: ``,
      // 文章标题
      article_title: "",
      articleValue: ``,
      articleHtml: ``
    };
  },
  components: {
    mavonEditor
  },
  methods: {
    // 保存
    save() {
      if (!this.article_title) {
        this.$message.error("请输入标题");
        return;
      }
      this.content = this.articleValue;
    },
    // 发布文章
    PublishArticle() {
      if (!this.article_title) {
        this.$message.error("请输入标题");
        return;
      }
      this.dialogVisible =true
    },
    change(value, html) {
      console.log(value);
      this.articleValue = value;
      this.articleHtml = html;
    },
    // 删除
     handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      //显示input
      showInput() {
        this.inputVisible = true;
        this.$nextTick(()=> {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        console.log(this.inputValue)
        if (inputValue) {
          this.dynamicTags.push({
           type: 'danger', label: '标签四'
          });
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
};
</script>

<style lang="scss" scoped>
.v-note-op {
  display: flex;
}
/deep/.el-card__body {
  padding: 0;
}
/deep/.el-card {
  height: 770px !important;
}
.markdown-body {
  height: 770px;
}
</style>