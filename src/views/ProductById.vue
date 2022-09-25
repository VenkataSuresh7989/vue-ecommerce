<template>
    <div class="container-fluid">
        <div class="row" v-if="Object.keys(this.products).length > 0">
            <div class="col-lg-6">
                <div class="card mt-2">
                    <div class="card-body">
                    <div># {{ products.id }}
                        <span class="close_icon">
                            <box-icon type='solid' name='message-square-x' v-on:click="onDelete()"></box-icon>
                        </span>
                    </div>
                    <h5 class="pt-2 border-top"> {{ products.productName }} </h5>
                    <div>$ {{ products.price }}</div>
                    <div class="row card-footer" >
                        <div class="col-sm-6">
                            <span style="color:black" class="badge">{{products.quantity}}</span>
                            <div class="btn-group">
                                <div class="btn btn-outline-success" v-on:click="onIncrement(10)">+</div>
                                <div class="btn btn-outline-success" v-on:click="onDecrement(0)">-</div>
                            </div>
                        </div>
                        <div class="col-sm-6" style="text-align:end">                        
                            <a class="nav-link active" aria-current="page"  href="/cart">
                                <button  class="btn btn-primary">Back</button>
                            </a>
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
    name:'ProductById_component',
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
            var rId = this.$route.params.id;
            axios.get(axios.defaults.serviceURL + `/products/${rId}`).then(res => {
                this.products=(res.status==200 && res.data != undefined)?res.data:{};
            });
        },
        onIncrement: function(maxVal){
            if(this.products.quantity < maxVal)
                this.products.quantity += 1; 
        },
        onDecrement: function(minVal){
            if(this.products.quantity > minVal)
                this.products.quantity -= 1;
        },
        onDelete: function(){
            if(window.confirm("Are You Sure to Delete?")){
                this.products = [];
            } 
            console.log(Object.keys(this.products).length);
        }
    },
}
</script>
