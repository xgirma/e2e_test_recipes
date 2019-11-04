import { Selector } from 'testcafe';

fixture `google search`
    .page `https://www.google.com`;

test('should be on google search page', async t => {
    await t
        .expect(Selector("title").innerText).eql('Google');
});

test('should search for Cheese!', async t => {
    await t
        .typeText('.gLFyf.gsfi', 'Cheese!')
        .pressKey('enter')
});

test("the page title should start with Cheese!", async t => {
    // TODO refresh the page instade of navigating to the next page :(
});
