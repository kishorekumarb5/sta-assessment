# Technical Assessment - Test Analyst

This assessment requires the completion of 3 different tasks given below

## Task #1
### Using Cypress, write a front end automated script, targeting https://www.harveynorman.com.au where you:

  - Go to https://www.harveynorman.com.au/google-nest-cam-outdoor-indoor-battery-1-pack.html
  - Add the product to cart
  - Validate that it is in your shopping cart

**Additional items:**
This should include any checks along the way that you deem necessary.

**Required Output:**
Once complete, commit your tests, along with any instructions and create a Pull request for it back to this repo

## Task #2
### Go to the page - https://www.harveynorman.com.au/dyson-gen5detecttm-absolute-stick-vacuum.html and answer the following questions

  1. Identify the request that returns stores when you do stock check for the postcode - 2020
https://www.harveynorman.com.au/svc/sfapi/storeListAndDeliveryCost?query=%20query%20storeListAndDeliveryCost(%24postcode%3A%20String!%2C%20%24sku%3A%20String!%2C%20%24region%3A%20String!%2C%20%24city%3A%20String!%2C%20%24pickup%3A%20Boolean%2C%20%24delivery%3A%20Boolean%2C%20%24ask_question_stores%3A%20Boolean)%20%7B%20storeListAndDeliveryCost(postcode%3A%20%24postcode%2C%20sku%3A%20%24sku%2C%20region%3A%20%24region%2C%20city%3A%20%24city%2C%20pickup%3A%20%24pickup%2C%20delivery%3A%20%24delivery%2C%20ask_question_stores%3A%20%24ask_question_stores)%20%7B%20__typename%20delivery%20%7B%20__typename%20label%20message%20error%20shipping_cost%20%7B%20__typename%20currency%20value%20%7D%20%7D%20pickup%20%7B%20__typename%20error%20message%20items%20%7B%20__typename%20address%20distance%20id%20latitude%20longitude%20name%20phone%20stock_status%20stock_can_reserve%20pickup_data%20%7B%20title%20content%20is_available%20%7D%20trading_hours%20extended_hours%20%7D%20%7D%20ask_question_stores%20%7B%20__typename%20error%20message%20items%20%7B%20__typename%20id%20name%20phone%20distance%20latitude%20longitude%20%7D%20%7D%20%7D%20%7D%20&variables=%7B%22postcode%22%3A%222020%22%2C%22region%22%3A%22486%22%2C%22sku%22%3A%22GEN5DETECTABS%22%2C%22city%22%3A%22MASCOT%22%2C%22pickup%22%3Atrue%2C%22delivery%22%3Atrue%2C%22ask_question_stores%22%3Atrue%7D
![image](https://github.com/user-attachments/assets/5f6720f1-c79e-4f14-959a-dd5eb61cb456)


  2. Name the request method for the above request.
    The request method is Get.

  3. State whether the following statement is True or False
     False - There are 10 stores fetched on the response as compared to 7 on the website
     
      `The number of stores displayed to the customer on the website is equal to the number of stores returned in the response of the request`
  
**Required Output:**
Please try to attempt all the questions in Task 2.

## Task #3
### Go to the page - https://www.harveynorman.com.au/customer/account/create/

Suppose you are assigned the task of validating a customer registration form given above. The form includes the following fields with specific requirements:

  1. First Name: Required, must be between 3-10 characters.
  2. Last Name: Required, must be between 3-10 characters.
  3. Email: Required, must be in a valid email format.
  4. Password: Required, must be at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.
  5. Confirm Password: Required, must be same as password.
  6. Terms and Conditions must be accepted before the form submission.

Write down all possible test cases you would consider for validating this form.

Please find the attached test cases on Excel.
    
