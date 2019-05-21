Vue.component("card", {
    props: ["title", "content"],

    data(){
        return{
            claps: 0
        }
    },

    template: `<div class="card  mt-5">
    <div class="card-body">
        <h3 class="card-title">
           {{ title }}
        </h3>
        <div class="card-text">
            {{ content }}
        </div>

        <div class="text-center text-muted display-4"> {{ claps }} </div>

        <button v-on:click="clapForArticle" class="btn btn-info btn-sm">Clap for Me</button>
        <button v-on:click="removeArticle" class="btn btn-danger btn-sm">Remove Me</button>
    </div>
</div>`,

    methods: {
        removeArticle() {
            this.$emit("remove-article", this.title);
        },

        clapForArticle(){
            this.claps++;
        }
    }
});

new Vue({
    el: "#app",

    data: {
        articles: [
            {
                title: "Vuejs for begainer 1",
                content: "Some content 1"
            },
            {
                title: "Vuejs for begainer 2",
                content: "Some content 2"
            },
            {
                title: "Vuejs for begainer 3",
                content: "Some content 3"
            }
        ]
    },

    methods: {
        removeArticle(event) {
            this.articles = this.articles.filter(article => article.title != event)
        }
    }
});
