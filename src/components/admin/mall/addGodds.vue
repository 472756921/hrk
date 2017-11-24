<template>
  <div style="padding: 1em;overflow: auto;line-height: 4rem">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="">
          <el-input v-model="good.name" placeholder="请输入商品名" size="small"></el-input>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="">
          <el-input v-model="good.price" placeholder="请输入价格" size="small"></el-input>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="">
          <el-input v-model="good.price2" placeholder="请输入优惠价格（不填写则无优惠）" size="small"></el-input>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="">
          <el-checkbox v-model="good.newP">新品</el-checkbox>
          <el-checkbox v-model="good.hot">热卖</el-checkbox>
          <el-checkbox v-model="good.cx">促销</el-checkbox>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="">
          <div>商品封面图片</div>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="good.imageUrl" :src="good.imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </el-col>
      <el-col :span="24">
        <div>商品轮播展示图片</div>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="good.fileList2"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-col>
      <el-col :span="6">
        <div class="">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入商品介绍内容" v-model="good.textarea"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-button type="success">保存</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'addGodds',
      data(){
        return {
          good: {
            imageUrl: '',
            name: '',
            textarea: '',
            fileList2: [],
            newP: '',
            hot: '',
            cx: '',
          },
        }
      },
      methods: {
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
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
      }
    };
</script>

<style>
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
