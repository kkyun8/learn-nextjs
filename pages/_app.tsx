import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
 
 Amplify.configure({
   Auth: {
       region: process.env.NEXT_PUBLIC_COGNITO_REGION,
       userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
       userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID
   }
 });

const App = () => (
  <div/>
);

export default withAuthenticator(App);