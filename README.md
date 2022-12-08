# Calendar-backend
We create the folder, then inside the folder we execute the following command:

    npm init -y

To run our server in a traditional way:

    node index.js

## Nodemon
1.- We install "nodemon"

    npm i -g nodemon

2.- In the package.json file add: 

    "scripts": {
        "start": "nodemon index.js", --> runs with:  npm start
        "dev": "node index.js"       --> runs with:  npm run dev
    }

## Express

    npm i express

## dotenv

    npm i dotenv

require('dotenv').config();

### HTTP Status Codes

    https://www.restapitutorial.com/httpstatuscodes.h

## express-validator

    npm i express-validator

## Mongoose

    npm i mongoose

## bcrypt.js

    npm i bcryptjs

## JWT ( JSON Web Token)

    npm i jsonwebtoken

https://jwt.io/

## CORS

    npm i cors

https://enable-cors.org/

## Moment.js

    npm i moment

https://momentjs.com/

## Railway
    
    https://railway.app/

https://calendar-backend-production-b7ef.up.railway.app/


## Cannot GET /auth/login

    app.get('*', ( req, res ) => {
        res.sendFile(__dirname, '/public/index.html');
    })