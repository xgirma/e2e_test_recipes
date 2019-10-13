"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
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
// export config;
