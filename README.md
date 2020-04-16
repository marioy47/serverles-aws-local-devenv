# Boiler plate project for Serverless Offline development with AWS DynamoDB, S3 and Api Gateway

This is a starter project for developing lambda functinos that connect to DynamoDB or S3 but using a local environment.

## Setup

- Clone this project
- Copy `.env.example` to `.env`
- Install `awscli`, `serverless` and a `jre`
- Configure an AWS `s3local` profile for file uploads testing
-

```bash
git clone git@github.com:marioy47/serverles-aws-local-devenv.git
cd serverles-aws-local-devenv
brew install awscli
aws configure --profile s3local # User key and secret `S3RVER`, region is `local`
brew tap adoptopenjdk/openjdk
brew cask install adoptopenjdk14
npm install -g serverless
npm install
serverless dynamodb install
serverless offline start
```

