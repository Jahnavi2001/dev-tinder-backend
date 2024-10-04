
const express = require('express')

const app = express()

app.get('/user/:userId/:name/:password', (req, res) => {
  console.log(req.params)
  res.send('Route handled successfully') 
})

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
  console.log('Server is successfully listening on port 3000')
})