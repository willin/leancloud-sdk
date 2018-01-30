module.exports = adapter => ({ appId, appKey, endpoint }) => {
  const headers = [
    {
      name: 'X-LC-Id',
      value: appId
    },
    {
      name: 'X-LC-Key',
      value: appKey
    }
  ];
  return ['get', 'post', 'put', 'delete'].reduce((r, x) => {
    const obj = {};
    obj[x] = (url, data = false) => adapter(x.toUpperCase(), endpoint + url, headers, data);
    Object.assign(r, obj);
    return r;
  }, {});
};
