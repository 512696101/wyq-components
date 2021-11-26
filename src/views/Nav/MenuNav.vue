<template>
  <div class="Menu">
    <div class="logo">
      GG NOVA
    </div>
    <div class="reportMenu">
      <h3 v-if="!isCollapse">
        报表中心
      </h3>
      <ReportMenu :is-collapse="isCollapse" />
    </div>
    <div class="routers">
      <h3 v-if="!isCollapse">
        管理员
      </h3>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        router
      >
        <el-menu-item
          v-for="(item) in children"
          :key="item.path"
          :index="item.path"
        >
          <MyIcon :name="item.meta.icon" />

          <template #title>
            {{ item.meta && item.meta.title }}
          </template>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { children } from '@/router/index.js'
import MyIcon from './myIcon.vue'
import ReportMenu from './ReportMenu.vue';
export default {
  name: 'Menu',
  components: {
    MyIcon,
    ReportMenu
  },
  props: {
    isCollapse: {
      required: true,
      type: Boolean,
    },
  },
  setup() {
    return {
      children,
    }
  },
  computed: {},

  methods: {},
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
.logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
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

.routers {
  margin-top: 60px;
}
h3 {
  text-align: center;
  overflow: hidden;
}
</style>
