# leancloud-sdk

Mini Leancloud SDK for browser/node.js

[![npm](https://img.shields.io/npm/v/leancloud-sdk.svg?style=plastic)](https://npmjs.org/package/leancloud-sdk) [![npm](https://img.shields.io/npm/dm/leancloud-sdk.svg?style=plastic)](https://npmjs.org/package/leancloud-sdk) [![npm](https://img.shields.io/npm/dt/leancloud-sdk.svg?style=plastic)](https://npmjs.org/package/leancloud-sdk)

```js
// for browser
const SDK = require('leancloud-sdk');
// for node.js
// const SDK = require('leancloud-sdk/node');

const client = SDK({
  appId: 'xxxx',
  appKey: 'xxx',
  endpoint: 'https://xxxx.api.lncld.net/1.1/'
})

client.get('classes/Demo').then(console.log).catch(console.log);
```

## License

MIT

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
