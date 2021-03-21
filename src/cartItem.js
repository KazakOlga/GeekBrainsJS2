import Button from './button'
import './style.css'
import './list'
import './goodItem'
import './cart'
import List from './list'
import GoodItem from './goodItem'
import Cart from './cart'


export default class CartItem {
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