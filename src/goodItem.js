import Button from './button'
import './style.css'
import './list'
import './cart'
import './cartItem'
import List from './list'
import Cart from './cart'
import CartItem from './cartItem'

export default class GoodItem {
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