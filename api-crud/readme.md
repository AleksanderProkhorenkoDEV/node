# API REST with Clean Architecture

*Basic API* without a database that implements the GET, POST, PUT, and DELETE methods following the principles of *Clean Architecture* with *node vanilla*.

## ROUTES:
    *GET*:  
|Route        | Headers                    | Query Params / params        |
--------------------------------------------------------------------------
| /list-users | Accept: "application/json" | ?name=""&lastName=""&email=""|
--------------------------------------------------------------------------
| /user/:id   | Accept: "application/json" | id: string                   |
--------------------------------------------------------------------------  
    *POST*:  
|Route          | Headers                                                         | Body |
| /create-user  | Accept: "application/json" &  Content-type: "application/json"  | {name:string, lastName:string, email:string} |
-------------------------------------------------------------------------------------------------

    *PUT*:
|Route              | Headers                                                         | Body |
| /update-user/:id  | Accept: "application/json" &  Content-type: "application/json"  | {name?:string, lastName?:string, email?:string} |
    *DELETE*:  
|Route             | Headers                    | 
-------------------------------------------------
| /delete-user/:id | Accept: "application/json" |
