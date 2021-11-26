<template>
  <div>
    <el-dropdown>
      <el-icon style="margin-right: 15px">
        <Setting />
      </el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logOut">
            退出
          </el-dropdown-item>
          <!-- <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item> -->
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span>{{ $store.getters.userName }}</span>
  </div>
</template>

<script>
import { Setting } from '@element-plus/icons'
import {mapMutations} from 'vuex';
export default {
  name: 'Info',
  components: {
    Setting,
  },
  setup() {
    const methods = {
      ...mapMutations('userInfo',['setUserInfoState']),
      logOut() {
      },
    }
    return {
      ...methods,
    }
  },
  created() {
    
  },
}
</script>
<style lang="scss" scoped>
.el-icon {
  cursor: pointer;
}
</style>
