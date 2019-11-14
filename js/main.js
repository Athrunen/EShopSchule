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
        search: "",
    },
    methods: {
        filteredProducts: function () {
            if (this.filters.length == 0)
                return this.products
            var reduced = {}
            Object.keys(this.products).forEach(key => {
                if (this.filters.includes(this.products[key].type) || (this.search != "" && this.products[key].name.includes(this.search)))
                    reduced[key] = this.products[key]
            });
            console.log(reduced)
            return reduced
        }
    }
})