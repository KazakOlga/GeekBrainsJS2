class List {
    _items = []
    preloading = false
    _page = 1
    _CartInstane = null

    constructor(CartInstane) {
        this._CartInstane = CartInstane
        this.initShowMoreButton()
        this.fetchGoods()
    }

    initShowMoreButton() {
        const showMoreBtn = document.querySelector('.browse_button')
        if (showMoreBtn) {
            showMoreBtn.addEventListener('click', () => {
                this._page++
                this.fetchGoods()
            })
        }
    }

    fetchGoods() {
        this.preloading = true
        const url = `http://localhost:23600/database/items${this._page}.json`;
        return fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.preloading = false
                const goods = data.data.map(item => {
                    return new GoodItem(item, this._CartInstane)
                })
                this._items = [...this._items, ...goods]
                return this._items
            })
            .then(this.render.bind(this))
            .catch((err) => {
                alert('No more pages')
            });
    }

    render() {
        const placeToRender = document.querySelector('.shop_content')
        if (placeToRender) {
            placeToRender.innerHTML = ''
            this._items.forEach(Good => {
                Good.render(placeToRender)
            })
        }
    }
}

class GoodItem {
    _name = ''
    _price = 0
    _img = 0
    _desc = ''
    _CartInstane = null

    constructor({
        name,
        price,
        img,
        desc
    }, CartInstane) {
        this._name = name
        this._price = price
        this._img = img
        this._desc = desc
        this._CartInstane = CartInstane

    }

    addToCart() {
        this._CartInstane.add(this)
        console.log('Added!', this._name)
    }

    render(placeToRender) {
        const block = document.createElement('div')
        block.classList.add('shop_block');
        block.innerHTML = `
        <a href="#"><img class="shop_img" src="${this._img}" alt="img"></a>
        <div class="shop_content_box">
            <a href="#" class="shop_name">${this._name}</a>
            <p class="main_text mts ">${this._desc}</p>
            <div class="price">$${this._price}</div>
        </div>`;
        const btn = new Button('Add to cart', this.addToCart.bind(this))
        btn.render(block)

        placeToRender.appendChild(block)
    }
}

class Cart {
    _items = [ /* CartItem */ ]

    add(GoodItemInstance) {
        const FoundItem = this._items.find((CartItem) => {
            return CartItem._name === GoodItemInstance._name
        })

        if (FoundItem) {
            FoundItem.counter++
        } else {
            this._items.push(new CartItem({
                name: GoodItemInstance._name,
                price: GoodItemInstance._price,
                img: GoodItemInstance._img
            }))
        }

        this.render()
    }

    render() {
        const placeToRender = document.querySelector('.cart-list')
        if (placeToRender) {
            placeToRender.innerHTML = ''
        }

        this._items.forEach(CartItemInstance => {
            CartItemInstance.render(placeToRender)
        })
    }
}

class CartItem {
    _name = ''
    _price = 0
    _img = ''
    counter = 1

    constructor({
        name,
        price,
        img
    }) {
        this._name = name
        this._price = price
        this._img = img
    }

    render(placeToRender) {
        const block = document.createElement('div')
        block.innerHTML = `<div class="cart_content_product_inform center">
        <div class="cart_content__product">
            <img src="${this._img}" alt="product_photo">
            <div class="cart_content__product_info">
                <div class="cc_heading">
                    <h3 class="cart_content__heading">${this._name}</h3>
                    <img class="krestik" src="img/krestik.svg" alt="">
                </div>
                <p class="cc_text">Price: <span class="color_price">$${this._price}</span> </p>
                <div class="ccq">
                    <p class="cc_text">Quantity:${this.counter} </p>

                </div>
            </div>
        </div>`
        placeToRender.appendChild(block)
    }
}

const CartInstane = new Cart()
new List(CartInstane)