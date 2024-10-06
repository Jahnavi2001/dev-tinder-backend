const express = require("express");

const app = express();

// app.use('/', (err, req, res, next) => {
//   if(err) {
//     // You can log the error to see in logs for our reference
//     res.status(500).send('Something went wrong')
//   }
// })

app.get('/getUserData', (req, res, next) => {
  // try {
    throw new Error('qwertyy')
    res.send('User data sent')
  // }
  // catch(err) {
  //   res.status(500).send('Some error contact support team')
  // }
})

app.use('/', (err, req, res, next) => {
  if(err) {
    // You can log the error to see in logs for our reference
    res.status(500).send('Something went wrong')
  }
})

// const { adminAuth, userAuth } = require('./middlewares/auth')

// app.use('/admin', adminAuth)

// app.get("/admin/getAllData", (req, res, next) => {
//   res.send("All data sent");
// });

// app.get("/admin/deleteUser", (req, res, next) => {
//   res.send("Deleted a user");
// });

// app.post('/user/login', (req, res, next) => {
//   res.send('User logged in successfully!')
// })

// app.get('/user', userAuth, (req, res, next) => {
//   res.send('User data sent')
// })

// app.all('/contact', (req, res) => {
//   res.send(`Handling ${req.method} request at /contact`);
// });

// app.get(
//   "/user",
//   (req, res, next) => {
//     next();
//   },
//   (req, res, next) => {
//     res.send("Response 1 !!");
//   }
// );

// app.get("/user", (req, res, next) => {
//   console.log("Handling the route user 2 !!");
//   // res.send("Response 2 !!");
//   next()
// });

// app.get("/user", (req, res, next) => {
//   console.log("Handling the route user 1 !!");
//   // res.send("Response 1 !!");
//   next()
// });

// All below are same
// app.get('/route', rH1, rH2, rH3, rH4, rH5)
// app.get('/route', [rH1, rH2, rH3, rH4, rH5])
// app.get('/route', rH1, [rH2, rH3], rH4, rH5)

// app.get(
//   "/user",
//   [
//     (req, res, next) => {
//       console.log("Handling the route user 1 !!");
//       next();
//       // res.send("Response 1 !!");
//     },
//     (req, res, next) => {
//       console.log("Handling the route user 2 !!");
//       // res.send("Response 2 !!");
//       next();
//     },
//   ],
//   (req, res, next) => {
//     console.log("Handling the route user 3 !!");
//     // res.send("Response 3 !!");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Handling the route user 4 !!");
//     res.send("Response 4 !!");
//     // next()
//   }
// );

// app.get('/user/:userId/:name/:password', (req, res) => {
//   console.log(req.params)
//   res.send('Route handled successfully')
// })

// app.get('/user', (req, res) => {
//   console.log(req.query)
//   res.send('Route handled successfully')
// })

// app.get(/.*fly$/, (req, res) => {
//   res.send('Route handled successfully')
// })

// app.get(/a/, (req, res) => {
//   res.send('Route handled successfully')
// })

// app.use('/ab*cd', (req, res) => {
//   res.send('Route handled successfully')
// })

// app.use('/ab?cd', (req, res) => {
//   res.send('Route handled successfully')
// })

// app.use('/a(bc)?d', (req, res) => {
//   res.send('Route handled successfully')
// })

// app.use('/a(bc)+d', (req, res) => {
//   res.send('Route handled successfully')
// })

// app.use('/ab+cd', (req, res) => {
//   res.send('Route handled successfully')
// })

// app.use('/user', (req, res) => {
//   res.send('HAHAHAHAHA')
// })

// This will only handle GET call to /user
// app.get('/user', (req, res) => {
//   res.send({firstName: 'Jahnavi', lastName: 'Vuyyuru'})
// })

// app.post('/user', (req, res) => {
//   // Saving data to DB
//   res.send('Data successfully saved to the database!')
// })

// app.delete('/user', (req, res) => {
//   res.send('Deleted Successfully!')
// })

// // app.use('/user', (req, res) => {
// //   res.send('User from the server!')
// // })

// app.use('/hello/2', (req, res) => {
//   res.send('Abrakadabra')
// })

// // This will match all the HTTP method API calls to /hello
// app.use('/hello', (req, res) => {
//   res.send('Hello hello hello')
// })

// app.use('/test', (req, res) => {
//   res.send('Hello from the server!')
// })

// We can say this is like wildcard
// app.use('/', (req, res) => {
//   res.send('Hello from the dashboard!')
// })

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
