import { generateShortCode } from "../utils/codeGen.js";
const urlMap = new Map();

export const shortenUrl = (req, res) => {
    const { longUrl } = req.body;
    if (!longUrl) {
        return res.status(400).json({ error: 'URL is required' });
    }
    const shortCode = generateShortCode();
    urlMap.set(shortCode, longUrl);
    res.status(201).json({ shortCode, longUrl });
};

export const redirectUrl = (req, res) => {
    const { shortcode } = req.params;
    const longUrl = urlMap.get(shortcode);
    if (!longUrl) {
        return res.status(404).json({ error: 'URL not found' });
    }
    res.redirect(longUrl);
};
