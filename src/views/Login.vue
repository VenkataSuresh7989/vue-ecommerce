<template>
    <div class="container-fluid">
        <div class="col-lg-3">
            <h4 class="m-1 p-2 border-bottom">Login</h4>
            <div class="form-group form-row">
                <label class="col-lg-3">Email:</label>
                <input type="text" v-model="email" class="form-control" />
            </div>
            <div class="form-group form-row">
                <label class="col-lg-3">Password:</label>
                <input type="password" v-model="password" class="form-control" />
            </div>
            <div>            
                <button class="btn btn-primary mt-2" v-on:click="isLogin">Login</button>
                <span style="padding-left:15px" v-bind:class="(this.message!='' && this.message=='Successfully Logged-in.')?'text-success':'text-danger'">{{this.message}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Login_component',
    data(){
        return {
            email:"suresh@gmail.com",
            password:"798958",
            message:"",
        }
    },
    methods:{
        async isLogin(){
            var response = await fetch(axios.defaults.serviceURL + `/users?email=${this.email}&password=${this.password}`,{ method: "GET" });
            var body = await response.json();
            console.log(JSON.stringify(body));

            if (body.length > 0){
                this.message = "Successfully Logged-in.";
            }                 
            else
                this.message = "Invalid login, please try again";
        }
    }
}
</script>