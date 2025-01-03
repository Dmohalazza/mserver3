import * as dotenv from 'dotenv';
import { cleanEnv, num, str, bool } from 'envalid';

dotenv.config();

export default cleanEnv(process.env, {
  MORALIS_API_KEY: str({
    desc: 'Your moralis Api key (keep this secret)',
  }),

  PORT: num({
    desc: 'Default port wher parse-server will run on',
    default: 1337,
  }),
  DATABASE_URI: str({
    desc: 'URI to your MongoDB database',
    devDefault: 'mongodb://localhost:27017',
  }),
  CLOUD_PATH: str({
    desc: 'Path to your cloud code',
    default: './build/cloud/main.js',
  }),
  MASTER_KEY: str({
    desc: 'A secret key of your choice (keep this secret)',
  }),
  APPLICATION_ID: str({
    desc: 'An id for your app, can be anything you want',
    default: 'APPLICATION_ID',
  }),
  SERVER_URL: str({
    desc: 'Referenece to your server URL. Replace this when your app is hosted',
    devDefault: 'http://localhost:1337/server',
  }),

  AUTH_TK: str({
    desc: 'Auth Token Value',
    devDefault: '2TXnTi6GR74mddZgdqDWvla6MzDAZ_84zy72LHhhA3yddd6XZ9Mroo',
  }),

  

  WEB3_PROVIDER_URL: str({
    desc: 'Web3 provider url',
    default: 'APPLICATION_ID',
  }),

  REDIS_CONNECTION_STRING: str({
    desc: 'Connection string for your redis instance in the format of redis://<host>:<port> or redis://<username>:<password>@<host>:<port>',
    // devDefault: 'redis://127.0.0.1:6379',
    devDefault: 'redis://dmohammed'
  }),
  RATE_LIMIT_TTL: num({
    desc: 'Rate limit window in seconds',
    default: 30,
  }),
  RATE_LIMIT_AUTHENTICATED: num({
    desc: 'Rate limit requests per window for authenticated users',
    default: 50,
  }),
  RATE_LIMIT_ANONYMOUS: num({
    desc: 'Rate limit requests per window for anonymous users',
    default: 20,
  }),
  USE_STREAMS: bool({
    desc: 'Enable streams sync',
    default: false,
  }),
  STREAMS_WEBHOOK_URL: str({
    desc: 'Webhook url for streams sync',
    default: '/streams-webhook',
  }),

  STREAM_ID: str({
    desc: 'Stream ID',
    default: 'ec02f731-5c6c-4561-a97b-41aa8df88618',
  }),


  ADMIN: str({
    desc: 'Username',
    default: 'admin',
  }),

  PASS: str({
    desc: 'Password',
    default: 'admin',
  }),

  MLIS_KEY: str({
    desc: 'MLIS_KEY',
    default: '64633f480b60fc42f4e196srab',
  }),

  MLIS_URL: str({
    desc: 'MLIS_URL',
    default: 'https://airnai-ddc3.restdb.io/rest/',
  }),

  WFLRTKMIN: str({
    desc: 'WFLRTKMIN',
    default: '773.63995',
  }),
  FLTMIN: str({
    desc: 'FLTMIN',
    default: '0.00012',
  }),

  PAPPID: str({
    desc: 'PAPPID',
    default: '1904308',
  }),
  PKEY: str({
    desc: 'PKEY',
    default: '9c1e1e1edb57036eeb6c',
  }),
  PSECRET: str({
    desc: 'PSECRET',
    default: '6b4446dc741ed63cd27f',
  })


  
});
