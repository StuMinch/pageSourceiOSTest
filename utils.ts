const cloneCapabilities = (capabilities :WebDriver.Capabilities, numberOfClones :String | Number) => {
    const capsList = []
    for (let index = 0; index < numberOfClones; index++) {
        capsList.push(capabilities);
        
    }
    return capsList
}

export { cloneCapabilities }