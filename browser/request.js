const { getDefer, JSONParse } = require('../lib');

module.exports = (method = 'GET', url = '', headers = [], data = false) => {
  const deferred = getDefer();
  let request = new XMLHttpRequest();
  request.open(method, url, true);
  // Set Headers
  request.setRequestHeader('Content-Type', 'application/json');
  headers.forEach(({ name, value }) => {
    request.setRequestHeader(name, value);
  });
  // Handle Response
  request.onreadystatechange = function Response() {
    if (this.readyState === 4) {
      if (this.status >= 200 && this.status < 400) {
        deferred.resolve(JSONParse(this.responseText));
      } else {
        deferred.reject({});
      }
    }
  };

  if (data) {
    request.send(typeof data === 'object' ? JSON.stringify(data) : data);
  } else {
    request.send();
  }

  request = null;
  return deferred.promise;
};
