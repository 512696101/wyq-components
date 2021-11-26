<template>
  <div class="reportMenu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title>
            <span>Group One</span>
          </template>
          <el-menu-item index="1-1">
            item one
          </el-menu-item>
          <el-menu-item index="1-2">
            item two
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">
            item three
          </el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>
            <span>item four</span>
          </template>
          <el-menu-item index="1-4-1">
            item one
          </el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>
          Navigator Two
        </template>
      </el-menu-item>
      <el-menu-item
        index="3"
        disabled
      >
        <el-icon><document /></el-icon>
        <template #title>
          Navigator Three
        </template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>
          Navigator Four
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'ReportMenu',
  props: {
    isCollapse: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
   
   
  },
}
</script>

<style lang="scss" scoped>
::v-deep {
  .el-sub-menu__title {
    color: #fff !important;
    background-color: #2a68c9 !important;
    &:hover {
      background-color: #255baf !important;
    }
  }
  .el-menu-item:hover {
    background-color: #255baf !important;
  }
  .el-menu-item-group__title {
    color: #000;
    font-size: 20px;
  }
}

.el-menu {
  background-color: #2a68c9;
  border: none;
  color: #fff;
  li,
  ul {
    color: #fff !important;
    background-color: #2a68c9 !important;
  }
  .el-menu-item {
    &.hover {
      background-color: #fff !important;
    }
  }
}


</style>
