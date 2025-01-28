# Resend with Next.js (Pages Router)

This example shows how to use Resend with [Next.js](https://nextjs.org).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/resend/resend-nextjs-pages-router-example&project-name=resend-nextjs-pages-router-example&repository-name=resend-nextjs-pages-router-example&env=RESEND_API_KEY)

## Instructions

1. Define environment variables in `.env` file.

```sh
cp .env.example .env
```

2. Add your resend key in your new .env file within the quotes


3. Install dependencies:

  ```sh
npm install


3. Run Next.js locally:

  ```sh
npm run dev
  ```

4. Open URL in the browser to make request and see data and id:

  ```
http://localhost:3000/api/send
  ```

5. Went to react gallery components to get templete to style email in email-template file:
https://react.email/components/gallery


6. Once request has been made go to Resend Dashboard and navigate to emails. Click on the request you made, and you should be able to see your email Sent successfully Delivered. With a prewiew of how your email looks.

## License

MIT License
