import { loadStripe } from '@stripe/stripe-js';

import { STRIPE_SECRET_KEY } from './env';

const stripe = await loadStripe(STRIPE_SECRET_KEY);

export default stripe;
