import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

const myWork = [
  {
    'title': "	AWS automated deployment",
    'href': "https://example.com",
    'desc': "This portfolio  website is purely automated by using various AWS services. Frontend is been provisioned by Route53, Cloud front, S3 for user inteface and React and Babel Java libraries for dynamic interaction with work bubbles. Coming to backend there is whole lot stuff involved to make this portfolio possible. I have used Code pipeline and Code build to automate complete process from initial commit to Github and all the way to the deployment. Lambda, the server less architecture is efficiently used to deploy python scripts and to trigger the SNS notification upon successful deployment or for an quick status if something goes wrong",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "CodePipeline/CodeBuild/Lambda/SNS",
    'href': "https://example.com",
    'desc': "AWS CodePipeline helps to streamline the automated deployment by provisioning complete resources in an orderly fashion. Once I commit my code in GitHub, CodePipeline automatically pulls the source code from GitHub and convert into deployable artifacts and store it in the S3 an object based storage. This output artifacts are provided as input for Code Build where it builds the package and run the required unit tests and test cases which are provided in build specification file. This is to make sure it passes every test for successful implementation. Upon successful Build,  Lambda function scripted in python (AWS Boto) is triggered to consolidate the  package and store it in S3, later this will act as source for Route 53 and cloud front distribution .Finally when my project is successfully deployed, I will receive a SNS notification from a subscribed SNS topic to my personal email id. Viola! My Portfolio works!!!",
    'image': {
      'desc': "A Serverless Portfolio",
      'src': "images/example2.PNG",
      'comment': ""
    }
  },
  {
    'title': "Static website to Dynamic",
    'href': "https://example.com",
    'desc': "In general, website which is hosted from S3 source serves as a static one which will have the same information every time when you visit. However you can make webpages dynamically interact by using modern day Java compilers. I have incorporated handful features in order to achieve this functionality . I have used React, the JavaScript library for making an interactive UI. Also,  I have used npm, node package manager to install required node.js packages, Babel for browser compatibility and Jest for testing the scripts for individual test cases. With all the features incorporated in the AWS cloud infrastructure this interactive website was made possible.",
    'image': {
      'desc': "example screenshot of a project involving cats",
      'src': "images/example3.PNG",
      'comment': `"Bengal cat" by roberto shabs is licensed under CC BY 2.0
                  https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  }
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
