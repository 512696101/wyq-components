<template>
  <div class="uploadBox">
    <!-- 上传文件按钮 -->
    <div class="buttonBox">
      <input
        v-show="false"
        type="file"
        id="fileInput"
        action
        accept=".xlsx,.xls"
        @change="handleChange"
      />
      <button class="btn" @click="beforeUploadFn">导入</button>
    </div>
  </div>
</template>

<script>
import xlsx from "xlsx";

export default {
  name: "Upload",
  props:{
    titleObj:{
      type:Object,
      default:()=>{{}}
    },
    showTitle:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      height: document.documentElement.clientHeight - 130,
      tempData: [],
      show: false,
      Isdisabled: false,
    };
  },
  methods: {
    readFile(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = (e) => {
          resolve(e.target.result);
        };
      })
    },

    beforeUploadFn() {
      document.getElementById("fileInput").click();
    },
    // 采集 EXCEL 数据
    async handleChange(e) {
      const file = e.target.files[0];
      if (!file) return;

      const fileData = await this.readFile(file);

      const workbook = xlsx.read(fileData, { type: "binary" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const list = xlsx.utils.sheet_to_json(worksheet);
      // 把读取出来的数据变为可以提交为服务器的数据格式
      const arr = list.map((item) => {
        if(this.showTitle) {
          Object.keys(item).forEach(item=>{
            console.log(item)
          })
        }
        const obj = {};
        for (const key in this.titleObj) {
          const value = this.titleObj[key].text;
          obj[key] = item[value];
        }
        return obj;
      });
      this.$emit("change", arr);
    },
  },
};
</script>

<style lang="scss" scoped>
.uploadBox {
  // margin-top: 100px;
}
.btn {
  display: inline-block;
  padding: 5px 20px;
  cursor: pointer;
}
</style>
