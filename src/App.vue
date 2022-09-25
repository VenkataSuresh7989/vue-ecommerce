<template>
<div>
  <Header/>
  <Login/>
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