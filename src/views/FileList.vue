<template>
  <div class="box">
    <ImportFileList
      :titleObj="titleObj"
      showTitle
      @change="getFileData"
    ></ImportFileList>
    <div class="tableBox">
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
import ImportFileList from '../components/Import.vue'
export default {
  name: 'File',
  components: { ImportFileList },
  data() {
    return {
      tableData: [],
      fileList: [],
      titleObj: {
        // 变量名
        room_ue_id: {
          // Excel表头名字
          text: `房间UID`,
        },
        type_name: {
          text: `房间类型`,
        },
        home_owner: {
          text: `房主ID`,
        },
        participant1: {
          text: `参与者1`,
        },
        participant2: {
          text: `参与者2`,
        },
        participant3: {
          text: `参与者3`,
        },
        participant4: {
          text: `参与者4`,
        },
        participant1: {
          text: `名次1`,
        },
        cost: {
          text: `门票消耗`,
        },
        event_time: {
          text: `比赛结束时间`,
        },
      },
    }
  },
  methods: {
    getFileData(data) {
      this.tableData = data
      // const arr = []
      // for (let i = 0; i < 10; i++) {
      //   arr.push(data[0])
      // }

      localStorage.setItem('fileList', JSON.stringify(this.tableData || []))
    },
    selectionChange(val) {
      this.fileList = val
    },
  },
}
</script>

<style></style>
