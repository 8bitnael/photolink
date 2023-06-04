# Dotenv tutorial
1) npm init -y    # initiate a new Node application
2) npm i dotenv
3) in server.js :  
# const dotenv = require('dotenv');   
# dotenv.config();


# Node.js PostgreSQL CRUD example with Express Rest APIs
- GET      http://localhost:8080/api/photolinks/


- GET     `api/tutorials`	            get all Tutorials
- GET     `api/tutorials/:id`         get Tutorial by id
- POST    `api/tutorials`             add new Tutorial
- PUT     `api/tutorials/:id`         update Tutorial by id
- DELETE  `api/tutorials/:id`         remove Tutorial by id
- DELETE  `api/tutorials`             remove all Tutorials
- GET     `api/tutorials/published`   find all published Tutorials
- GET     `api/tutorials?title=[kw]`  find all Tutorials which title contains 'kw'


### Test the APIs
Run our Node.js application with command: `node server.js`.

