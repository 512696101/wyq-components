<template>
  <div id="app">
    <div id="nav">
      <button v-for="item in navList" @click="$router.push(item.path)" :key="item.name" class="left" > {{item.name}}</button> 
     
    </div>
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
  data(){
    return {
      navList:[
        {
          name:'TagInput',
          path:'/'
        },
        {
          name:'导入文件',
          path:'/Import'
        },
        {
          name:'导出文件',
          path:'/Export'
        },
        {
          name:'dome',
          path:'/dome'
        },
        {
          name:'树形菜单',
          path:'/tree'
        }
      ]
    }


  }
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

 button {
   margin-left: 20px;
    display: inline-block;
    height: 30px;
    padding: 0 5px;

 }
}
</style>
