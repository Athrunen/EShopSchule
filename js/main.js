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
                    price: 20,
                    desc: "dkjdgsjhsdfhdsjbkljhf",
                    long_desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,",
                    reviews: [
                        {
                            user: "Nen Name",
                            text: "Hier könnte ihre Werbung stehen",
                            stars: 5,
                        },
                    ]
                },
                "ccd": {
                    name: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
                    type: 1,
                    image: "'images/Instrumente/Gitarren/Verstärker/Line6 Spider V 30 MkII.jpg'",
                    price: 18.88,
                    desc: "lkldasklasklklaskla",
                    long_desc: "",
                    reviews: [
                        {
                            user: "Nen Name",
                            text: "Hier könnte ihre Werbung stehen",
                            stars: 5,
                        },
                    ]
                },
                "cdd": {
                    name: "abb",
                    type: 0,
                    image: "'images/Instrumente/Gitarren/Verstärker/Line6 Spider V 120 MkII.jpg'",
                    price: 8,
                    desc: "qewuiqwzequwizeuqizweiuzwhbc",
                    long_desc: "",
                    reviews: [
                        {
                            user: "Nen Name",
                            text: "Hier könnte ihre Werbung stehen",
                            stars: 5,
                        },
                    ]
                },
                "cda": {
                    name: "dbb",
                    type: 0,
                    image: "'images/Instrumente/Gitarren/Zubehör/Plektren/Harley Benton Nylon Player Pick Set Mixed.jpg'",
                    price: 6,
                    desc: "gftdretzdoizöovcö",
                    long_desc: "",
                    reviews: [
                        {
                            user: "Nen Name",
                            text: "Hier könnte ihre Werbung stehen",
                            stars: 5,
                        },
                    ]
                },
                "ggh": {
                    name: "dbb",
                    type: 0,
                    image: "'images/Instrumente/Gitarren/Zubehör/Plektren/Harley Benton Nylon Player Pick Set Mixed.jpg'",
                    price: 5,
                    desc: "gftdretzdoizöovcö",
                    long_desc: "",
                    reviews: [
                        {
                            user: "Nen Name",
                            text: "Hier könnte ihre Werbung stehen",
                            stars: 5,
                        },
                    ]
                },
                "dcs": {
                    name: "dbb",
                    type: 0,
                    image: "'images/Instrumente/Gitarren/Zubehör/Plektren/Harley Benton Nylon Player Pick Set Mixed.jpg'",
                    price: 169,
                    desc: "gftdretzdoizöovcö",
                    long_desc: "",
                    reviews: [
                        {
                            user: "Nen Name",
                            text: "Hier könnte ihre Werbung stehen",
                            stars: 5,
                        },
                    ]
                },
            },
            filters: [],
            filtered: {},
            categories: {0: "gitarre", 1: "schlagzeug", 2: "tasteninstrumente"},
            selected: "",
            search: "",
            cart: [], // id: amount
            checkout: false,
            netto: 0,
            mws: 0,
            brutto: 0,
            coupon: "",
        }
    },
    watch: {
        search: function () {
            this.filteredProducts()
        },
        filters: function () {
            this.filteredProducts()
        },
        cart: function() {
            this.calculatePrice()
        },
        coupon: function() {
            this.calculatePrice()
        },
    },
    created: function() {
        Object.assign(this.filtered, this.products)
    },
    mounted: function() {
        let element = document.getElementById("items")
        element.style.width = element.getBoundingClientRect().width
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
        },
        changeCart: function(event, id, mode="add", pos) {
            let amount = parseInt(event.target.previousElementSibling.value)
            if (pos) {
                amount = parseInt(document.getElementById(pos).value)
            }
            if (amount <= 0) {
                return
            }
            let temp = []
            let placed = false
            this.cart.forEach(function(item, index, array) {
                let currentid = Object.keys(item)[0]
                if (currentid == id) {
                    if (mode == "replace")
                        temp[index] = {[id]: amount}
                    if (mode == "substract" && item[currentid] - amount >= 1)
                        temp[index] = {[id]: item[currentid] - amount}
                    if (mode == "add")
                        temp[index] = {[id]: item[currentid] + amount}
                    placed = true
                    return
                }
                temp[index] = item
            })
            if(!placed) {
                temp.push({[id]: amount})
            }
            this.cart = temp
        },
        calculatePrice: function() {
            let prod = {}
            Object.assign(prod, this.products)
            let modifier = 1
            if (this.coupon == "lol")
                modifier = 0.95
            let brutto = 0
            this.cart.forEach(function(item, index, array) {
                let currentid = Object.keys(item)[0]
                brutto += item[currentid] * prod[currentid].price
            })

            let old_brutto = brutto

            brutto = (brutto * modifier)

            let cpr = old_brutto - brutto

            let netto = (brutto / 1.19)

            let mws = (brutto - netto)

            this.brutto = brutto.toFixed(2)
            this.netto = netto.toFixed(2)
            this.mws = mws.toFixed(2)
            this.coupon_result = cpr.toFixed(2)
        }
    }
})