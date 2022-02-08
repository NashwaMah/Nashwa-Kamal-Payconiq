import { Selector, t } from 'testcafe'
import cart_selectors from '../../test-helpers/selectors/cart_selectors.json'
import * as common_functions from '../../test-helpers/utils/common-functions'


class CartPage {

    constructor() {
        this.checkout = Selector(cart_selectors.checkout)
    }

    async ValidateCartItemsAdded(products) {
        await common_functions.assertEqual(await this.ValidateCartItem(products), products.length)
    }

    async ValidateCartItemsRemoved(products) {
        await common_functions.assertEqual(await this.ValidateCartItem(products), 0)
    }

    async ValidateCartItem(products) {
        let item_exist = 0
        for (var i = 0; i < products.length; i++) {
            const item = Selector("div").withText(products[i])
            if (await item.exists) {
                item_exist = item_exist + 1
            }
        }
        return item_exist
    }
    async CheckoutOrder() {
        await t.click(this.checkout)
    }


}

export default CartPage;