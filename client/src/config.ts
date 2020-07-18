// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'atc9te3pca'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-x6mnx6da.us.auth0.com',            // Auth0 domain
  clientId: 'bjG04HrB0cS0TlU17bozxjbCDxwdVf3P',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
