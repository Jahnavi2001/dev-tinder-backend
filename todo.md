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
- User.findOne with duplicate emailIds, which object will be returned
- API - Find all users by email
- API - Find one user by email
- API - Feed API - GET /feed - Get all the users from the database
- API - Find user by ID
- Create a Delete User API
- Difference between PATCH and PUT
- API - Update a user
- Explore the Mongoose documentation for Model API methods
- What are options in a Model.findOneAndUpdate, explore more about it
- Update the user with the emailId

<!-- Episode 08 -->
- Explore schema type options from the documentation
- Add required, unique, default, lowercase, trim, minLength, min, maxLength
- Create a custom validate function for gender.
- Improve the DB schema - Put all appropriate validations on each field in schema.
- Add timestamps to the schema.
- Add API level validation on PATCH request & signup POST api
- DATA SANITIZATION: Add API validation for each field
- Install validator library
- Explore validator library functions and use validator functions for password, email, Url
- Never trust request body

<!-- Episode 09 -->
- Validate data in signup API
- Install bcrypt package
- Create password hash using bcrypt.hash and save the user with encrypted password
- Create login API
- Compare passwords and throw errors if email or password is invalid

<!-- Episode 10 -->
- Install npm cookie-parser library
- Just send a dummy token to user in Login API
- Create GET /profile API and check if you get the cookie back
- Install npm jsonwebtoken library
- In login API, after email and password validation create a JWT token and send it to user in cookies
- Read the cookies inside your profile API and find the logged in user.
- Create userAuth Middleware
- Add the userAuth middleware in profile API and new sendConnectionRequest API
- Set the expiry of JWT token and cookies to 7 days
- Create userSchema method to getJWT()
- Create userSchema method to compare password(passwordInputByUser)


<!-- Episode 11 -->
- Explore tinder API's
- Create a list of all API's you can think of in DevTinder
- Group multiple routes under respective routers
- Read documentation for express.Router
- Create routes folder for managing auth, profile, request routers
- Create authRouter, profileRouter, requestRouter
- Import these 3 routers in app.js
- Create POST /logout API
- Create PATCH /profile/edit API
- Create PATCH /profile/password API => Forgot password API
- Make sure you validate data in every POST, PATCH API's

<!-- Episode 12 -->
- Create connection request schema
- Send connection request API
- Proper validation of data
- Think about all corner cases
- $or query - https://www.mongodb.com/docs/manual/reference/operator/query-logical/
- schema.pre("save") function
- Read more about indexes in MongoDB
- Read this article about compound indexes - https://www.mongodb.com/docs/manual/core/indexes/index-types/index-compound/
- Why do we need index in DB?
- What is the advantages and disadvantages of creating index.
- ALWAYS THINK ABOUT CORNER CASES