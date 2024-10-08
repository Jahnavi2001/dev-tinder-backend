<!-- Episode 03 -->
- Create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json'
- Install express
- Create a server
- Listen to port 3000
- Write request handlers for /test, /hello
- Install nodemon and update scripts inside the package.json
- What are dependencies in package.json
- What is the use of '-g' while npm install
- Difference between caret and tilda (^ Vs ~)

<!-- Episode 04 -->
- Initialize Git in your repository (git init)
- Ignore node_modules (.gitignnore)
- Create a remote repo on github
- Push all code to remote origin
- Play with routes and route extensions Ex: /hello, / , /hello/2, /xyz
- Order of the routes matter a lot
- Install Postman application and make a workspace and collection and then test api call
- Write logic to handle GET, POST, PATCH, DELETE API calls and test them on postman
- Explore routing and use of ?, +, *, () in the routes
- Use of regex in routes /a/ , /.*fly$/
- Reading the query params in the routes
- Reading the dynamic routes

<!-- Episode 05 -->
- Multiple route handlers - Play with the code
- next()
- next function and errors along with res.send()
- app.get('/route', rH1, [rH2, rH3], rH4, rH5)
- What is a Middleware? Why do we need it?
- How express JS basically handles requests behind the scenes.
- Difference between app.use and app.all
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes except /user/login
- Error handling using app.use('/', (err, req, res, next) = {} )

<!-- Episode 06 -->
- Create a free cluster on Mongodb official website (Mongo Atlas)(If not created)
- Install mongoose library
- Connect your application to the database "Connection-url"/devTinder
- Call the connectDB function and connect to the database before starting application on 7777
- Create a userSchema & user Model
- Create POST /signup API to add data to the database
- Push some documents using API calls from the postman
- Error handling using try, catch

<!-- Episode 07 -->
- Difference betweeen JSON and JavaScript Object
- Add the express.json middleware to your app.
- Make your signup API dynamic to receive data from the end user(browser/postman...)