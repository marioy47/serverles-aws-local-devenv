// lambdas/handler.js
"use strict";

module.exports.hello = async (event) => {
  const name = event.pathParameters.name;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hola ${name}... It works !!!`,
      },
      null,
      2
    ),
  };
};
