# google-sheets-with-node

These instructions allow you to modify an exisitng google sheet from Nodejs app in your terminal.




Step 1: Create a project in Google cloud console.
https://developers.google.com/workspace/guides/create-project

Step 2: Enable the "Google Sheets API" inside the project created above.
https://developers.google.com/workspace/guides/enable-apis

Step 3: Get a 'credentials.json' file for Nodejs app from Google console.
https://developers.google.com/sheets/api/quickstart/nodejs

Step 4: Make sure your email is added as user in consent screen.
https://stackoverflow.com/questions/75454425/access-blocked-project-has-not-completed-the-google-verification-process

Step 5: Install the nodejs client
```
npm install googleapis@105 @google-cloud/local-auth@2.1.0 --save
```

Step 6: Copy and run the sample code in index.js
Remember to update the proper spreasheet id and sheet name.
```
node index.js
```


### Configure scope
There are two possible scopes, here we have the complete access one. There's also one for just read and write.

NOTE: 
Now to have read, write and all those access. Configure the scope.
https://developers.google.com/identity/protocols/oauth2/scopes


