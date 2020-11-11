import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as LandingPage from '../lib/landing-page-stack';

test('Stack is Tagged', () => {
  const app = new cdk.App({
    context: {
      service_name: 'Landing-Page'
    }
  });
  const stack = new LandingPage.LandingPageStack(app, 'MyTestStack');
  expectCDK(stack).to(
    haveResource('AWS::S3::Bucket', {
      Tags: [
        {
          Key: 'StackType',
          Value: 'Landing-Page'
        }
      ]
    })
  );
  expectCDK(stack).to(
    haveResource('AWS::Lambda::Function', {
      Tags: [
        {
          Key: 'StackType',
          Value: 'Landing-Page'
        }
      ]
    })
  );
});
