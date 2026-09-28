export default {
  async fetch(request, env, ctx) {
    return new Response(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>CDN Experiment</title>
        </head>
        <body>
          <h1>CDN Service Experiment</h1>
          <h2>Cloudflare Content Delivery</h2>
          <p>This webpage is being delivered through Cloudflare.</p>
          <p>CDN reduces the distance between users and content.</p>
          <p>Status: Successfully Deployed</p>
        </body>
      </html>
    `, {
      headers: {
        "content-type": "text/html"
      }
    });
  }
};