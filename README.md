This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

With npm start in the root directory our backend would get start and you can see all the endpoints at localhost:5000
### front
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Also to create products first you need to create and admin by running 
 ###   localhost:5000/api/users/createAdmin

So admin would be created in your database and by signing in into the website and going on route 
localhost:3000/products one can create and manage the products 

 ### note only Admin have rights to create,update,delete the products 

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Project Details:- 

    1.User Can Add products to the Cart.
    2.Signin is not necessary for adding products in the cart
    3.At the time of Checkout Users either have to login or Create an account.
    4.User can put up the shipping address irrespective of the current location product delivery assurance would be provided.
    5.User can use two mode of payments:
        1.UPI Payments. 
        2.Cash On Delivery.
    6.Once the Order is Created and successful of payment user can view the order summary,
     In the user screen :-
              1.Status of Payment
              2.Order time and Date
              3.Address
              4.Products Along With prices (Summary)
              5.Cancel or return actions would be provided
    7.At Admin side:
            1. Admin can add the new product.
            2. Admin can update the existing products like prices,name,change the category etc.
            3. Admin can check the status of quantity available in the stock.
            4. All products related rights have been given to admin.
    8.Future Enhancements:
            1.Providing the details and status of delivery of products to admin so he can checkupon whether the delivery is made or not or what is the status.
            2.Adding a third party location tracking system so according to user address near by vendor center can fetched and deliver the product accordingly and even user could get the exact location of their product coming from.
            3.Creating Live payement gateway along with offers and cashbacks.    

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
