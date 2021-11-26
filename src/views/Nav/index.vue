<template>
  <el-container>
    <el-aside :class="{ close: isCollapse }">
      <MenuNav :is-collapse="isCollapse" />
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <span class="icon">
          <el-icon
            v-if="isCollapse"
            style="cursor: pointer"
            @click="changeCollapse(false)"
          ><caret-right /></el-icon>
          <el-icon
            v-else
            style="cursor: pointer"
            @click="changeCollapse(true)"
          ><caret-left /></el-icon>
        </span>
        <Info />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { CaretLeft, CaretRight } from '@element-plus/icons'
import MenuNav from './MenuNav.vue'
import Info from './Info.vue'

export default defineComponent({
  components: {
    CaretLeft,
    CaretRight,
    MenuNav,
    Info,
  },
  setup() {
    const isCollapse = ref(false)
    const methods = {
      changeCollapse(type) {
        this.isCollapse = type
      },
    }
    return {
      isCollapse,
      ...methods,
    }
  },
})
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  background-color: #f3f4f6;
}
.el-header {
  position: relative;
  background-color: #ffffff;
  color: #182b50;
  box-shadow: 0 0 10px 0 #ccc;
  margin-bottom: 4px;
  line-height: 60px;
  .icon {
    width: 60px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    .el-icon {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      &:hover {
        background-color: #f3f4f6;
      }
    }
  }
}

.el-aside {
  box-sizing: content-box;
  overflow-x: hidden;
  color: var(--el-text-color-primary);
  height: 100%;
  background-color: #2a68c9;
  color: #fff;
  width: 200px;
  border: none;
  transition: width 0.5s;
}
.close {
  width: 63px !important;
  transition: width 0.5s;
}
</style>
