import { test, expect } from '@playwright/test';

test('Get user Details using GET API', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    const responseJson = await response.json();
    expect(response.status()).toBe(200);
    expect(responseJson.data.first_name).toBe("Janet");
})

test('Create User using POST API', async ({ request }) => {
    var user = {
        "name": "vignesh",
        "job": "teacher"
    }
    const response = await request.post('https://reqres.in/api/users',{
        data:user,
        headers: {"ACCEPT":"application/JSON"}
    });
    const responseJson = await response.json();
    expect(response.status()).toBe(201);
    expect(responseJson.name).toBe(`${user.name}`);
    expect(responseJson.job).toBe(`${user.job}`);
});

test('Update User using PUT API', async ({ request }) => {
    var user = {
        "name": "vignesh s",
        "job": "instructor"
    }
    const response = await request.put('https://reqres.in/api/users/2',{
        data:user,
        headers: {"ACCEPT":"application/JSON"}
    });
    const responseJson = await response.json();
    expect(response.status()).toBe(200);
    expect(responseJson.name).toBe(`${user.name}`);
    expect(responseJson.job).toBe(`${user.job}`);
});

test('Delete User using DELETE API', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
});