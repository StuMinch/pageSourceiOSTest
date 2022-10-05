import { cloneCapabilities } from "./utils";

// process.env.NODE_DEBUG = "request";
const date: Date = new Date();
const NUM_OF_INSTANCES: String | Number = process.env.WDIO_CAP_MULTIPLIER || 1;
const baseCapability : WebDriver.Capabilities = {

    platformName: 'iOS',
    'appium:app': 'storage:f019419c-fdf2-4429-a58d-dbfa095e4b14',
    'appium:deviceName': 'iPhone .*',
    'sauce:options': {
        build: process.env.SAUCE_BUILD_NAME ? process.env.SAUCE_BUILD_NAME : `sample-wdio-ts-${date.toISOString()}`,
        tunnelIdentifier: process.env.TUNNEL_IDENTIFIER ? process.env.TUNNEL_IDENTIFIER : process.env.TUNNEL_NAME,
    }
}

const simCapability : WebDriver.Capabilities = {

    platformName: 'iOS',
    'appium:app': 'storage:bb729adb-f9aa-40d6-b2dc-42ef3bab3845',
    'appium:deviceName': 'iPhone 11 Simulator',
    'appium:platformVersion': '15.4',
    'sauce:options': {
        build: process.env.SAUCE_BUILD_NAME ? process.env.SAUCE_BUILD_NAME : `sample-wdio-ts-${date.toISOString()}`,
        tunnelIdentifier: process.env.TUNNEL_IDENTIFIER ? process.env.TUNNEL_IDENTIFIER : process.env.TUNNEL_NAME,
    }
}



const config: WebdriverIO.Config  = {
    // debug: true,
    // execArgv: ['--inspect=127.0.0.1:5859'],

    runner: 'local',
    automationProtocol: 'webdriver',

    // outputDir: 'logs',

    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        },
    },

    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,    
    
    specs: [
        // './tests/*.ts',
        './tests/sample-native.ts'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 20,
    capabilities: [
        simCapability
    ],
    logLevel: 'debug',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 0,
    services: [    ['sauce', {
        sauceConnect: false,
            sauceConnectOpts: {
                verbose:1,
                logfile: '-',
                logger:(message: String) => {
                    console.log(message);
               }
            },
       }]],
    framework: 'mocha',
    reporters: [
        'spec',
    ],
    
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        timeout: 400000,
        compilers: ['ts:ts-node/register'], 
    },

}

export { config }