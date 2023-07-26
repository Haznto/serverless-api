const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, ScanCommand, PutCommand, DeleteCommand, GetCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoose = require("dynamoose");

let client = new DynamoDBClient({});
let dynamo = DynamoDBDocumentClient.from(client)
let table = 'people'

const peopleSchema = new dynamoose.Schema({
    id: String,
    name:String,
    gender:String
})
const person = dynamoose.model('people',peopleSchema)

exports.handler = async function(event, context) {
    
    let request = event.routeKey
    let statusCode = 200;
    let body; 
    let headers = {
        'Content-Type': 'application/json'
    }; 
    try {
        let id = event.pathParameters.id
        
        if(request === 'DELETE /people/{id}') {
           let deleted = await person.delete(id);
        }
        body = {message: `Successfully deleted Object with id: ${id}`}
        
    } catch(err) {
        body = err.message
        statusCode = 400
    } finally{
        body = JSON.stringify(body)
    }
    console.log(body)
    return {
        body,statusCode,headers
    };
  };
  //JSON.stringify('Hello from Lambda!')




