class List {
    _items = [];
    preloading = false;
    _page = 1;
    _CartInstane = null;

    constructor(CartInstane) {
        this._CartInstane = CartInstane
        this.initShowMoreButton()
        this.fetchGoods()
    }
    initShowMoreButton() {
        const showMoreBtn = document.querySelector('.button')
        if (showMoreBtn) {
            showMoreBtn.addEventListener('click', () => {
                this._page++
                this.fetchGoods()
            })
        }
    }
    fetchGoods() {
        this.preloading = true
        const url = `http://localhost:2900/lesson2/database/items.json`;
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
        const placeToRender = document.querySelector('.shop-content')
        if (placeToRender) {
            placeToRender.innerHTML = ''
            this._items.forEach(Good => {
                Good.render(placeToRender)
            })
        }
    }
}
class GoodItem {
    _name = "";
    _text = "";
    _img = "";
    _price = 0;
    _CartInstane = null;

    constructor({
        name,
        text,
        img,
        price
    }, _CartInstane) {
        this._name = name
        this._text = text
        this._img = img
        this._price = price
        this._CartInstane = CartInstane
    }
    addToCart() {
        this._CartInstane.add(this)
        console.log('Added!', this._name)
    }

    render() {
        const placeToRender = document.querySelector('.shop_content');
        if (placeToRender) {
            const block = document.createElement('div');
            block.classList.add('shop_block');
            block.innerHTML = `
            <a href="#"><img class="shop_img" src="${this._img}" alt="img"></a>
            <button class="add_cart" href="#"><img src="pictures/card_vec.svg" alt="card">Add to Cart</button>
            <div class="shop_content_box">
                <a href="#" class="shop_name">${this._name}</a>
                <p class="main_text mts ">${this._text}</p>
                <div class="price">$${this._price}</div>
            </div>`;
            const btn = new Button('Добавить в корзину', this.addToCart.bind(this))
            btn.render(block)
            placeToRender.appendChild(block);
        }
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
            }))
        }

        this.render()
    }

    render() {
        const placeToRender = document.querySelector('.cart_content')
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
    counter = 1

    constructor({
        name,
        price
    }) {
        this._name = name
        this._price = price
    }

    render(placeToRender) {
        const block = document.createElement('div')
        block.classList.add('cart_content_product_inform')
        block.innerHTML = `<div class="cart_content_product_inform">
        <div class="cart_content__product">
            <img src="${this._img}" alt="product_photo">
            <div class="cart_content__product_info">
                <div class="cc_heading">
                    <h3 class="cart_content__heading">${this._name}</h3>
                    <img class="krestik" src="pictures/krestik.svg" alt="">
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
new List();