import { cloneCapabilities } from "./utils";

// process.env.NODE_DEBUG = "request";
const date: Date = new Date();
const NUM_OF_INSTANCES: String | Number = process.env.WDIO_CAP_MULTIPLIER || 1;

const simCapability : WebDriver.Capabilities = {

    platformName: 'iOS',
    'appium:app': '/Users/enriquegonzalez/Desktop/App\ List.app',
    'appium:deviceName': 'iPhone 11',
    'appium:platformVersion': '15.4',
}



const config: WebdriverIO.Config  = {
    // debug: true,
    // execArgv: ['--inspect=127.0.0.1:5859'],

    runner: 'local',
    automationProtocol: 'webdriver',

    path: '/wd/hub',
    port: 4723,

    // outputDir: 'logs',

    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        },
    },
    
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
    connectionRetryTimeout: 360000,
    connectionRetryCount: 0,
    services: [],
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