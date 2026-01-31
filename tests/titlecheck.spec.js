import {test,expect} from '@playwright/test';

test ('check page title', async ({page}) => {
 await page.goto('https://www.saucedemo.com/');
 const title = await page.title();
 console.log('page title is', title);
 await expect(page).toHaveTitle('Swag Labs');
});
