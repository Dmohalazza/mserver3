"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const moralis_1 = __importDefault(require("moralis"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const parseServer_1 = require("./parseServer");
// @ts-ignore
const parse_server_1 = __importDefault(require("parse-server"));
const http_1 = __importDefault(require("http"));
const ngrok_1 = __importDefault(require("ngrok"));
const parse_server_2 = require("@moralisweb3/parse-server");
// Import parseDashboard.ts //
const parseDashboard_1 = require("./parseDashboard");
// import bodyParser from 'body-parser';
exports.app = (0, express_1.default)();
moralis_1.default.start({
    apiKey: config_1.default.MORALIS_API_KEY,
});
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use(express_1.default.json());
// app.use(bodyParser.json({limit: '5mb'}));
// app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
exports.app.use((0, cors_1.default)());
exports.app.use((0, parse_server_2.streamsSync)(parseServer_1.parseServer, {
    apiKey: config_1.default.MORALIS_API_KEY,
    webhookUrl: '/streams',
}));
exports.app.use(`/server`, parseServer_1.parseServer.app);
// Add the new route //
exports.app.use(`/dashboard`, parseDashboard_1.parseDashboard);
// app.post("/streams", async (req, res) => {
//   console.log(req.body) 
//   console.log("Handled!")
//   res.send('Webhook response')
//   res.status(200)
//   // verifySignature(req, config.MORALIS_API_KEY);
//   // const { data, tagName, eventName }: any = parseEventData(req);
//   // console.log(data, tagName, eventName, "logged!");
//   // await parseUpdate(`SFS_${eventName}`, data);
//   // red.end()
// });
const httpServer = http_1.default.createServer(exports.app);
httpServer.listen(config_1.default.PORT, async () => {
    if (config_1.default.USE_STREAMS) {
        console.log("server is running");
        await ngrok_1.default.authtoken(config_1.default.AUTH_TK);
        const url = await ngrok_1.default.connect(config_1.default.PORT);
        console.log(url);
        // eslint-disable-next-line no-console
        console.log(`Moralis Server is running on port ${config_1.default.PORT} and stream webhook url ${url}${config_1.default.STREAMS_WEBHOOK_URL}`);
    }
    else {
        // eslint-disable-next-line no-console
        console.log(`Moralis Server is running on port ${config_1.default.PORT}.`);
    }
});
// This will enable the Live Query real-time server
parse_server_1.default.createLiveQueryServer(httpServer);
//# sourceMappingURL=index.js.map