<template>
  <div>
    <el-button type="primary" class="addBtn" size="small" @click="dialogVisible = true">添加</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="sp" label="地点" width="220"></el-table-column>
      <el-table-column prop="hs" label="医院" width="220"></el-table-column>
      <el-table-column prop="ks" label="科室" width="220"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button @click.native.prevent="changeDate(scope.$index, tableData)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="添加"
      :visible.sync="dialogVisible"
      size="tiny"
      :before-close="handleClose">
      <div>请选择添加内容</div>
      <br/>
      <el-radio class="radio" v-model="addClass" label="1">地点</el-radio>
      <el-radio class="radio" v-model="addClass" label="2">医院</el-radio>
      <el-radio class="radio" v-model="addClass" label="3">科室</el-radio>
      <div>
        <br/>
        <el-input v-if="addClass==1" v-model="addsp" placeholder="请输入地点"></el-input>
        <el-select v-model="addsp" placeholder="请选择" v-if = 'addClass==2'>
          <el-option
            v-for="(item, i) in sp"
            :key="i"
            :label="item.city_name"
            :value="item.id">
          </el-option>
        </el-select>
        <br v-if="addClass == 2"/>
        <br v-if="addClass == 2"/>
        <el-input v-if="addClass==2" v-model="addhs" placeholder="请输入医院"></el-input>

        <el-select v-model="addsp" placeholder="请选择" v-if = 'addClass==3' @change="getHospitals">
          <el-option
            v-for="(item, i) in sp"
            :key="i"
            :label="item.city_name"
            :value="item.id">
          </el-option>
        </el-select>
        <el-select v-model="addhs" placeholder="请选择" v-if = 'addClass==3'>
          <el-option
            v-for="(item, i) in hs"
            :key="i"
            :label="item.hospital_name"
            :value="item.id">
          </el-option>
        </el-select>
        <br v-if="addClass == 3"/>
        <br v-if="addClass == 3"/>
        <el-input v-if="addClass==3" v-model="addks" placeholder="请输入科室"></el-input>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </span>
    </el-dialog>



  </div>
</template>

<script type="text/ecmascript-6">
  import { getCity, getHospitals } from '../../interface';

  export default {
    name: 'itemClass',
    data() {
      return {
        sp: '',
        hs: '',
        tableData: [
          {sp: '成都', hs: '华西医院', ks: '妇产科'},
        ],
        addClass: '1',
        dialogVisible: false,
        addsp: '',
        addhs: '',
        addks: '',
      };
    },
    created(){
      this.getCity();
    },
    methods: {
      getCity() {
        this.$ajax({
          method: 'GET',
          url: getCity(),
        }).then((res) => {
          this.sp = res.data.citys;
        }).catch((error) => {
        });
      },
      getHospitals(cityID) {
        this.$ajax({
          method: 'GET',
          url: getHospitals() +　'/?city_id=' + cityID,
        }).then((res) => {
          this.addhs = '';
          this.hs = res.data.hospitals;
        }).catch((error) => {
        });
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      add() {
        this.dialogVisible = false;
      },
    },
  };
</script>

<style scoped>
  .addBtn{
    margin: 10px;
  }
</style>
