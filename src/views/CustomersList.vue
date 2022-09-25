<template>
    <div>
        <h4 class="border-bottom m-1 p-1">
            {{pageTitle}}
            <span class="btn btn-secondary badge badge-light m-2">
                {{customersCount}}
            </span>
            <button class="btn btn-info" v-on:click="onRefreshClick()">Refresh</button>
        </h4>

        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Photo</th>
                    <th>Customer Name</th>
                    <th>Phone</th>
                    <th>Address</th>
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
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name:'CustomersList_component',
    data(){
        return {
            pageTitle:"Customers",
            customersCount:5,
            customers:[
                {id:1,name:'Suresh',phone:'123',address:{city : 'Vizag'},photo:"http://picsum.photos/id/1010/60"},
                {id:2,name:'venkat',phone:'456',address:{city : 'HYD'},photo:"http://picsum.photos/id/1020/60"},
                {id:3,name:'Gopi',phone:'',address:{city : 'BZA'},photo:"http://picsum.photos/id/1040/60"},
                {id:4,name:'Hari',phone:'159',address:{city : 'CHE'},photo:"http://picsum.photos/id/1050/60"},
                {id:5,name:'prasanth',phone:'357',address:{city : 'KKD'},photo:"http://picsum.photos/id/1060/60"},
            ],       }
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
    },
}
</script>