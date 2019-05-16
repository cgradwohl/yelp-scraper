const uuid = require('uuid');

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (data, businessName) => {
  const { rating, reviewCount } = data;
  const ts = JSON.stringify(new Date());
  const id = uuid.v1();

  console.log('process.env', process.env.DYNAMODB_TABLE);
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id,
      businessName,
      reviewCount,
      rating,
      ts
    },
    Expected: {
      ReturnValues: 'ALL_NEW'
    }
  };
  // eslint-disable-next-line func-names
  dynamoDb.put(params, function(error, dbResponse) {
    console.log('inside', dbResponse);
    if (error) {
      throw new Error(`Error Saving Data to DB ${JSON.stringify(error)}`);
    }
    return Promise.resolve(dbResponse);
  });
};
