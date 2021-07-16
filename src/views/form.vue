<template>
  <div class="form">
    <TagInput v-model="formData.list"></TagInput>
     <el-button style="margin-top:30px;" type="primary" @click="click">按钮</el-button>
     <el-button style="margin-top:30px;" type="primary" @click="click2">回显</el-button>
  </div>
</template>
<script>
import TagInput from '../components/TagInput.vue'
export default {
  name: 'Form',
  components:{TagInput},
  data(){
    return {
      formData:{
        list:[]
      }
    }
  },

  methods:{
    click() {
      console.log(this.formData.list)
    },
    click2() {
      setTimeout(()=>{
          this.formData.list = [12312, 12312333, 1111]
        },2000)
      }
  }
}
</script>

<style>

</style>