import { Config } from "protractor";
export let config: Config = {
    directConnect: true,
    specs: [
        'spec/*.spec.js'
    ],
    capabilities: {
        browserName: 'chrome',
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        isVerbose: true,
        realtimeFailure: true
    },
};
