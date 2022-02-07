import { Selector, t } from 'testcafe'
import homepage_selectors from '../../test-helpers/selectors/homepage-selectors.json'
import * as common_functions from '../../test-helpers/utils/common-functions'


class ProductPage {

  constructor() {

    this.shopping_cart = Selector(homepage_selectors.shoppingcart)
    this.cart_count = Selector(homepage_selectors.shoppingcartcount)

  }
  async AddProductsToCart(products) {
    for (var i = 0; i < products.length; i++) {
      const product_button = await this.GetProductAddButton(products[i])
      await t.click(product_button)
    }
  }

  async CheckRemoveButton(products) {
    for (var i = 0; i < products.length; i++) {
      const product_remove_button = await this.GetProductRemoveButton(products[i])
      await common_functions.assertTrue(product_remove_button.exists)
    }
  }

  async ValidateCartProductCount(products) {
    await common_functions.assertEqual(this.cart_count.innerText, (products.length).toString())
  }

  async OpenCart() {
    await t.click(this.shopping_cart)
  }

  async RemoveProducts(products) {
    for (var i = 0; i < products.length; i++) {
      await t.click(await this.GetProductRemoveButton(products[i]))
    }
  }

  async GetProductRemoveButton(product) {
    let product_elemet = product.replace(/\s/g, '-').toLowerCase()
    const product_remove_button = Selector("button[data-test='remove-" + product_elemet + "']")
    return product_remove_button
  }

  async GetProductAddButton(product) {
    let product_elemet = product.replace(/\s/g, '-').toLowerCase()
    const product_add_button = Selector("button[data-test='add-to-cart-" + product_elemet + "']")
    return product_add_button
  }

}

export default ProductPage;