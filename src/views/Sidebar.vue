<template>
    <div class="mt-2">
        <h4 class="p-1 border-bottom">Sidebar</h4>
        <div>
            <ul class="list-group mt-2 navbar-nav me-auto mb-2 mb-lg-0">  
                <li class="nav-item">
                    <a class="nav-link list-group-item list-group-item-action active" aria-current="page" active href="/">Dashboard</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link list-group-item list-group-item-action" aria-current="page" href="/customers_list">Customer</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link list-group-item list-group-item-action" aria-current="page" href="/cart">Shopping Cart</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'Sidebar_component',
}
</script>