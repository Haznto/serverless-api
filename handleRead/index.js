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
        let id;
        let getUser;
        if(request === 'GET /people/{id}') {
            id  = event.pathParameters.id
            getUser = await person.get(id)
        }
        if(request === 'GET /people') {
            getUser = await person.scan().exec();
        }
        body = getUser
        
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




