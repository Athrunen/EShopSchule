String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

window.App = new Vue({
    el: '#grid',
    data () {
        return {
            products: {
                "ccc": {
                    name: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    type: 2,
                    image: "'images/Instrumente/Gitarren/Verstärker/Line6 Spider V 20 MkII.jpg'",
                    price: 0,
                    desc: "dkjdgsjhsdfhdsjbkljhf",
                },
                "ccd": {
                    name: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
                    type: 1,
                    image: "'images/Instrumente/Gitarren/Verstärker/Line6 Spider V 30 MkII.jpg'",
                    price: 18.88,
                    desc: "lkldasklasklklaskla",
                },
                "cdd": {
                    name: "abb",
                    type: 0,
                    image: "'images/Instrumente/Gitarren/Verstärker/Line6 Spider V 120 MkII.jpg'",
                    price: 0,
                    desc: "qewuiqwzequwizeuqizweiuzwhbc",
                },
                "cda": {
                    name: "dbb",
                    type: 0,
                    image: "'images/Instrumente/Gitarren/Zubehör/Plektren/Harley Benton Nylon Player Pick Set Mixed.jpg'",
                    price: 0,
                    desc: "gftdretzdoizöovcö",
                },
                "ggh": {
                    name: "dbb",
                    type: 0,
                    image: "'images/Instrumente/Gitarren/Zubehör/Plektren/Harley Benton Nylon Player Pick Set Mixed.jpg'",
                    price: 0,
                    desc: "gftdretzdoizöovcö",
                },
                "dcs": {
                    name: "dbb",
                    type: 0,
                    image: "'images/Instrumente/Gitarren/Zubehör/Plektren/Harley Benton Nylon Player Pick Set Mixed.jpg'",
                    price: 0,
                    desc: "gftdretzdoizöovcö",
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
            this.filteredProducts()
        },
        filters: function () {
            this.filteredProducts()
        }
    },
    created: function() {
        Object.assign(this.filtered, this.products)
    },
    methods: {
        filteredProducts: function () {
            if (this.filters.length == 0 && this.search == "")
                return Object.assign(this.filtered, this.products)
            var reduced = {}
            Object.keys(this.products).forEach(key => {
                if (this.filters.includes(this.products[key].type) || (this.search != "" && this.products[key].name.includes(this.search)))
                    reduced[key] = this.products[key]
            })
            this.filtered = reduced
        }
    }
})