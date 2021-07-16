<template>
  <div class="tagInput" :style="{width: width}">
    <span v-show="tagList.length > 0" class="clear" @click="clearAll">x</span>
    <div class="tags">
      <div v-for="(item, index) in tagList" :key="index" :style="{backgroundColor:background, color:color}" class="item">
        <span class="content">{{ item }}</span>
        <span class="del" @click="del(index,false)">x</span>
      </div>
    </div>
    <div>

      <input
        v-model.trim="tagValue"
        class="input"
        type="text"
        :placeholder="placeholder"
        @keyup.enter="handleEnter"
        @keydown.delete="del(value.length - 1, true)"
      >

    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => []
    },
    width: {
      type: String,
      default: '500px'
    },
    placeholder: {
      type: String,
      default: '按下回车保存'
    },
    background: {
      type: String,
      default: '#3a88fd'
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  data() {
    return {
      tagList: [],
      tagValue: ""
    };
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.tagList = this.value;
        this.$emit('change')
      }
    }
  },
  created() {
    this.tagList = this.value;
  },
  methods: {
    handleEnter() {
      if (!this.tagValue) return
      const findValue = this.tagList.find((item) => item === this.tagValue);
      if (!findValue) {
        this.tagList.push(this.tagValue);
        this.$emit("input", this.tagList);
      }
      this.tagValue = "";
    },
    del(index, Bool) {
      if (Bool) {
        if (this.tagValue === "" && index >= 0) {
          this.tagList.splice(index, 1);
        }
      } else {
        this.tagList.splice(index, 1);
      }
    },
    clearAll() {
      this.tagList = [];
      this.$emit("input", this.tagList);
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.tagInput {
  position: relative;
  margin: 0 auto;
  width: 500px;
  height: 100%;
  min-height: 50px;
  outline: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
.input {
  border: none;
  outline: none;
  width: 100%;
  padding: 0 15px;
  margin-top: 10px;
  max-width: 100%;
}

.tags {
  display: flex;
  flex-wrap: wrap;
}
.btn {
  margin-right: 10px;
}
.item {
  position: relative;
  line-height: 20px;
  padding: 5px 15px 5px 5px;
  background-color: #dcdfe6;
  margin: 5px;
  // margin-right: 10px;
  // margin-top: 5px;
  border-radius: 4px;
}
.content {
  margin-right: 3px;
  margin-left: 1x;
}
.del {
  position: absolute;
  right: 3px;
  cursor: pointer;
}
.clear {
  position: absolute;
  font-size: 12px;
  color: #ccc;
  width: 12px;
  height: 12px;
  line-height: 10px;
  border: 1px solid #ccc;
  border-radius: 50%;
  text-align: center;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.clear:hover {
  border-color: #000;
  color: #000;
}
</style>
