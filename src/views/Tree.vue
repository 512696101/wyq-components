<template>
  <div class="Tree">
    <Tree @selectNode="selectNode"  :data="treeData"></Tree>
  </div>
</template>

<script>
import Tree from '../components/Tree.vue'
export default {
  components:{Tree},
  data() {
    return {
      treeData: [
        {
          title: '目录',
          chidren: [
            {
              title: '我的音乐',
              chidren: [
                {
                  title: '周杰伦',
                  chidren: [
                    {
                      title: '发如雪',
                    },
                  ],
                },
                {
                  title: '王杰',
                  chidren: [
                    {
                      title: '一场游戏一场梦',
                    },
                  ],
                },
              ],
            },
            {
              title: '我的照片',
            },
          ],
        },
      ],
    }
  },
  methods: {
    selectNode(data) {
      console.log(data)
    }
  }
}
</script>

<style></style>
