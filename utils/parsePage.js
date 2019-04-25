const cheerio = require('cheerio');

module.exports = (page) => {
  try {
    const $ = cheerio.load(page);
    const rating = $('.rating-info .i-stars')
      .attr('title')
      .trim()
      .split(' ')[0];
    const reviewCount = $('.rating-info .review-count')
      .text()
      .trim()
      .split(' ')[0];

    const data = {
      rating,
      reviewCount
    };
    return Promise.resolve(data);
  } catch (error) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(`Error parsing page: ${JSON.stringify(error)}`);
  }
};
