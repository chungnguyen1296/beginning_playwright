/* eslint-disable max-len */
import { isSIT, isUAT  } from './local.config';

const { TEST_ENV } = process.env;

const env = isSIT ? 'sit' : isUAT ? 'uat' : 'PROD_URLs';
const host =  'https://opensource-demo.orangehrmlive.com' 
const urls = {
    loginUrl: `${host}/web/index.php/auth/login`,
};

export default urls;

/* env TEST_ENV=PROD npx playwright test --ui */