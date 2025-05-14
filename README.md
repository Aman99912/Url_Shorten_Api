# URL Shortener API

This is a simple URL shortener API built with Node.js and Express. It provides two main functionalities:
1. Shorten a given URL.
2. Redirect a shortened URL to its original URL.

## Endpoints

### 1. `POST /shorten`

This endpoint allows you to shorten a long URL.

#### Request Body:
```json
{
  "longUrl": "http://instagram.com"
}
