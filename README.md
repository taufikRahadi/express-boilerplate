# How To Run

- Make sure to install dependencies
  ``` 
  npm install 
  ```
- Create .env file and set your env variables
  ```
  cp .env.example .env
  ```
- Migrate all migrations
  ```
  npm run sequelize-cli db:migrate
  ```
- Start development server
  ```
  npm run start:dev
  ```
- Production server
  ```
  npm run start:prod
  ```

## Available Commands
- Generate model and migration
  ```
  npm run sequelize-cli model:generate --name ModelName --attributes ...
  ```
- and all of sequelize-cli commands

## Swagger Documentation
- API documentation page ```/docs```
- To documenting your endpoint resource using JSDoc visit <br /> <a href="https://www.npmjs.com/package/swagger-jsdoc">```https://www.npmjs.com/package/swagger-jsdoc```</a>

## Folder Structure
  ### src
  - application
    <p>this folder contains all of core application file</p>
    
    - api
      this folder contains all of api controllers and services grouped by resource name
    
    - middlewares
    - models
    - routes
  
  - configs
    this folder contains all of configuration file

  - database
    this folder contains migrations and seeders files

  - misc (miscellanous)
    this folder contains express request lifecycle helper or constants files

  - utils
    this folder contains utilization helper or function that will called repeatedly