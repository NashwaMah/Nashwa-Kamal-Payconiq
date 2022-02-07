import login_credentials from '../test-helpers/test-data/login-credentials.json'
import LoginPage from '../models/pages/login_page.js'
import * as common_functions from '../test-helpers/utils/common-functions'
const login_page = new LoginPage()

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
        console.log("-------Start Test --------")
        await login_page.ValidateSignin()
        console.log("------ End Test --------")

    })

test.meta({
    ID: 'Aut-001',
    SEVERITY: 'High',
    STORY: 'Logout',
    TEST_RUN: 'Test Logout for SauceLabs'
})
    ('Logout from SauceLabs', async t => {
        console.log("-------Start Test --------")
        await login_page.Logout()
        await login_page.ValidateLogout()
        console.log("------ End Test --------")

    })



