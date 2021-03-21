import Button from './button'
import './style.css'
import './list'
import './goodItem'
import './cartItem'
import List from './list'
import GoodItem from './goodItem'
import CartItem from './cartItem'

export default class Cart {
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