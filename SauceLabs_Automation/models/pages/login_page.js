require('dotenv').config()
import { Selector, t } from 'testcafe'
import login_selectors from '../../test-helpers/selectors/login-selectors.json'
import * as common_functions from '../../test-helpers/utils/common-functions'
import homepage_selectors from '../../test-helpers/selectors/homepage-selectors.json'


class LoginPage {

    constructor() {

        this.password = Selector(login_selectors.Password)
        this.username = Selector(login_selectors.username)
        this.submit = Selector(login_selectors.submitBtn)
        this.cart_icon = Selector(homepage_selectors.shoppingcart)

        this.menu_btn = Selector(homepage_selectors.menu_btn)
        this.logout = Selector(homepage_selectors.logout)
        this.login_container = Selector(login_selectors.loginContainer)

    }
    async Login(credential) {
        await common_functions.typeText(this.username, credential.username)
        await common_functions.typeText(this.password, credential.password)
        await t.click(this.submit)
    }

    async ValidateSignin() {
        await common_functions.assertTrue(await this.cart_icon.exists)
    }

    async Logout() {
        await t.click(this.menu_btn)
        await t.click(this.logout)
    }

    async ValidateLogout() {
        await common_functions.assertTrue(this.login_container.exists)
    }

}

export default LoginPage;