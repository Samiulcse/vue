
Vue.component('card', {

    props: [
        'title', 'content'
    ],
    
    template: `<div class="card  mt-5">
    <div class="card-body">
        <h3 class="card-title">
           {{ title }}
        </h3>
        <div class="card-text">
            {{ content }}
        </div>
    </div>
</div>`
  })

  

new Vue({
    el: '#app',
    data: {
        
    },

    computed: {

       
    },

    methods: {
        
    },

    watch: {
        
    },

    mounted() {
        
    },
})