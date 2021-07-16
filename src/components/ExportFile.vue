<template>
  <button
    :class="className"
    class="btn"
    type="primary"
    :disabled="disabled"
    @click="submit"
    >{{ title }}</button
  >
</template>

<script>
import xlsx from 'xlsx'

export default {
  name: 'ExportFile',
  props: {
    fileList: {
      type: Array,
      required: true,
      default: () => [],
    },
    fileTitle: {
      type: Object,
      required: true,
    },
    fileName: {
      type: String,
      default: '数据',
    },
    className: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: '导出数据',
    },
  },
  data() {
    return {
      disabled: false,
      list: [],
    }
  },
  methods: {
    // 导出数据
    submit() {
      if (this.fileList.length <= 0) {
        return this.$message({
          message: '请先选择要导出的数据',
          type: 'warning',
          showClose: true,
        })
      }

      this.disabled = true
      this.list = this.fileList.map((item) => {
        const obj = {}
        for (const key in this.fileTitle) {
          obj[key] = item[this.fileTitle[key]]
        }
        return obj
      })
      let sheet = xlsx.utils.json_to_sheet(this.list)

      const changeList = (list) => {
        if (Object.prototype.toString.call(list) !== '[object Array]') {
          console.error('请传递一个数组')
          list = []
          return
        }
        sheet = xlsx.utils.json_to_sheet(list)
      }
      this.$emit('change', this.list, changeList)

      const book = xlsx.utils.book_new()
      xlsx.utils.book_append_sheet(book, sheet, 'Sheet1')
      xlsx.writeFile(book, `${this.fileName}.xlsx`)
      this.disabled = false
    },
  },
}
</script>

<style scoped>
.btn {
  padding: 10px;
}

</style>
