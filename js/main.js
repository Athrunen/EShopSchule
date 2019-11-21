window.App = new Vue({
    el: '#grid',
    data () {
        return {
            products: {
                "ccc": {
                    name: "aaa",
                    type: 2,
                    image: "images/Instrumente/Gitarren/Verstärker/Line6 Spider V 20 MkII.jpg",
                    price: 0,
                },
                "ccd": {
                    name: "aab",
                    type: 1,
                    image: "images/Instrumente/Gitarren/Verstärker/Line6 Spider V 30 MkII.jpg",
                    price: 0,
                },
                "cdd": {
                    name: "abb",
                    type: 0,
                    image: "images/Instrumente/Gitarren/Verstärker/Line6 Spider V 120 MkII.jpg",
                    price: 0,
                },
                "cda": {
                    name: "dbb",
                    type: 0,
                    image: "images/Instrumente/Gitarren/Zubehör/Plektren/Harley Benton Nylon Player Pick Set Mixed.jpg",
                    price: 0,
                },
            },
            filters: [],
            filtered: {},
            categories: {0: "gitarre", 1: "schlagzeug", 2: "tasteninstrumente"},
            selected: "",
            search: "",
        }
    },
    watch: {
        search: function () {
            console.log("a")
            this.filteredProducts()
        },
        filters: function () {
            console.log("b")
            this.filteredProducts()
        }
    },
    created: function() {
        Object.assign(this.filtered, this.products)
    },
    methods: {
        filteredProducts: function () {
            if (this.filters.length == 0 && this.search == "")
                Object.assign(this.filtered, this.products)
            var reduced = {}
            Object.keys(this.products).forEach(key => {
                if (this.filters.includes(this.products[key].type) || (this.search != "" && this.products[key].name.includes(this.search)))
                    reduced[key] = this.products[key]
            })
            this.filtered = reduced
        }
    }
})