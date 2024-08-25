const STRIPE_SECRET_KEY = String(process.env.STRIPE_SECRET_KEY);

const NODE_ENV = process.env.NODE_ENV;
const HOST_APP_KEY = process.env.HOST_APP_KEY;

const HOST_API_KEY = process.env.HOST_API_KEY;
const API_VERSION = process.env.API_VERSION;
const BASE_URL = `${HOST_API_KEY}${API_VERSION}`;

export { STRIPE_SECRET_KEY, BASE_URL, HOST_APP_KEY, NODE_ENV };
