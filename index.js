'use strict'

const friendsModel = require('./schema.js');


exports.handler = async (event) => {

  console.log('Event Body', event.body);
  console.log('Path Parameters', event.pathParameters);
  
  try {
    const body = JSON.parse(event.body);

    const id = event.pathParameters.id;

    const friend = await friendsModel.update({'id':id}, body)

    let data = JSON.stringify(friend)

    return {
      statusCode: 200,
      body: data
    };
  } catch(e) {

    return {
      statusCode: 500,
      body: e.message
    }
  }
}