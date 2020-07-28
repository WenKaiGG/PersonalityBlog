<template>
  <div>
    <el-page-header @back="goBack" content="诗词列表" class="fwb"></el-page-header>
    <el-card class="mt30">
      <div class="ovh">
        <el-button class="fr" type="primary" @click="dialogVisibleFn(true)">添加诗词</el-button>
      </div>
      <el-table
        :v-if="tableData"
        :data="tableData"
        style="width: 100%"
        class="mt30"
        border
        stripe
        height="350"
      >
        <el-table-column label="诗词名句" width="1150">
          <template slot-scope="scope">
            <el-collapse>
              <el-collapse-item name="1" class="800">
                <div slot="title">{{scope.row.Ana_cn}}</div>
                <template></template>
                <div>{{scope.row.Ana_en }}</div>
              </el-collapse-item>
            </el-collapse>
          </template>
        </el-table-column>
        <el-table-column label="作者" width="180">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.Ana_author}}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete( scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="paging mt30 mb60 fr">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[3, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
        <!-- 添加/修改 弹出框-->
        <el-dialog
          :title="status ? '添加':'修改'"
          :visible.sync="dialogVisible"
          width="30%"
          @close="handleExit"
        >
          <el-form label-width="80px" :rules="formDataRules" :model="formData" ref="formDataRef">
            <el-form-item label="Ana_cn" prop="Ana_cn">
              <el-input v-model="formData.Ana_cn" maxlength="255"></el-input>
            </el-form-item>
            <el-form-item label="Ana_en" prop="Ana_en">
              <el-input v-model="formData.Ana_en" maxlength="255"></el-input>
            </el-form-item>
            <el-form-item label="作者" prop="Ana_author">
              <el-input v-model="formData.Ana_author" maxlength="30"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="AckBtn">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        Ana_cn: "",
        Ana_en: "",
        Ana_author: "",
        Ana_id: ""
      },
      formDataRules: {
        Ana_cn: [{ required: true, message: "请输入Ana_cn", trigger: "blur" }],
        Ana_en: [{ required: true, message: "请输入Ana_en", trigger: "blur" }],
        Ana_author: [{ required: true, message: "作者名称", trigger: "blur" }]
      },
      tableData: [],
      dialogVisible: false,
      // true 为添加 false 为 修改
      status: true,
      // 当前页数
      currentPage: 1,
      // 默认每页条数
      pageSize: 3,
      // 总条数
      total: 1
    };
  },

  mounted() {
    this.getAna(this.pageSize, this.currentPage);
  },

  methods: {
    // 判断显示修改弹出框/添加弹出框
    dialogVisibleFn(status) {
      this.status = status;
      this.dialogVisible = true;
    },
    AckBtn() {
      this.$refs.formDataRef.validate(async validate => {
        if (!validate) return this.$message.error("信息不能为空");
        // 判断是添加请求还是修改请求
        if (this.status) {
          const { data: res } = await this.$axios.post("/s2/addAna", {
            data: this.formData
          });
          if (res.code == 200) {
            this.$message.success(res.success);
            this.getAna(this.pageSize, this.currentPage);
          } else if (res.code == 400) {
            this.$message.error(res.success);
          }
          this.reset()
        } else {
          const { data: res } = await this.$axios.put("/s2/putAna", {
            data: this.formData,
            Ana_id: this.Ana_id
          });
          if (res.code == 200) {
            this.$message.success(res.success);
            this.getAna(this.pageSize, this.currentPage);
          } else if (res.code == 400) {
            this.$message.error(res.success);
          }
        }
      this.reset()
      });

      // 添加
    },
    // 清空数据
    reset() {
      for (let key in this.formData) {
        this.formData[key] = "";
      }
      this.$refs.formDataRef.clearValidate();
       this.dialogVisible=false
    },
    // 请求数据
    async getAna(pageSize, currentPage) {
      const { data: res } = await this.$axios.post("/s2/getAna", {
        pageSize: pageSize,
        currentPage: currentPage
      });
      if (res.code == 200) {
        console.log(this.tableData.length);
        this.tableData = res.data;
        this.total = res.total;
      }
    },

    // 回退
    goBack() {
      this.$router.go(-1);
    },
    // 修改
    handleEdit(row) {
      this.formData = {
        Ana_cn: row.Ana_cn,
        Ana_en: row.Ana_en,
        Ana_author: row.Ana_author,
        Ana_id: row.Ana_id
      },
        this.dialogVisibleFn(false);
    },
    // 删除
    handleDelete(row) {
       this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
         const {data:res}= await this.$axios.delete(`/s2/delAna/${row.Ana_id}`);
          console.log(res)
          if(res.code==200){
            this.$message({
            type: 'success',
            message:res.success
          });
              const totalPage = Math.ceil((this.total-1)/this.pageSize)
              let newcurrentPage = this.currentPage >totalPage ? totalPage : this.currentPage ;
              this.currentPage = newcurrentPage < 1 ? 1: newcurrentPage;
              this.getAna(this.pageSize, this.currentPage);
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    // 每页多少条
    handleSizeChange(val) {
      this.pageSize = val;
      this.getAna(val, this.currentPage);
    },
    handleExit() {
       this.reset();
    },
    // 当前页
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getAna(this.pageSize, this.currentPage);
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/.el-table td,
.el-table th.is-leaf {
  border-bottom: none;
}
/deep/.el-table--scrollable-x .el-table__body-wrapper {
  overflow: hidden;
}
/deep/.el-collapse-item__header,
/deep/.el-collapse-item__content {
  display: inline-block;
  overflow: hidden; //超出的文本隐藏
  text-overflow: ellipsis; //溢出用省略号显示
  white-space: nowrap; //溢出不换行
  line-height: 48px !important;
  width: 1150px;
  margin: 0;
  padding: 0;
}

/deep/.el-collapse-item__header {
  line-height: 1;
}
</style>