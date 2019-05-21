<template>
    <div class="card my-5">
        <div class="card-body">
            <h4 class="text-center card-title">{{ product.title }}</h4>
            <p class="text-center text-muted card-text display-4">$ {{ Number(product.price).toFixed() }}</p>
            <button class="btn btn-primary btn-sm form-control">Add To Cart</button>
        </div>
    </div>
</template>


<script>
export default {
    props: ['product']
}
</script>
