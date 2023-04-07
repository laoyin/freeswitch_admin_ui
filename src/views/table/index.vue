<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
        <el-table-column label="id" width="110">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="gatewayname" width="195">
        <template slot-scope="scope">
          {{ scope.row.gatewayname }}
        </template>
      </el-table-column>

      <el-table-column label="ip" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.ip }}</span>
        </template>
      </el-table-column>
      <el-table-column label="port" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.port }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="register" width="110" align="center">
        <template slot-scope="scope">
         {{ scope.row.register}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="username" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.username }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="password" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.password }}
        </template>
      </el-table-column> -->
      <el-table-column label="delete-删除" width="110" align="center">
        <template slot-scope="scope">
           <button @click="_deleteGateway(scope.row.id)">delete</button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getGateWayList, deleteGateway } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getGateWayList().then(response => {
        console.log(response.data);
        this.list = response.data;
        this.listLoading = false
      })
    },
    _deleteGateway(id){
      deleteGateway(id).then(response=>{
        this.$router.push({ path:  '/example/table'});
        this.fetchData();
      })
    }
  }
}
</script>
