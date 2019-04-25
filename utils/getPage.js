const request = require('request-promise');

module.exports = (business) => {
  const url = `https://www.yelp.com/biz/${business}`;

  return request({
    method: 'GET',
    url,
    resolveWithFullResponse: true
  });
};
