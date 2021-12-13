<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="运营商网关-英语">
        <el-input v-model="form.gatewayname" />
      </el-form-item>
      <el-form-item label="认证">
        <el-select v-model="form.register" placeholder="是否认证">
          <el-option label="是" value=1 />
          <el-option label="否" value=0 />
        </el-select>
      </el-form-item>
      <el-form-item label="port">
        <el-input v-model="form.port" />
      </el-form-item>
      <el-form-item label="ip">
        <el-input v-model="form.ip" />
      </el-form-item>
      <el-form-item label="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { insertGateway } from '@/api/table'
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {

      console.log(this.form);
      insertGateway(this.form);
      this.$message('submit!')
      this.$router.push({ path:  '/example/table' })

    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

