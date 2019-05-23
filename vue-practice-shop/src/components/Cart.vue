<template>
  <div class="card">
    <div class="card-header">
        <h3 class="card-title">All Products in Cart</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item" v-for="(item, index) in items" :key="index">
          {{ item.title }} - ${{ item.price }}
          <button class="btn badge badge-danger float-right">Remove From Cart</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    props:[
        'items'
    ]
}
</script>
