// Mocks
import { LocalStorage } from './mocks/localStorage';
import { fetch } from './mocks/fetch';

const id = 'TEST_ID';
const testAction = 'TEST_ACTION';
const firstName = 'TEST_FIRST_NAME';
const lastName = 'TEST_LAST_NAME';
const token = 'TEST_TOKEN';
const avatar = 'TEST_AVATAR';
const email = 'TEST_EMAIL';
const password = '12345';
const invite = 'xy18273y4h';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const title = 'TEST_TITLE';
const userId = 1;
const body = 'TEST_BODY_POST';
const error = new Error(errorMessage);

const userProfile = {
    id,
    firstName,
    lastName,
    avatar,
    token,
};

const post = {
    title,
    userId,
    body,
};

const signupData = {
    firstName,
    lastName,
    email,
    password,
    invite,
};


const credentials = {
    email:    'test@email.com',
    password: '1111',
    remember: true,
};

const users = [{ ...userProfile }, { ...userProfile }, { ...userProfile }];

const url = 'https://www.url.com';

global.__ = {
    userProfile,
    signupData,
    errorMessage,
    token,
    error,
    users,
    credentials,
    url,
    post,
    testAction,
};
global.fetch = fetch;
global.localStorage = new LocalStorage();
