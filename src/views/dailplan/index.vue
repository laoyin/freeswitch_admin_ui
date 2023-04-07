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
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="id" width="110">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="content" width="800"  align="center">
        <template slot-scope="scope">
          <pre>{{scope.row.content}}</pre>
        </template>
      </el-table-column>
      <el-table-column label="condition" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.dialplanCondition }}
        </template>
      </el-table-column>
       <el-table-column label="delete-删除" width="110" align="center">
        <template slot-scope="scope">
           <button @click="_deleteDiaplan(scope.row.id)">delete</button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getDailplan, deleteDiaplan } from '@/api/table'

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
      getDailplan().then(response => {
        console.log(response.data);
        this.list = response.data;
        this.listLoading = false
      })
    },
    _deleteDiaplan(id){
      deleteDiaplan(id).then(response=>{
        this.$router.push({ path:  '/dailplan/index'});
        this.fetchData();
      })
    }
  }
}
</script>
