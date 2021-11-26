<template>
  <el-icon
    :size="size"
    :color="color"
  >
    <component
      :is="icon"
      v-if="icon"
    />
  </el-icon>
</template>

<script>
import { ref, defineComponent } from 'vue'
import * as Icons from '@element-plus/icons'
export default defineComponent({
  name: 'MyIcon',
  components: Icons,
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const icon = ref(props.name)
    return {
      icon,
    }
  },
})
</script>
