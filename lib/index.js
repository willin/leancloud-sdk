exports.getDefer = () => {
  const deferred = {};
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
};

exports.JSONParse = (data) => {
  try {
    return JSON.parse(data);
  } catch (e) {
    return {};
  }
};
