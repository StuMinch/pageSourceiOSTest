describe("Native Test", () => {
    it("should go to app and get source", async () => {
        // await browser.getPageSource();
        await browser.getPageSource();

        var tenButton = await $('~tenButton')
        await tenButton.click()
        await browser.getPageSource();
        
        var twentyButton = await $('~twentyButton')
        await twentyButton.click()
        await browser.getPageSource();

        var fiftyButton = await $('~fiftyButton')
        await fiftyButton.click()
        await browser.getPageSource();

        var oneHundredButton = await $('~oneHundredButton')
        await oneHundredButton.click()
        await browser.getPageSource();


    
    })

})