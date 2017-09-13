<template>
  <div>
    <el-button type="primary" class="addBtn" size="small" @click="dialogVisible = true">添加</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="220"></el-table-column>
      <el-table-column prop="hs" label="医院" width="220"></el-table-column>
      <el-table-column prop="hs" label="职位" width="220"></el-table-column>
      <el-table-column prop="ks" label="地点" width="220"></el-table-column>
      <el-table-column prop="fy" label="咨询费用" width="220"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button @click.native.prevent="changeDate(scope.$index, tableData)" type="text" size="small">删除</el-button>
          <el-button @click.native.prevent="changeDate(scope.$index, tableData)" type="text" size="small">修改</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="添加医生"
      :visible.sync="dialogVisible"
      size="tiny">
      <el-input placeholder="请输入内容" v-model="name" maxlength="7">
        <template slot="prepend">姓名</template>
      </el-input>
      <br/>
      <br/>
      <el-input placeholder="请输入内容" v-model="zw" maxlength="7">
        <template slot="prepend">职务</template>
      </el-input>
      <br/>
      <br/>
      <el-input placeholder="请输入内容" v-model="sf" maxlength="5">
        <template slot="prepend">收费标准</template>
        <template slot="append">.00</template>
      </el-input>
      <br/>
      <br/>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="医生简介"
        resize="none"
        maxlength = 500
        v-model="jianjie">
      </el-input>
      <br/>
      <br/>
      <span>照片</span>
      <div style="border: 1px solid #eee;width: 178px;">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>


      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'docClass',
    data() {
      return {
        tableData: [],
        dialogVisible: false,
        imageUrl: '',
        jianjie: '',
        name: '',
        zw: '',
        sf: '',
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  };
</script>

<style scoped>
  .addBtn{
    margin: 10px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed red;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
