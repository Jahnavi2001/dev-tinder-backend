
# DEV TINDER API'S

## authRouter
- POST /signup
- POST /login
- POST /logout

## profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password - forgot password

## requestRouter
- POST /request/send/:status/:userId - Status is either interested/ignored
- POST /request/review/:status/:requestId - Status is either accepted/rejected, this status comes from interested status only

## userRouter
- GET /user/requests/received
- GET /user/connections
- GET /user/feed - Gets you the profiles of other users on platform


- Status - interested, ignored, accepted, rejected

