<template>
    <div class="main">

        <div class="leftContent">
            <div style="width:300px; margin:20px">分机号<el-input v-model="userAccount" /></div>
            <div style="width:300px; margin:20px">密码<el-input v-model="userPassword" /></div>
            <div style="margin:20px"><el-button type="primary" style="margin-right:10px" @click="register">分机注册</el-button>
            
            <audio id="audio_remote" autoplay="autoplay"> </audio>
            <audio id="userAudio" autoplay="autoplay"> </audio>
            <el-button type="primary" @click="answer">接听</el-button>
            <el-button @click="hungup">挂断</el-button>
            </div>
        </div>

        <div class="rightContent">
            <div style="width:300px; margin:20px">呼叫者<el-input v-model="callAccount" /></div>
            <div style="width:300px; margin:20px">对应路由<el-input v-model="callEnd" /></div>
            <div style="width:300px; margin:20px">呼叫id<el-input v-model="callId" /></div>
            <div style="width:300px; margin:20px">tts-文本<el-input v-model="text" /></div>
            <div style="width:300px; margin:20px">tts-发音人<el-input v-model="lan" /></div>
            <div style="width:300px; margin:20px"><el-button type="primary" @click="sendCommand">命令呼叫</el-button></div>
        </div>

        <div class="tableContent">
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
            <el-table-column label="callStatus" width="110" align="center">
                <template slot-scope="scope">
                <span>{{ scope.row.callStatus }}</span>
                </template>
            </el-table-column>
            <el-table-column label="callerPhone" width="110" align="center">
                <template slot-scope="scope">
                {{ scope.row.callerPhone }}
                </template>
            </el-table-column>
            <el-table-column class-name="status-col" label="text" width="110" align="center">
                <template slot-scope="scope">
                {{ scope.row.text}}
                </template>
            </el-table-column>
            <el-table-column align="center" prop="created_at" label="lan" width="200">
                <template slot-scope="scope">
                <span>{{ scope.row.lan }}</span>
                </template>
            </el-table-column>
            <el-table-column label="hangupReason" width="110" align="center">
                <template slot-scope="scope">
                {{ scope.row.hangupReason }}
                </template>
            </el-table-column>
            </el-table>
            <div class="t-pagination">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="total"
                    @current-change="current_change">
                </el-pagination>
            </div>
        </div>

    </div>
    
</template>

<script>
import {anwserPhone, login, hungupPhone} from '@/utils/sip_phone'
import { sendCallCommand } from '@/api/table'
import { getCallHistotyList } from '@/api/table'

export default {
  name: 'Xterm',
  data(){
      return {
          userAccount: "",
          userPassword: "",
          callAccount: "",
          callEnd: "",
          callId:"",
          text:"",
          lan:"",
          list: null,
          listLoading: true
      }
  },
  mounted() {
    // this.initSocket()
    this.initAccount();
  },
  beforeDestroy() {
    this.socket.close()
    this.term.dispose()
  },
  methods: {
    register(){
        login(this.userAccount, this.userPassword, function(calledNumber){
            alert("来电话啦"+ calledNumber);
            },
            function(){
            alert("登录成功");
            }
            );
    },
    initAccount() {

    },
    answer() {
        anwserPhone(function(){}, function(){});
    },
    hungup(){
        hungupPhone(function(){}, function(){});
    },
    sendCommand(){
        var callParams = {
            "caller": this.callAccount,
            "called": this.callEnd,
            "callId": this.callId,
            "text": this.text,
            "lan": this.lan
        }
        sendCallCommand(callParams);
        this.$message('发送ok!')
    },
    fetchData() {
      this.listLoading = true
      getCallHistotyList().then(response => {
        console.log(response.data);
        this.list = response.data;
        this.listLoading = false
      })
    }
  },
  created(){
      this.fetchData()
  }
}
</script>

<style scoped>
.main{
    display: flex;
    flex-wrap: wrap;
}
.leftContent{
    width: 400px;
    height: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
}
.rightContent{
    width: 600px;
    height: 600px;
    border-left:solid 1px rgb(8, 0, 0);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.tableContent{
    display: flex;
    /* width: 1000px; */
    height: 700px;
    width: 100%;
    flex-direction:column;
    /* flex-wrap: wrap; */
    /* flex-flow: wrap; */
    /* justify-content: center; */
    align-items:center;
}
.t-pagination{
    width: 200px;
    height: 100px;
    display: flex;
    align-items:center;
}
</style>