<template>
    
    <div class="row">
        <div class="col-lg-6 mx-auto">
            <h1>Registration</h1>

            <div class="form-froup form-row">
                <label class="col-lg-4" htmlFor="email">Email</label>
                <input type="text" id="email" class="form-control" v-model="email" v-on:change="isValid"/>
            </div>
            <div class="form-froup form-row">
                <label class="col-lg-4" htmlFor="password">Password</label>
                <input type="password" id="password" class="form-control" v-model="password" v-on:change="isValid"/>
            </div>
            <!-- <div class="form-froup form-row">
                <label class="col-lg-4" htmlFor="email">Full Name</label>
                <input type="text" id="fullName" class="form-control" v-model="fullName" v-on:change="isValid"/>
            </div>

            <div class="form-froup form-row">
                <label class="col-lg-4" htmlFor="dateOfBirth">Date Of Birth</label>
                <input type="date" id="dateOfBirth" class="form-control" v-model="email" v-on:change="isValid"/>
            </div> -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-right">
                        <button class="btn btn-secondary m-2" v-on:click="isRegister($event)">Register</button>
                        <span style="padding-left:15px" v-bind:class="(this.message!='' && this.message=='Successfully Logged-in.')?'text-success':'text-danger'">{{this.message}}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:'Registration_component',
    data(){
        return {
            email:"",
            password:"",
            message:""
            // fullName:"",
            // dateOfBirth:"",
            // controls:["email","password","fullName","dateOfBirth"],
            // errors:{
            //     email:[],
            //     password:[],
            //     fullName:[],
            //     dateOfBirth:[],
            // }
        }
    },
    methods:{
        async isRegister(event){
            if(this.userName != "" && this.password != ""){
                event.preventDefault();
                var customers = {
                    email:this.email,
                    password:this.password,
                };
                var response = await fetch(axios.defaults.serviceURL + '/users',{
                    method:"POST",
                    body:JSON.stringify(customers),
                    headers:{
                        "Content-type":"application/json",
                    }
                });

                var body = await response.json();
                console.log(body);
                if(body){
                    this.email = "";
                    this.password = "";
                    this.$router.push("/login");
                }
            }
            else
                this.message = "Register credentials are not empty...";
            
        },
        isValid: function(){
            console.log("isValid");
        }
    }
}
</script>