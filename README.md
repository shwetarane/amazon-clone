# amazon-clone
### Demo : https://clone-b2c9e.web.app/

#### Technologies

* ReactJS
* React Hooks
* Flex-box
* Stripe for payment processing
* Firebase for authentication
* Serverless Backend with Blaze
* Hosted on Firebase
* Google Analytics to Track users 



#### Test Keys for Payment

1. Card Number : 4242 4242 4242 4242
2. Date: 04/24
3. CVV: 242 
4. ZIP: 42424

#### Test User: 

- Email : user@gmail.com
- Password : password



### Getting Started 

##### For React Front-End

1. npm install

2. npm start 

   

##### server - ./functions: 
1. npm install

2. For testing : firebase emulators:start

   

##### Deploying Firebase functions (Blaze)
firebase deploy --only functions



##### Deploying Front-End
npm run build
firebase deploy --only hosting

