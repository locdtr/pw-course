import {test,expect} from '@playwright/test';

test('Test case: Register new account', async ({page}) => {

await test.step('Step 1: Go to the register page', async () => {
    await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
});

await test.step('Step 2: Input info', async () => {
    await page.fill('input[id="username"]', 'admin');
    await page.locator("//input[@id='email']").pressSequentially('justin@gmail.com', {delay: 100});
    await page.locator ('//input[@id="reading"]').check();
    await page.locator ('//select[@id="interests"]').selectOption({value: "science"});
    await page.locator ('//select[@id="country"]').selectOption({value: 'uk'});
    await page.locator ('//input[@id="profile"]').setInputFiles('./testData/image.png');
});

await test.step('Step 3: Click submit button', async () => {
    //await page.locator("//button[text()='Register']").click();
    await page.locator("//button[contains(text(),'Register')]").click();
});

});


test('Test case: Click', async ({page}) => {
    
    await test.step('Step 1: Go to the click page', async () => {
        await page.goto('https://material.playwrightvn.com/018-mouse.html');
    });

    await test.step('Step 2: Single Click', async () => {
        await page.locator("//div[@id='clickArea']").dblclick();
    });
    
    await test.step('Step 3: Click right mouse', async () => {
        await page.locator("//div[@id='clickArea']").click({button: 'right'});
    });
    
    
    await test.step('Step 4: Copy texts', async () => {
        await page.locator("//h1").click({modifiers: ['Control'], button: 'left'});
    });



});