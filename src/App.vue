<template>
<div>
  <Header/>
  <ShoppingCart/>
</div>
  
</template>
<script>
import Header from './components/Header.vue';
import ShoppingCart from './views/ShoppingCart.vue';

export default {
  name:'App',
  components:{
    Header,ShoppingCart
  }
}
</script>