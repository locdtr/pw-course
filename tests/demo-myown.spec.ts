import { test, expect } from '@playwright/test';

//Define trước khi test thì mình sẽ cần làm cái gì trước
test.beforeEach(async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
});

//Tạo danh sách cần làm
const todoList = [
    'Ăn sáng',
    'Học Playwright',
    'Thực hành Playwright',
    'Nộp bài tập'
];

// Tạo miêu tả cho test case

test.describe('Tao mới một cái todo', () => {
    //Đây là test case tạo mới todo
    test('Tao moi mot todo', async({page}) => {
        //tao mot cai locator goi la newTodo
        const newTodo = page.getByPlaceholder('What needs to be done?');
        
        //Tao todo dau tien
        await newTodo.fill(todoList[0]);
        //Nhan Enter
        await newTodo.press('Enter');
        //Kiem tra xem todo vua tao co ton tai hay khong
        await expect(page.getByTestId('todo-title')).toHaveText(todoList[0]);

        //Tao todo thu 2
        await newTodo.fill(todoList[1]);
        await newTodo.press('Enter');
        await expect(page.getByTestId('todo-title')).toHaveText([todoList[0], todoList[1]]);

        //Tao todo thu 3
        await newTodo.fill(todoList[2]);
        await newTodo.press('Enter');
        await expect(page.getByTestId('todo-title')).toHaveText([todoList[0], todoList[1], todoList[2]]);

        //Tao todo thu 4
        await newTodo.fill(todoList[3]);
        await newTodo.press('Enter');
        await expect(page.getByTestId('todo-title')).toHaveText([todoList[0], todoList[1], todoList[2], todoList[3]]);
    });
});
