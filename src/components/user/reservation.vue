<template>
  <div class="content">
    <img src="../../assets/ycyl.jpg" width="100%"/>
    <br/>
    <div class="block">
      <div class="demonstration">预约时间：</div>
      <el-date-picker
        v-model="date"
        type="date"
        size="small"
        @change="dateChange"
        placeholder="选择日期"
        :picker-options="pickerOptions0">
      </el-date-picker>
    </div>
    <br/>
    <div>
      <div class="demonstration">选择地点</div>
      <el-radio-group v-model="position" size="small">
        <el-radio-button v-for="(it, i) in positionList" :label='it.id' :key='i' >{{it.city_name}}</el-radio-button>
      </el-radio-group>
    </div>
    <br/>
    <div>
      <div class="demonstration">选择医院</div>
      <el-radio-group v-model="hospital" size="small">
        <el-radio-button :label="hospital.id"  v-for="(hospital, i) in hospitalList" key="i">{{hospital.hospital_name}}</el-radio-button>
      </el-radio-group>
    </div>
    <br/>
    <div>
      <div class="demonstration">选择科室</div>
      <el-radio-group v-model="department" size="small">
        <el-radio-button :label="department.department.id" v-for="(department, i) in departmentList" key="i">{{department.department.department_name}}</el-radio-button>
      </el-radio-group>
    </div>
    <br/>
    <div>
      <div class="demonstration">选择病情关联人</div>
      <el-radio-group v-model="patient" size="small">
        <el-radio-button :label="child.id" key="i" v-for="(child, i) in childs">{{child.real_name}}</el-radio-button>
      </el-radio-group>
    </div>
    <br/>
    <br/>
    <el-button type="danger" class="center_block" @click="yy" >预约</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getCity, getHospitals, getDepartmentDetails, saveSeeADoctor } from '../interface';

  export default {
    name: 'reservation',
    data() {
      return {
        childs: '',
        position: '',
        positionList: '',
        hospital: '',
        hospitalList: '',
        department: '',
        departmentList: '',
        patient: '',
        date: '',
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
      };
    },
    created() {
      this.getCity();
    },
    watch: {
      position (newValue, oldVale) {
        this.getHospitals(newValue);
        this.hospital = '';
      },
      hospital (newValue, oldVale) {
       this.getDepartmentDetails(newValue);
      },
    },
    methods: {
      getCity() {
        this.$ajax({
          method: 'GET',
          url: getCity(),
        }).then((res) => {
          this.positionList = res.data.citys;
          this.childs = res.data.childs;
          this.getHospitals(this.positionList[0].id);
        }).catch((error) => {
        });
      },
      getHospitals(cityID) {
        this.$ajax({
          method: 'GET',
          url: getHospitals() +　'?city_id=' + cityID,
        }).then((res) => {
          this.hospitalList = res.data.hospitals;
          this.getDepartmentDetails(this.hospitalList[0].id);
        }).catch((error) => {
        });
      },
      getDepartmentDetails(hospitall_id) {
        this.$ajax({
          method: 'GET',
          url: getDepartmentDetails() +　'?hospitall_id=' + hospitall_id,
        }).then((res) => {
          this.departmentList = res.data;
          this.department = '';
        }).catch((error) => {
        });
      },
      dateChange(date) {
        this.date = date;
      },
      yy() {
        if (this.date === '') {
          this.$message.warning('请选择预约时间');
          return;
        }
        if (this.position === '' ||　this.hospital === '' ||　this.department === '' || this.patient === '') {
          this.$message.error('请选择预约地点、医院、科室、病人');
          return;
        }
        const data = {
          city_id: this.position,
          hospital_id: this.hospital,
          department_id: this.department,
          child_id: this.patient,
          appointment_date: this.date,
          price: 100,
        };
        this.$ajax({
          method: 'POST',
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
          data: data,
          url: saveSeeADoctor(),
        }).then((res) => {
          this.$message.success('您已预约，请等待客服联系');
        }).catch((error) => {
        });
      },
    }
  };
</script>
<style scoped>
  .demonstration{
    color: #F79D2D;
    margin-bottom: .3rem;
  }
</style>
