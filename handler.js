const { getPage, parsePage, saveRatingsToDB } = require('./utils');

module.exports.scrape = async (event) => {
  try {
    const page = await getPage(event); // returns a promise

    const data = await parsePage(page.body); // returns a promise
    console.log('data', data);

    const dbData = await saveRatingsToDB(data, event);
    console.log('dbData', dbData);

    return {
      statusCode: page.statusCode,
      body: JSON.stringify(
        {
          message: `Successfully scraped ${event}`
        },
        null,
        2
      )
    };
  } catch (error) {
    console.log('error', error);
    return {
      statusCode: error.statusCode,
      body: JSON.stringify(
        {
          message: `Yelp cannot find the business listing for ${event}`
        },
        null,
        2
      )
    };
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
