<img src="https://cdn-images-1.medium.com/max/800/1*AoarrKQjCE0zVJkxl9za8Q.jpeg" height="400" width="100%" style="padding:30px; box-sizing: border-box;"/>
<img  title="Firebase" src="https://lmn-blog.com/wp-content/uploads/2018/01/logo-stripe.png" height="300" width="100%" style="padding:30px; box-sizing: border-box;"/>

# Twitter Clone with Firebase (No-Backend)

## Things to do

- [] Stripe
- [] Make login and logout functions for forms
- [] Create utils folder and store functions there
- [] CreateStripe User function
- [] Go to stipe docs and read their apis


## Features

- Various OAuth authentication
- Real-time communication
- Payment system with Stripe
- Form handling with Formik
- Complete tailwind CSS config

## Associating with Stripe

- Create Stripe user while creating new user, and assign stripeId field to user.

## Working with Firebase

- Using firestore can be a little bit intimidating at first, because of their naming sense...

- But just keep in mind that whenever you want to do any CRUD on any database collection, just do ```firebase.firestore().collection(<PATH_OF_THE_COLLECTION_OR_DOCUMENT>)```

- useEffect + onSnapshot makes the realtime communication much easier. 
