import LoginPage from '../models/pages/login_page.js'
import * as common_functions from '../test-helpers/utils/common-functions'
const login_page = new LoginPage()
const login_credentials = require('../test-helpers/test-data/login-credentials').login_credentials

fixture`Login`
    .page`${login_credentials.saucedemoURL}`
    .beforeEach(async t => {
        await t.useRole(common_functions.saucedemoRole)

    })

test.meta({
    ID: 'Aut-001',
    SEVERITY: 'blocker',
    STORY: 'Login',
    TEST_RUN: 'Test Login for SauceLabs'
})
    ('Log in to SauceLabs', async t => {
        await login_page.ValidateSignin()
    })

test.meta({
    ID: 'Aut-001',
    SEVERITY: 'High',
    STORY: 'Logout',
    TEST_RUN: 'Test Logout for SauceLabs'
})
    ('Logout from SauceLabs', async t => {
        await login_page.Logout()
        await login_page.ValidateLogout()
    })



