new Vue({
    el: '#app',
    data: {
        currencies: {},
        amount : 0,
        apiKey: '8dbfb4563daf67ce2cfa',
        from : 'EUR',
        to : 'USD',
        result: 0
    },

    computed: {

        formattedCountries(){
            return Object.values(this.currencies);
        },

        calculateResult(){
            return (Number(this.amount)*this.result).toFixed(3);
        },

        disabled(){
           return this.amount === 0 || !this.amount;
        }

    },

    methods: {
        getCurrencies(){

            const currencies = localStorage.getItem('currencies');

            if(currencies){
                this.currencies = JSON.parse(currencies);
                return;
            }

            axios.get('https://free.currconv.com/api/v7/currencies?apiKey='+this.apiKey)
             .then(response =>{
                 this.currencies = response.data.results;

                 localStorage.setItem('currencies', JSON.stringify(response.data.results));
             })
        },

        convertCurrency(){
            const key = this.from+'_'+this.to;
            axios.get('https://free.currconv.com/api/v7/convert?q='+key+'&apiKey='+this.apiKey)
            .then(response =>{
                this.result = response.data.results[key].val;
            })
        }
    },

    mounted() {
        this.getCurrencies();
    },
})