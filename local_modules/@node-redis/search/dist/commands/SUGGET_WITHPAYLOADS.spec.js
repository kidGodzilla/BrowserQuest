"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const SUGGET_WITHPAYLOADS_1 = require("./SUGGET_WITHPAYLOADS");
describe('SUGGET WITHPAYLOADS', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, SUGGET_WITHPAYLOADS_1.transformArguments)('key', 'prefix'), ['FT.SUGGET', 'key', 'prefix', 'WITHPAYLOADS']);
    });
    describe('client.ft.sugGetWithPayloads', () => {
        test_utils_1.default.testWithClient('null', async (client) => {
            assert_1.strict.equal(await client.ft.sugGetWithPayloads('key', 'prefix'), null);
        }, test_utils_1.GLOBAL.SERVERS.OPEN);
        test_utils_1.default.testWithClient('with suggestions', async (client) => {
            await client.ft.sugAdd('key', 'string', 1, { PAYLOAD: 'payload' });
            assert_1.strict.deepEqual(await client.ft.sugGetWithPayloads('key', 'string'), [{
                    suggestion: 'string',
                    payload: 'payload'
                }]);
        }, test_utils_1.GLOBAL.SERVERS.OPEN);
    });
});
