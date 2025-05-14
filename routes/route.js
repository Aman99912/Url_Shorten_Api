import express from 'express';
import { redirectUrl, shortenUrl } from '../controllers/urlController.js';

const userRoute = express.Router();

userRoute.post('/shorten', shortenUrl);
userRoute.get('/:shortcode', redirectUrl);

export default userRoute;
