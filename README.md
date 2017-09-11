# Frontend Boilerplate

A modern boilerplate with

React Fiber (react and react-dom@16)
React Router 4 (route splitting included)
React Redux
Redux Form
Webpack 3 (Code splitting, image and css imports, cache busting, extracted style)
Mocha, Chai (Uses jsdom@8.5 as headless browser. Easy tests with a Test Helper)
Easy Deployment Scripts (Surge, Heroku, AWS S3, AWS Elastic Beanstalk, Github Pages)
Dual Dev Environment (Webpack Dev Server or Node.js Express Server)



### Getting Started

```
> git clone https://github.com/Babazon/Frontend-Boilerplate.git YourProject
> cd YourProject
> npm install
> npm run dev
```

Alternatively, add these in your bash_profile file and you have a command line argument at all times:

```
function boilerplate {
    git clone https://github.com/Babazon/Frontend-Boilerplate.git $1 && cd $1 && npm install && git init && clear
}
export -f boilerplate
```

Such as:

`> boilerplate NewProject`  and you are done.

### Getting a Production Package

```
> npm run build
```

### The Project Structure

|-src/  
| &nbsp; |-actions/  
| &nbsp; |-assets/  
| &nbsp; |-components/  
| &nbsp; |-containers/  
| &nbsp; |-hoc/  
| &nbsp; |-middleware/  
| &nbsp; |-reducers/   
| &nbsp; |-styles/     
| &nbsp; |  
| &nbsp; |-app.js       
| &nbsp; |-index.html   
| &nbsp; |-router.js    
| &nbsp; |-store.js     
|-test/  
| &nbsp; |-actions/     
| &nbsp; |-assets/      
| &nbsp; |-components/  
| &nbsp; |-containers/  
| &nbsp; |-hoc/         
| &nbsp; |-middleware/  
|  &nbsp;|-reducers/    
|-.elasticbeanstalk/
|  
|-.babelrc           
|-.eslintrc          
|-index.html         
|-index.js           
|-LICENSE.md         
|-package.json       
|-Procfile           
|-README.md          
|-server.js          
|-webpack.config.js  
|-.env               
