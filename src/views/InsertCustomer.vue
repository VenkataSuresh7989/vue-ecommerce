<template>
    <div class="row">
        <div>
            <form>
                <h4>New Customer</h4>
                <div class="row">
                    <div class="form-group form-row">
                        <label class="col-lg-4">Customer Name</label>
                        <div class="col-lg-8">
                            <input type="text" v-model="name" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group form-row">
                        <label class="col-lg-4">city</label>
                        <div class="col-lg-8">
                            <input type="text" v-model="city" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group form-row">
                        <label class="col-lg-4">phone</label>
                        <div class="col-lg-8">
                            <input type="text" v-model="phone" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group form-row">
                        <label class="col-lg-4">photo</label>
                        <div class="col-lg-8">
                            <input type="text" v-model="photo" class="form-control" />
                        </div>
                    </div>
                    <div class="border-top p-2">
                        <button class="btn btn-success" v-on:click="addCustomer($event)">Save</button>
                    </div>
                </div>                
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'InsertCustomer_component',
    data(){
        return {
            id:"",
            name:"",
            city:"",
            phone:"",
            photo:"",
        }
    },
    methods:{
        async addCustomer(event){
            console.log(event);
            event.preventDefault();
            var customers = {
                name:this.name,
                address : { city:this.city },
                phone:this.phone,
                photo:this.photo,
            };
            var response = await fetch(axios.defaults.serviceURL + '/customers',{
                method:"POST",
                body:JSON.stringify(customers),
                headers:{
                    "Content-type":"application/json",
                }
            });

            var body = await response.json();
            console.log(body);
            if(body){
                this.name = "";
                this.city = "";
                this.phone = "";
                this.photo = "";
                this.$router.push("/customers_list");
            }
                
        }
    }
}
</script>