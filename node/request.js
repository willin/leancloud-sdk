const request = require('request');
const { getDefer, JSONParse } = require('../lib');

module.exports = (method = 'GET', url = '', headers = [], data = false) => {
  const deferred = getDefer();
  const opts = {
    method,
    url
  };
  if (headers.length > 0) {
    opts.headers = headers;
  }
  if (data) {
    opts.body = data;
  }
  request(opts, (err, res) => {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(JSONParse(res.body));
    }
  });
  return deferred.promise;
};
