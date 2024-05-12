import {test} from '@playwright/test'

test.skip('Skipped test', async()=>{
    console.log("Skipped Test Block");
})

test('Skip in Webkit', async({page, browserName})=>{
    test.skip(browserName==='webkit','This feature is not yet implemented or fixed in Safari');
    console.log('Skip with Condition test');
})

test.fail('Not yet Ready test', async()=>{
    // test.fail();
    console.log("Failed Test Block");
})

test('Fail in Webkit', async({page, browserName})=>{
    test.fail(browserName==='webkit','This feature is failing in Safari');
    console.log('Fail with Condition test');
})

test.fixme('Fix me Test', async()=>{
    console.log('Fix me Test');
})

test('Slow Test', async()=>{
    test.slow();
    console.log('Slow Test');
})

test('Slow Test with Condition', async({browserName})=>{
    test.slow(browserName==='webkit','This feature will run slowly in Safari');
    console.log('Slow run with Condition test');
})

// test('Only Test', async()=>{
//     console.log('Only Test');
// })