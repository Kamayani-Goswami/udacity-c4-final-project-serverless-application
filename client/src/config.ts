// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'o9ctdnj8sh'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-rsplt9p2.auth0.com',               //domain: Auth0 Domain
  clientId: 'yxDnjrbaJQC6MXrSMdcZvloxClbAwg9z',   //clientId: Auth0 Client ID
  callbackUrl: 'http://localhost:3000/callback'
}
