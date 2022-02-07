import { Selector, t } from 'testcafe'
import checkout_selectors from '../../test-helpers/selectors/checkout_selectors.json'
import * as common_functions from '../../test-helpers/utils/common-functions'


class CheckoutPage {

    constructor() {
        this.firstname = Selector(checkout_selectors.firstname)
        this.lastname = Selector(checkout_selectors.lastname)
        this.postalcode = Selector(checkout_selectors.postalcode)
        this.continuo = Selector(checkout_selectors.continuo)
        this.finish_checkout = Selector(checkout_selectors.finishCheckout)
        this.product_price = Selector(checkout_selectors.productPrice)
        this.summary_tax = Selector(checkout_selectors.summarytax)
        this.summary_total_price = Selector(checkout_selectors.summarytotal)
        this.complete_order_header = Selector(checkout_selectors.completeheader)
        this.complete_order_text = Selector(checkout_selectors.completetext)
    }

    async AddDetailsAndCheckout(details) {
        await common_functions.typeText(this.firstname, details.firstname)
        await common_functions.typeText(this.lastname, details.lastname)
        await common_functions.typeText(this.postalcode, details.postalcode)
        await t.click(this.continuo)
    }

    async CheckTotalPrice() {
        let summaryprice = 0
        for (var i = 0; i < await this.product_price.count; i++) {
            let product_price = (await this.product_price.nth(i).innerText).replace(/\$/g, '')
            summaryprice = summaryprice + parseFloat(product_price)
        }
        const total_price = (await this.summary_total_price.innerText).replace(/\$/g, '')
        await common_functions.assertEqual(parseFloat(total_price), summaryprice + parseFloat(this.summary_tax.innerText))
    }

    async FinishCheckout() {
        await t.click(this.finish_checkout)
    }

    async ValidateCheckoutMessage(details) {
        await common_functions.assertEqual(await this.complete_order_header.innerText, details.completeOrderHeader)
        await common_functions.assertEqual(await this.complete_order_text.innerText, details.completeOrderText)
    }

}

export default CheckoutPage;