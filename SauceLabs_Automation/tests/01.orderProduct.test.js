import * as common_functions from '../test-helpers/utils/common-functions'
import ProductPage from '../models/pages/products_page'
import CartPage from '../models/pages/cart_page'
import CheckoutPage from '../models/pages/checkout_page'
import checkout_details from '../test-helpers/test-data/checkout_details.json'
const products = require('../test-helpers/test-data/products.json').products
const login_credentials = require('../test-helpers/test-data/login-credentials').login_credentials
const product_page = new ProductPage()
const cart_page = new CartPage()
const checkout_page = new CheckoutPage()

fixture`Product Order`
    .page`${login_credentials.saucedemoURL}`
    .beforeEach(async t => {
        await t.useRole(common_functions.saucedemoRole)
        await product_page.AddProductsToCart(products)

    })
test.meta({
    ID: 'Aut-003',
    SEVERITY: 'Critical',
    STORY: 'Log in',
    TEST_RUN: 'Add Products to Cart from Home Page'
})

    ('Add Products to Cart from Home Page', async t => {
        await product_page.CheckRemoveButton(products)
        await product_page.ValidateCartProductCount(products)
    })

test.meta({
    ID: 'Aut-004',
    SEVERITY: 'Medium',
    STORY: 'Log in',
    TEST_RUN: 'Test Remove Product from cart '
})

    ('Remove Products from Cart page ', async t => {
        await product_page.OpenCart()
        await product_page.RemoveProducts(products)
        await cart_page.ValidateCartItemsRemoved(products)
    })

test.meta({
    ID: 'Aut-005',
    SEVERITY: 'Critical',
    STORY: 'Log in',
    TEST_RUN: 'Test checkout for Saucedemo'
})

    ('Perform Checkout', async t => {
        await product_page.OpenCart()
        await cart_page.ValidateCartItemsAdded(products)
        await cart_page.CheckoutOrder()
        await checkout_page.AddDetailsAndCheckout(checkout_details)
        await checkout_page.CheckTotalPrice()
        await checkout_page.FinishCheckout()
        await checkout_page.ValidateCheckoutMessage(checkout_details)
    })




