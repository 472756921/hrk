<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="img" label="图片">
        <template scope="scope">
          <img :src="scope.row.img" width="100" style="padding: .4rem 0 0 0"/>
        </template>
      </el-table-column>
      <el-table-column prop="tag" label="操作">
        <template scope="scope">
          <el-button type="warning" size="small" @click="del(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="bo">
      <h4>上传轮播图片</h4>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="newImg" :src="newImg" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'headImg',
    data(){
      return {
        newImg: '',
        tableData: [
          {img: 'static/p1.jpg',id: 1},
          {img: 'static/p2.jpg',id: 2},
          {img: 'static/p3.jpg',id: 3},
        ],
      }
    },
    methods:{
      del(index) {
        let info = confirm('您确认要删除该图片？');
        if(info) {
          this.tableData.splice(index, 1);
        }
      },
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
    },
  };
</script>

<style scoped>
  .bo{
    margin: .4rem;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    border: 1px dashed #d9d9d9;
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
