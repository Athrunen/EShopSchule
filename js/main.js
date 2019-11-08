window.App = new Vue({
    el: '#grid',
    data: {
        products: {
            "ccc": {
                name: "aaa",
                type: 2,
            },
            "ccd": {
                name: "aab",
                type: 1,
            },
            "cdd": {
                name: "abb",
                type: 0,
            },
            "cda": {
                name: "dbb",
                type: 0,
            },
        },
        filters: [],
        categories: {0: "gitarre", 1: "schlagzeug", 2: "tasteninstrumente"},
        selected: "",
    },
    methods: {
        filteredProducts: function (filters, products) {
            var filters = this.filters
            var products = this.products
            console.log(filters)
            if (filters.length == 0)
                return products
            console.log(products)
            var reduced = products.keys().reduce(function (accumulator, key) {
                accumulator[key] = key || {}
                if (filters.includes(products[key].type))
                    accumulator[key].push(products[key])
                return accumulator
            })
            console.log(reduced)
            return reduced
        }
    }
})