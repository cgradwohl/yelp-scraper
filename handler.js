// eslint-disable-next-line no-unused-vars
const { getPage, parsePage, saveRatingsToDB } = require('./utils');

module.exports.scrape = async (event) => {
  try {
    const page = await getPage(event);

    return {
      statusCode: page.statusCode,
      body: JSON.stringify(
        {
          message: 'Go Serverless v1.0! Your function executed successfully!',
          input: event,
          page
        },
        null,
        2
      )
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          message: `Got error fetching business ${event}`,
          input: event
        },
        null,
        2
      )
    };
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
