import {test, expect } from "@playwright/test";

test("Check title", async ({page}) => {
    await page.goto("https://material.playwrightvn.com/");
    await expect (page).toHaveTitle(/Tài liệu học automation test/);
})

test("Go to register page ", async ({page,}) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.getByRole("link", {name: "Bài học 1: Register Page (có đủ các element)"}).click();
    await expect (page).toHaveTitle(/User Registration/);
})