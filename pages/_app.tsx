import "../styles/style.css" 
import { Amplify } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Head from "next/head";
import Layout from "../components/common/Layout"

 Amplify.configure({
   Auth: {
       region: process.env.NEXT_PUBLIC_COGNITO_REGION,
       userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
       userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID
   }
 });

const App = () => (
  <>
  <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1"
    />
    </Head>
    <Layout />
    <AmplifySignOut className="amplift-sign-out"/>
</>
);

export default withAuthenticator(App);