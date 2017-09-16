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
Async/Await  
Es7 syntax  



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

### Deploying Your Application

## Single Page Application

# Surge

Firstly install surge cli    
`$ npm i -g surge`  
Then run the surge deploy script    
`$ npm run surge`

That's it.

# Github Pages

Firstly create a new branch named gh-pages  
`$ git branch gh-pages`  
Then run the gh-pages deploy script  
`$ npm run github`  

# Amazon S3 Bucket

Firstly install the Amazon S3 cli   
`$ npm i -g s3-website`    

Then log in to your AWS account > Security Credentials and create a new Access Key Pair. Put them in a file named .env in your project root (Don't forget to put the file in .gitignore or your AWS credentials will certainly be stolen.)     


.env file
```
AWS_ACCESS_KEY_ID=MY_KEY_ID  
AWS_SECRET_ACCESS_KEY=MY_SECRET_KEY  
```   

Next, go to the AWS dashboard again, under S3, create a bucket, give it a unique name, and choose a region.   

Finally, run the deploy script:  
`$ npm run amazon`

And you are done.

# Heroku (via Node Express Server)  

Firstly, create a heroku account and install the cli  

Homebrew is the easiest way.  
`brew install heroku/brew/heroku`  

Alternatively go to https://devcenter.heroku.com/articles/heroku-cli#download-and-install and download the installer package for your operating system.   

Follow the steps on the website to authorize your computer via ssh (Or use email/password).

The Procfile provided tells Heroku what to do. Keeping it, firstly run:

`$ heroku create`  in your project directory which already has an initialized git repository. Heroku will not work without a git repo.  This adds heroku remote to your git remotes list.  

Then, deploy any time you want by running:  

`$ npm run heroku`   which will build your project, create a git commit, deploy, then rollback that commit and clear the dist/ build directory.

Heroku deploys git commits. It is not possible to deploy without committing a build as of now. Rolling back this dummy commit is managed by the script.

# Amazon Elastic Beanstalk (via Node Express Server)   

Firstly install the aws elastic beanstalk cli.

Homebrew is the easiest way.

`$ brew install awsebcli`

If you have python and pip installed, you may simply run:

`$ pip install awsebcli --upgrade --user`  

Check the version and that it is installed by running:   

`$ eb --version`   

Now get an access key pair from AWS > Security Credentials. The cli will ask you for those.  

Run `$ eb init` within your project folder (You need to have initialized a git repository first).

Then run `$ eb create`   

Now you are ready to deploy to AWS Elastic Beanstalk.

Be careful, this may incur charges as your app gets more popular.

Deploy by running the script:  

`$ npm run aws`   

That's it. The script will set eb env to production, build your app, deploy it to AWS and open the deployed page.





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
| &nbsp; |-reducers/    
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
