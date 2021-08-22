import "../styles/style.css" 
import { Amplify } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AppProps } from 'next/app';
import Head from "next/head";
import Layout from "../components/common/Layout"

interface Props {
  Component: React.ComponentType<any>;
  pageProps: React.ReactPropTypes
}

 Amplify.configure({
   Auth: {
       region: process.env.NEXT_PUBLIC_COGNITO_REGION,
       userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
       userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID
   }
 });

const App: React.FC<Props> = ({ Component, pageProps }) => (
  <>
  <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1"
    />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <AmplifySignOut className="amplift-sign-out"/>
</>
);

export default withAuthenticator(App);