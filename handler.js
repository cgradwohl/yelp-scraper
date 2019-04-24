const { getPage, parsePage, saveRatingsToDB } = require('./utils');

module.exports.hello = async (event) => {
  // 1. fetch yelp page

  // 2. parse the page

  // 3. save the ratings data to our db

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event
      },
      null,
      2
    )
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
