<template>
  <div class="box">
    <ExportFile :fileList="fileList" @change="changeData" :fileTitle="fileTitle"></ExportFile>
    <div class="table">
          <el-table
        :data="tableData"
        :cell-style="{ textAlign: 'center' }"
        :header-cell-style="{ textAlign: 'center' }"
        border
        style="width: 100%"
      >
        <el-table-column prop="room_ue_id" label="房间UID" />
        <el-table-column prop="type_name" label="房间类型" />
        <el-table-column prop="home_owner" label="房主ID" />
        <el-table-column prop="participant1" label="参与者1" />
        <el-table-column prop="participant2" label="参与者2" />
        <el-table-column prop="participant3" label="参与者3" />
        <el-table-column prop="participant4" label="参与者4" />
        <el-table-column prop="participant1" label="名次1" />
        <el-table-column prop="cost" label="门票消耗" />
        <el-table-column prop="event_time" width="130px" label="比赛结束时间">
          
        </el-table-column>

      </el-table>

    </div>
  </div>
</template>

<script>
import ExportFile from '../components/ExportFile.vue'
export default {
  naem:'Export',
  components:{ExportFile},
  data(){
    return {
      tableData:[],
      fileList: [],
      fileTitle: {
        "房间UID": 'room_ue_id',
        "房间类型": 'type_name',
        '房主ID': 'home_owner',
        "参与者1": 'participant1',
        "参与者2": 'participant2',
        '参与者3': 'participant3',
        '参与者4': 'participant4',
        '名次1': 'participant1',
        '门票消耗': 'cost',
        '比赛结束时间': 'event_time'
      }
    }
  },
  created(){
    const list =  localStorage.getItem('fileList')
    this.tableData = JSON.parse(list || [])
    this.fileList = this.tableData
  },
  methods: {
    selectionChange(val) {
      this.fileList = val
    },
    changeData(data, callback) {
       const lsit = data.map(item => {
        return {
          ...item,
          '比赛结束时间': '2021-7-16'
        }
      })
      callback(lsit)
    }
  }

}
</script>

<style>
.table {
  margin-top: 15px;
}
</style>