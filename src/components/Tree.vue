<template>
  <div class="Tree">
    <div class="text" v-for="(item, index) in data" :key="index">
      <span class="icon" v-if="item.chidren" @click="select(item)">{{
        item.show ? '-' : '+'
      }}</span>
      <span class="icon2" v-else>o</span>
      <span class="val" @click="selectNode(item, $event)">
        {{ item.title }}</span
      >

      <div class="chidren">
        <Tree :ExpandAll="ExpandAll" :data="item.chidren" v-show="item.show"></Tree>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tree',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    ExpandAll: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  created() {
    if (this.ExpandAll) {
      this.data.forEach((item) => {
        item.show = true
      })
    }
  },
  methods: {
    select(item) {
      item.show = !item.show
      if (item.chidren && item.chidren.length > 0) {
        item.chidren = item.chidren.map((val) => {
          return {
            ...val,
            show: !item.show,
          }
        })
      }
    },
    selectNode(item, e) {
      this.$emit('selectNode', item, e)
    },
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.Tree {
  padding-left: 20px;
  width: 500px;
  margin: 0 auto;
}
.text {
  text-align: left;
  margin-top: 10px;
  min-width: 20px;
}
.icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border: 1px solid #ccc;
  cursor: pointer;
}
.icon2 {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  background-color: skyblue;
  cursor: pointer;
}
.val {
  display: inline-block;
  height: 20px;
  line-height: 20px;
  margin-left: 8px;
}
</style>
