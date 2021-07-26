export const env = {
  dev: 'dev',
  production: 'production',
};
export const currentEnv = process.env.REACT_APP_ENV || env.dev;

export const API_URL = {
  dev: 'https://dev-api-talents04.hblab.dev/api',
  production: 'https://api-talents04.hblab.dev/api'
};

export const CLIENT_ID = {
  dev: '782033471807-c2ko24tlqf40v88amc56ppjifa4v7uh0.apps.googleusercontent.com',
  production: '782033471807-c2ko24tlqf40v88amc56ppjifa4v7uh0.apps.googleusercontent.com'
}

export const BASE_API_URL = API_URL[currentEnv];
export const GOOGLE_CLIENT_ID = CLIENT_ID[currentEnv];
