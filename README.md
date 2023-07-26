# Serverless-Api

## UML

![UML](./assets/UML%20Dynamoose.jpg)
What is the root URL to your API?

https://b10usxf52f.execute-api.us-east-1.amazonaws.com

## What are the routes?

/people
/people/{id}

## What inputs do they require?

1. `/people` `POST` require an object that has 3 keys and a value for each key.
example {
    id: "5",
    name:"Test",
    gender: "Male"
}  
Function executed (`handleCreate`)

---

2. `/people` `PUT` require an object that has 3 keys and a value for each key.
example {
    id: "5",
    name:"Test",
    gender: "Male"
}

Function executed (`handleUpdate`)

---

3. `/people` `GET` require nothing just visiting the route will get you all the objects.
4. `/people/{id}` `GET` require to pass an id (a number) to the URL end , (replace the {id} with the id of the object you want to retrieve).

Function executed (`handleRead`)

---

5. `/people/{id}` `DELETE` require to pass an id (a number) to the URL end , (replace the {id} with the id of the object you want to delete).
Function executed (`handleDelete`)

## What output do they return?

>FOR PUT, it returns the object you passed to be updated.

>FOR POST, it returns the object you passed to be posted(added).

>FOR GET on `/people`, it returns the all the objects added in the table of the database of the selected schema.

>FOR GET on `/people/{id}`, it returns the selected object and retrieved from the Database.

>FOR DELETE on `/people/{id}`, it deletes the selected object from the Database and returns a message of successful process.
