<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="路由配置">
        <el-input v-model="form.content" type="textarea" />
      </el-form-item>
      <el-form-item label="condition">
        <el-input v-model="form.dialplanCondition" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { insertDailplan, insertGateway } from '@/api/table'
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
      insertDailplan(this.form);
      this.$message('submit!')
      this.$router.push({ path:  '/dailplan/index' })

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

