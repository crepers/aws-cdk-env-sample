#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { App } from '../config/app-context';
import { CdkEnvStack } from '../lib/cdk-env-stack';
import { CfnParameter } from 'aws-cdk-lib';
import { AppContext } from '../lib/app-context';

// const app = new cdk.App();

// const envName = new CfnParameter(app, "env", {
//   type: "String",
//   description: "The name of the CDK environment where resources will be provisioned."});

const appContext = new AppContext({
  projectPrefix: 'envtest'
});
// const appContext = env ? App.Context[env] : App.Context[0];//default;
// let appContext = App.Context.default;
if(appContext.appConfig) {
  new CdkEnvStack(appContext, `${appContext.appConfig.ns}Stack`, {
    /* If you don't specify 'env', this stack will be environment-agnostic.
     * Account/Region-dependent features and context lookups will not work,
     * but a single synthesized template can be deployed anywhere. */
  
    /* Uncomment the next line to specialize this stack for the AWS Account
     * and Region that are implied by the current CLI configuration. */
    // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
  
    /* Uncomment the next line if you know exactly what Account and Region you
     * want to deploy the stack to. */
    // env: { account: '123456789012', region: 'us-east-1' },
  
    /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
  });
} else {
  console.info("App config is undefined. Please check the configuration file.");
}