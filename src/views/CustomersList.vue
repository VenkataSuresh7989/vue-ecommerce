<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <h4 class="border-bottom m-1 p-1">{{pageTitle}}
                    <span class="btn btn-secondary badge badge-light m-2">
                        {{customersCount}}
                    </span>
                    <button class="btn btn-info" v-on:click="onRefreshClick()">Refresh</button>
                    <a class="nav-link active" aria-current="page"  href="/new_customer">
                        <button  class="btn btn-primary">New Customer</button>
                    </a>
                </h4>
            </div>
            
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Photo</th>
                    <th>Customer Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cust,index) in customers" :key="index">
                    <td>{{cust.id}}</td>
                    <td>
                        <img :src="cust.photo" alt="Customer" />
                        <div>
                            <button class="btn btn-sm btn-secondary" v-on:click="onChangePic(index)">Change Picture</button>
                        </div>
                    </td>
                    <td>{{cust.name}}</td>
                    <td :class="(cust.phone == '') ? 'isPhone':''">{{(cust.phone == "") ? ("No Phone") : (cust.phone)}}</td>
                    <td>{{cust.address.city}}</td>
                    <td>
                        <button class="btn btn-secondary isAnchor"><router-link :to="`/updated_customer/${index + 1}`" >Update</router-link></button>
                        <button class="btn btn-danger" v-on:click="isDelete(cust.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'CustomersList_component',
    data(){
        return {
            pageTitle:"Customers",
            customersCount:5,
            customers:[],       
        }
    },
    mounted(){
        this.getProductInfo();
    },
    methods:{
        onRefreshClick: function(){
            console.log("Refresh Click.");
            this.customersCount = 7;
        },
        onChangePic: function(index){
            var custArr = this.customers;
            custArr[index].photo = "http://picsum.photos/id/104/60";
        },
        getProductInfo: function(){
            axios.get(axios.defaults.serviceURL + "/customers").then(res => {
                this.customers=(res.status==200 && res.data != undefined)?res.data: [];
                console.log("this.customers",this.customers);
            });
        },
        async isDelete(id){
            if(window.confirm("Are you sure to delete this customer?")){
                var res = await fetch(axios.defaults.serviceURL + `/customers/${id}`,{
                    method:"DELETE"
                })

                if(res.ok){
                    var allCustomers = [...this.customers];
                    this.customers = allCustomers = allCustomers.filter((cust)=>{
                        return cust.id != id;
                    })
                }
            }
        }
    },
}
</script>