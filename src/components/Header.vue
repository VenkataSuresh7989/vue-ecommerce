<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-style navbar-dark ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">eCommerce</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                </div> -->
                <div class="collapse navbar-collapse nav_content" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                
                        <li class="nav-item" v-if="$store.state.isLogin">
                            <a class="nav-link active" aria-current="page"  href="/">Dashboard</a>
                        </li> 
                        <li class="nav-item" v-if="$store.state.isLogin">
                            <a class="nav-link" aria-current="page" href="/customers_list">Customer</a>
                        </li>
                        <li class="nav-item" v-if="$store.state.isLogin">
                            <a class="nav-link " aria-current="page" href="/cart">Shopping Cart</a>
                        </li>
                        <li class="nav-item" v-if="$store.state.isLogin">
                            <a class="nav-link" type="button" v-on:click="isLogout()"  aria-current="page" href="#">Log Out</a>
                        </li>
                        <li class="nav-item" v-if="!$store.state.isLogin">
                            <a class="nav-link active" aria-current="page" href="/login">Login</a>
                        </li>                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name:'Header_component',
    methods:{
        isLogout: function(){
            this.$store.state.userName = "";
            localStorage.clear();
            this.$router.push("/login");
            window.location.reload();
        }
    }
}
</script>