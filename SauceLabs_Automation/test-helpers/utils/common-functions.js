require('dotenv').config()
import { t, Role } from 'testcafe'
import LoginPage from '../../models/pages/login_page.js'
import login_credentials from '../test-data/login-credentials.json'


export async function assertEqual(actualResult, expectedResult) {
    await t.expect(actualResult).eql(expectedResult)
}
export async function assertNotEqual(actualResult, expectedResult) {
    await t.expect(actualResult).notEql(expectedResult)
}
export async function assertTrue(condition) {
    await t.expect(condition).ok()
}
export async function assertFalse(condition) {
    await t.expect(condition).notOk()

}
export async function typeText(field, text) {
    if (text) {
        await t
            .click(field)
            .pressKey('ctrl+a delete');
        await t.typeText(field, text, { paste: true })
    }
    else {
        console.log("empty value passed ")
    }

}
export const saucedemoRole = Role(`${login_credentials.saucedemoURL}`, async t => {
    const login_page = new LoginPage();
    await login_page.Login(login_credentials.Login);
}, { preserveUrl: true });

