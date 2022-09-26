<template>
<div>
  <Header/>
  <div >
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3" v-if="$store.state.isLogin">
          <Sidebar/>
        </div>
        <div class="col-lg-9">
          <router-view v-if="$store.state.isLogin"/>
          <div v-else>
            <router-view/>
          </div>
        </div>
      </div>
    </div>    
  </div>
</div>
  
</template>
<script>
import Header from './components/Header.vue';
import Sidebar from './views/Sidebar.vue';

export default {  
  name:'App',
  components:{
    Header,Sidebar,
  }
}
</script>