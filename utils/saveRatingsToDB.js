const uuid = require('uuid');

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (data, businessName) => {
  const { rating, reviewCount } = data;
  const ts = JSON.stringify(new Date());
  const id = uuid.v1();

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id,
      businessName,
      reviewCount,
      rating,
      ts
    }
  };
  dynamoDb.put(params, (error) => {
    if (error) {
      return new Error(`Error Saving Data to DB ${JSON.stringify(error)}`);
    }
    return params.Item;
  });
};
