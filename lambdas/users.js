// lambdas/users.js

const AWS = require("aws-sdk");

if (process.env.IS_OFFLINE) {
  AWS.config.update({
    region: "local",
    endpoint: "http://localhost:9000",
    accessKeyId: "S3RVER",
    secretAccessKey: "S3RVER",
  });
}
const docClient = new AWS.DynamoDB.DocumentClient();

const response = {
  statusCode: 200,
  body: "",
};

module.exports.index = async (event) => {
  console.log("Scanning UsersTable in DynamoDB.");
  const params = {
    TableName: "UsersTable",
  };

  try {
    const result = await docClient.scan(params).promise();
    response.statusCode = 200;
    response.body = JSON.stringify(result, null, 2);
  } catch (err) {
    response.statusCode = 500;
    response.body = JSON.stringify(err, null, 2);
    console.error(err);
  }

  return response;
};
