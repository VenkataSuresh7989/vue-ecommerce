<template>
<div>
  <Header/>
  <div >
    <router-view v-if="$store.state.isLogin"/>
    <Login v-else/>
  </div>
</div>
  
</template>
<script>
import Header from './components/Header.vue';
import Login from './views/Login.vue';
export default {  
  name:'App',
  components:{
    Header,Login
  }
}
</script>