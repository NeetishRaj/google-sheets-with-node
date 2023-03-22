# google-sheets-with-node

These instructions allow you to modify an exisitng google sheet from Nodejs console


Step 1: Create a project in Google cloud console.
https://developers.google.com/workspace/guides/create-project

Step 2: Enable the "Google Sheets API" inside the project created above.
https://developers.google.com/workspace/guides/enable-apis

Step 3: Create a Credential for Nodejs
https://developers.google.com/sheets/api/quickstart/nodejs

Step 4: Make sure your email is added as user in consent screen.
https://stackoverflow.com/questions/75454425/access-blocked-project-has-not-completed-the-google-verification-process

Step 5: Install the nodejs client
```
npm install googleapis@105 @google-cloud/local-auth@2.1.0 --save
```

Step 6: Copy and run the sample code in index.js
```
node index.js
```

Step 7: Now to have read, write and all those access. Configure the scope.
https://developers.google.com/identity/protocols/oauth2/scopes

Step 8: Now perform all the read, write and create operation on Google Sheets.
https://developers.google.com/sheets/api/guides/concepts


