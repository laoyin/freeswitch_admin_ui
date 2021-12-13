<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="id">
        <el-input v-model="form.id" />
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item label="vm_password">
        <el-input v-model="form.vmPassword" />
      </el-form-item>
      <el-form-item label="accountcode">
        <el-input v-model="form.accountcode" />
      </el-form-item>
      <el-form-item label="caller_id_name">
        <el-input v-model="form.effectiveCallerIdName" />
      </el-form-item>
      <el-form-item label="caller_id_number">
        <el-input v-model="form.effectiveCallerIdNumber" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { insertDirectory, insertGateway, getDirectory } from '@/api/table'
export default {
  data() {
    return {
      form: {
        id: '',
        name: '',
        password: '',
        vmPassword: '',
        accountcode: '',
        effectiveCallerIdName: '',
        delivery: false,
        type: [],
        effectiveCallerIdNumber: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {

      console.log(this.form);
      insertDirectory(this.form);
      this.$message('submit!')
      this.$router.push({ path:  '/directory/index' })

    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    getDetail(id){
      getDirectory(id).then(response => {
        console.log(response.data);
        this.list = response.data;
        this.form.name = this.list.name;
        this.form.password = this.list.password;
        this.form.id= this.list.id;
        this.form.vmPassword = this.list.vmPassword;
        this.form.effectiveCallerIdName = this.list.effectiveCallerIdName;
        this.form.effectiveCallerIdNumber = this.list.effectiveCallerIdNumber;
        this.form.accountcode = this.list.accountcode;
      })
    }
  },
  mounted(){
    // console.log(this.$route)
    var id = this.$route.query.query;
    this.form.name = "";
    this.form.password = "";
    this.form.id= "";
    this.form.vmPassword = "";
    this.form.effectiveCallerIdName = "";
    this.form.effectiveCallerIdNumber = "";
    this.form.accountcode = "";
    if(!id){
      return;
    }
    this.getDetail(id);
  }

  
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

