<template>
    <div>
        <div class="card text-center mt-1" style="width: 100%">
            <div class="card-body">
                <h5 class="card-title">Welcome to Vue - eCommerce <span class="admin">{{$store.state.userName}}</span></h5>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Dashboard_component'
}
</script>