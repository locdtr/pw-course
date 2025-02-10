import {test, expect} from '@playwright/test';

test('test', async ({page}) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.waitForTimeout(3000);
    await page.click('text="Bài học 1: Register Page (có đủ các element)"');
    await page.fill('#username','admin');
    await page.fill('#email','Loc');
    await page.click('#female');
    
});