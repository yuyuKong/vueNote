<template>
  <div id="app">
    <!--<Head></Head>-->
    <div class="main">
      <router-view/>
    </div>

  </div>
</template>

<script>
    import Head from '@/components/common/Head'
    export default {
      name: 'App',
      components:{
          Head
      }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{
  float:left;
  width:100%;
  overflow: auto;
}
</style>
