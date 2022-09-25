<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6" v-for="(data, index) in products" :key="index">
                <div class="card mt-2">
                    <div class="card-body">
                    <div># {{ data.id }}
                        <span class="close_icon">
                            <box-icon type='solid' name='message-square-x' v-on:click="onDelete(index)"></box-icon>
                        </span>
                    </div>
                    <h5 class="pt-2 border-top"> {{ data.productName }} </h5>
                    <div>$ {{ data.price }}</div>
                    <div class="row card-footer" >
                        <div class="col-sm-6">
                            <span style="color:black" class="badge">{{data.quantity}}</span>
                            <div class="btn-group">
                                <div class="btn btn-outline-success" v-on:click="onIncrement(index,10)">+</div>
                                <div class="btn btn-outline-success" v-on:click="onDecrement(index,0)">-</div>
                            </div>
                        </div>
                        <div class="col-sm-6" style="text-align:end">
                            <router-link :to="`/product/${index + 1}`">Details</router-link>
                            <button  class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'ShoppingCart_component',
    data(){
        return {
            products:[]
        }
    },
    mounted(){
        this.getProductInfo();
    },
    methods:{
        getProductInfo: function(){
            axios.get(axios.defaults.serviceURL + "/products").then(res => {
                this.products=(res.status==200 && res.data != undefined)?res.data:{};
            });
        },
        onIncrement: function(idx,maxVal){
            if(this.products[idx].quantity < maxVal)
                this.products[idx].quantity += 1; 
        },
        onDecrement: function(idx,minVal){
            if(this.products[idx].quantity > minVal)
                this.products[idx].quantity -= 1;
        },
        onDelete: function(idx){
            let allProducts=[...this.products];
            if(window.confirm("Are You Sure to Delete?")){
                allProducts.splice(idx,1);
                this.products=allProducts;
            } 
        }
    },
}
</script>