# Automation Project

* Language  : Javascript 

* Framework : TestCafe

-----------------------

* Before run the project :

   1) Download Node.js 
   2) inside Project Terminal run below :
 
          sudo su
          npm install 
          npm start
          npm install -g testcafe 
          npm install --save @ffmpeg-installer/ffmpeg
          npm install testcafe-reporter-allure
          npm install -g allure-commandline

    3) Download Java for Allure report              
--------------------------                    

* To Run SauceLabs automation on run below command in Terminal according in which browser you need to test :

         Chrome  : npm run test:chrome 
         Firefox  : npm run test:firefox 
         Safari  : npm run test:safari 
         edge  : npm run test:edge 
         samsung emulator : npm run test:samsung
         Iphone emulator : npm run test:iphone

--------------------------------                               

* To Update Test data for Saucelab Sign in :

      Update json file ../SauceLabs_Automation/test-helpers/test-data/login-credentials.json


------------------------------------------------
* To Update Test data for products to be added in cart :

      Update json file ../Conduit_Automation/test-helpers/test-data/products.json

------------------------------------------------
* To Generate Allure report run below command in Terminal:

       allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report

------------------------------------------------
* To Check HTML Report for execution open from below path :

       ../HTML-Reports/saucelabs.html

------------------------------------------------

* To Check Failure screenshots :

      ../artifacts/screenshots

------------------------------------------------
* To Check Video for execustion  :

      ../artifacts/videos
      
------------------------------------------------
* Test Evaluation Report with Test coverage and type of testing and some bugs is included under folder ../Reports 
