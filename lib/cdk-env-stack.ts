import { Stack, StackProps, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { AppContext } from './app-context';

export class CdkEnvStack extends Stack {
  constructor(appContext: AppContext, id: string, props?: StackProps) {
    super(appContext.cdkApp, id, props);
  
    // example resource
    const queue = new sqs.Queue(this, `CdkEnvQueue${appContext.appConfig.ns}`, {
      visibilityTimeout: Duration.seconds(300)
    });
  }
  
  
}
