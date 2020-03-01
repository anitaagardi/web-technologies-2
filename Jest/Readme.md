1.Init:
npm init

Install Jest:
npm install --save --dev jest

2. Add the following section to your package.json:

{
  "scripts": {
    "test": "jest"
  }
}

3. npm run test
npm test -- 2/22.test

4. MongoDB:
yarn add –-dev @shelf/jest-mongodb 

and	specify preset in your Jest configuration:
{
  "preset": "@shelf/jest-mongodb"
}


Or:
1. npm install

2. npm run test