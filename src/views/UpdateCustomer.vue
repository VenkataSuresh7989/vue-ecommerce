<template>
    <div class="row">
        <div>
            <form>
                <h4>Update Customer</h4>
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
                        <button class="btn btn-success" v-on:click="updateCustomer($event)">Save</button>
                    </div>
                </div>                
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'UpdateCustomer_component',
    data(){
        return {
            id:"",
            name:"",
            city:"",
            phone:"",
            photo:"",
        }
    },
    mounted(){
        this.getInfo();
    },
    methods:{
        getInfo: function(){
            let id = this.$route.params.id;
            axios.get(axios.defaults.serviceURL + `/customers/${id}`).then(res => {
                console.log("res",res);
                var resp =(res.status==200 && res.data != undefined)?res:{};
                this.id = resp.data.id;
                this.name = resp.data.name;
                this.city = res.data.address.city;
                this.phone = res.data.phone;
                this.photo = res.data.photo;
            });
        },
        async updateCustomer(event){
            console.log(event);
            let id = this.$route.params.id;
            event.preventDefault();
            var customers = {
                name:this.name,
                address : { city:this.city },
                phone:this.phone,
                photo:this.photo,
            };
            var response = await fetch(axios.defaults.serviceURL + `/customers/${id}`,{
                method:"PUT",
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
