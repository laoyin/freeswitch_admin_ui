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
      <el-table-column label="password" width="100"  align="center">
        <template slot-scope="scope">
          <pre>{{scope.row.password}}</pre>
        </template>
      </el-table-column>
      <el-table-column label="accountcode" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.accountcode }}
        </template>
      </el-table-column>
      <el-table-column label="effectiveCallerIdName" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.effectiveCallerIdName }}
        </template>
      </el-table-column>
      <el-table-column label="gateway" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.content }}
        </template>
      </el-table-column>
      <el-table-column label="effectiveCallerIdNumber" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.effectiveCallerIdNumber }}
        </template>
      </el-table-column>
      <el-table-column label="vmPassword" width="150" align="center">
        <template slot-scope="scope">
           <span @click="getFixPage(scope.row)">{{ scope.row.vmPassword }}</span>
        </template>
      </el-table-column>
      <el-table-column label="update" width="100" align="center">
        <template slot-scope="scope">
           <button @click="getFixPage(scope.row)">update</button>
        </template>
      </el-table-column>
      <el-table-column label="delete" width="150" align="center">
        <template slot-scope="scope">
           <button @click="_deleteDirectory(scope.row.id)">delete</button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { directoryList, deleteDirectory } from '@/api/table'

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
      directoryList().then(response => {
        console.log(response.data);
        this.list = response.data;
        this.listLoading = false
      })
    },
    getFixPage(data){
      console.log(data);
      this.$router.push({ path:  '/directory-add/index?query='+data.id})
      // this.$router.push({path:data.id});
    },
    _deleteDirectory(id){
      console.log("delete" + id);
      deleteDirectory(id).then(response=>{
        this.$router.push({ path:  '/directory/index'});
        this.fetchData();
      })
      
    }
  }
}
</script>
