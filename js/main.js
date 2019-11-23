String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

window.App = new Vue({
    el: '#grid',
    data () {
        return {
            products: {
                "ccc": {
                    name: "Line6 Spider V 20 MkII",
                    type: 3,
                    image: "'images/Instrumente/Gitarren/Verstärker/Line6 Spider V 20 MkII.jpg'",
                    price: 119,
                    desc: "Modelling Combo für E-Gitarre",
                    long_desc: `
                    Leistung: 20 Watt
                    Bestückung: 1x 8" Lautsprecher
                    16 Sound-Presets, die mit Spider V Remote editiert werden können
                    3 simultan nutzbare Effekte und ein Halleffekt
                    über 200 Verstärker, Boxen und Effekte, die mit Spider V Remote angewählt werden können
                    es stehen auch Sounds für A-Gitarre und Bass zur Verfügung
                    frequenzkorrigierter Kopfhörer-Ausgang - auch als DI-Out verwendbar
                    intuitive Bedienerführung
                    interner Tuner
                    Tap Tempo-Funktion
                    Mikro-USB-Port
                    kostenlose Spider V Remote App
                    verbessertes Design mit neuem Frontbespannungsstoff und Knöpfen
                    Maße: ca. 20,32 x 38,74 x 36,20 cm                
                    `,
                    reviews: [
                        {
                            user: "Nen Name",
                            text: "Hier könnte ihre Werbung stehen",
                            stars: 5,
                        },
                    ]
                },
                "ccd": {
                    name: "Line6 Spider V 30 MkII",
                    type: 3,
                    image: "'images/Instrumente/Gitarren/Verstärker/Line6 Spider V 30 MkII.jpg'",
                    price: 179,
                    desc: "Modelling Combo für E-Gitarre",
                    long_desc: `
                    Leistung: 30 W
                    Lautsprecherbestückung: 1x 8" Custom Fullrange & Hochtöner
                    Classic Speaker' Mode für organischen Klang und natürliches Spielgefühl
                    Amp-Presets, die von renommierten Sounddesignern (z.B. Dan Boul von 65 Amps) abgestimmt wurden
                    neues Design und verbesserte Optik, neuer Frontbespannungsstoff und Knöpfe
                    Artist- und Song-Presets von Bill Kelliher, Josh Smith, Devin Townsend, Dustin Kensrue, Jeff Loomis, Ola Englund, Fluff, Jeff Schroeder, Oz Noy, Vernon Reid
                    Fullrange-Lautsprecher-Modus für Akustik-Gitarren und Jam-Track Wiedergabe
                    über 200 Verstärker, Lautsprecherboxen und Effekte
                    eingebaute Empfänger, die mit Relay Funksystemen funktionieren (60W-240W)
                    kostenlose Spider V Remote-App (Mac, PC, iOS, Android) - kann über Line6 Updater kostenlos auf MkII Software aktualisiert werden
                    Regler: Drive, Bass, Mid, Treble und Volume
                    1 Instrumenteneingang: 6,3 mm Klinke
                    1 Kopfhöreranschluss
                    1 Stereo Aux Eingang
                    eingebautes Stimmgerät, Schlagzeug Loops, Metronom
                    USB Recording & Playback
                    kompatibel mit Line6 FBV3 Art. 380135 & FBV MK II Fußschaltern Art. 231417 & Art. 231418 (Fußschalter nicht im Lieferumfang enthalten)
                    Abmessungen: 208 x 391 x 381 mm
                    Gewicht: 7,3 kg                
                    `,
                    reviews: [
                        {
                            user: "Nen Name",
                            text: "Hier könnte ihre Werbung stehen",
                            stars: 5,
                        },
                    ]
                },
                "cdd": {
                    name: "Line6 Spider V 120 MkII",
                    type: 3,
                    image: "'images/Instrumente/Gitarren/Verstärker/Line6 Spider V 120 MkII.jpg'",
                    price: 349,
                    desc: "Modelling Combo",
                    long_desc: `
                    Leistung: 120 W
                    Lautsprecherbestückung: 1x 12" Custom Fullrange Lautsprecher und Hochtöner
                    Classic Speaker Mode für organischen Klang und natürliches Spielgefühl
                    Amp-Presets, die von renommierten Sounddesignern (z.B. Dan Boul von 65 Amps) abgestimmt wurden
                    Design und verbesserte Optik - neuer Frontbespannungsstoff und Knöpfe
                    Fullrange-Lautsprecher-Modus für Akustik-Gitarren und Jam-Track Wiedergabe
                    Artist- und Song-Presets von Bill Kelliher, Josh Smith, Devin Townsend, Dustin Kensrue, Jeff Loomis, Ola Englund, Fluff, Jeff Schroeder, Oz Noy, Vernon
                    über 200 Verstärker, Lautsprecherboxen und Effekte
                    eingebaute Empfänger, die mit Relay Funksystemen funktionieren (60 - 240 W)
                    kostenlose Spider V Remote-App (Mac, PC, iOS, Android)
                    kann über Line6 Updater kostenlos auf MkII Software aktualisiert werden
                    Regler: Drive, Bass, Mid, Treble und Volume
                    1 x 6,3 mm Instrumenteneingang
                    1 x Kopfhörereingang
                    1 x Stereo Aux Eingang
                    200+ Amp Modelle
                    128 Presets (inkl. Signature Setups & Sounds)
                    eingebautes Stimmgerät
                    Schlagzeug Loops
                    Metronom
                    USB Recording und Playback
                    XLR DI Ausgang
                    kompatibel mit Line6 FBV3 (Art. 380135) & FBV MK II Fußschaltern (Art. 231417 und Art. 231418)
                    eingebauter Line6 Relay G10 Empfänger - Line6 Relay G10 Sender (Art. 398255) kann über den Instrumenteneingang des Verstärkers geladen werden) nicht im Lieferumfang enthalten
                    Abmessungen: 271 x 510 x 490mm
                    Gewicht: 14 kg
                    `,
                    reviews: [
                        {
                            user: "Nen Name",
                            text: "Hier könnte ihre Werbung stehen",
                            stars: 5,
                        },
                    ]
                },
                "cda": {
                    name: "Harley Benton Nylon Player Pick Set Mixed",
                    type: 0,
                    image: "'images/Instrumente/Gitarren/Zubehör/Plektren/Harley Benton Nylon Player Pick Set Mixed.jpg'",
                    price: 2,
                    desc: "Plectrum/Pick Set",
                    long_desc: `
                    mit 12 Stück
                    Nylon
                    Gemischte Stärken: je 2 Stück von 0,46 mm, 0,71 mm, 0,81 mm, 0,96 mm, 1,2 mm, 1,5 mm                
                    `,
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
            categories: {0: "gitarre", 1: "schlagzeug", 2: "tasteninstrumente", 3: "verstärker"},
            selected: "",
            search: "",
            cart: [], // id: amount
            checkout: false,
            netto: 0,
            mws: 0,
            brutto: 0,
            coupon: "",
            coupon_result: 0,
        }
    },
    watch: {
        search: function () {
            this.filteredProducts()
        },
        filters: function () {
            this.filteredProducts()
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
        this.calculatePrice()
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
        },
        updateCart: function() {
            let temp = []
            this.cart.forEach(function(item, index, array) {
                let currentid = Object.keys(item)[0]
                if (item[currentid] > 0) 
                    temp[index] = item
            })

            this.cart = temp

            this.calculatePrice();
        }
    }
})