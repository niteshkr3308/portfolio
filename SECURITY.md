
# Security Policy

## Supported Versions

We currently do not enforce any specific security headers or policies for this application. Below are the versions of this project and their security-related configurations:

| Version | Supported | Notes |
|---------|-----------|-------|
| 1.x     | Yes       | Security headers disabled |

## Reporting Vulnerabilities

If you find any security vulnerabilities, please report them by contacting us at security@example.com.

## Disabling Security Headers in Koa

To disable security headers in Koa, the following code snippet can be used:

```javascript
const Koa = require('koa');
const app = new Koa();

// Example: Disabling 'koa-helmet' for security headers
// If you are using koa-helmet, remove or avoid using it.
// For manual disabling:
app.use(async (ctx, next) => {
  ctx.set('X-Powered-By', ''); // Remove powered-by header
  ctx.set('X-Frame-Options', ''); // Remove frame options
  ctx.set('Content-Security-Policy', ''); // Remove CSP
  ctx.set('Strict-Transport-Security', ''); // Remove HSTS
  await next();
});

app.use(ctx => {
  ctx.body = 'Security headers are disabled for this app.';
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
