This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Dynamic Routing
To create a dynamic route in Next.js, you can use the following steps:
1. Create a new folder in the `app` directory with square brackets around the dynamic segment. For example, if you want to create a dynamic route for user profiles, you can create a folder named `[username]`.
2. Inside the `[username]` folder, create a `page.tsx` file.
3. In the `page.tsx` file, you can access the dynamic segment using the `params` object provided by Next.js. Here's an example: 

```tsx
import { useRouter } from 'next/router';    
export default function UserProfile() {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div>
      <h1>User Profile: {username}</h1>
      <p>This is the profile page for {username}.</p>
    </div>
  );
}
``` 
This will create a dynamic route that matches any URL of the form `/[username]`, where `[username]` is a placeholder for the actual username. For example, if you navigate to `/john`, it will render the `UserProfile` component with `username` set to `john`.

### Scenarios of Dynamic Routing
ex 1. /blog/[slug]/page.tsx
ex 2. /blog/[slug]/comments/[commentId]/page.tsx

## Catch-all Routes
To create a catch-all route in Next.js, you can use the following steps:
1. Create a new folder in the `app` directory with double square brackets around the catch-all segment. For example, if you want to create a catch-all route for documentation, you can create a folder named `[[...slug]]`.
2. Inside the `[[...slug]]` folder, create a `page.tsx` file.
3. In the `page.tsx` file, you can access the catch-all segment using the `params` object provided by Next.js. Here's an example:   

```tsx
import { useRouter } from 'next/router';
export default function Documentation() {
  const router = useRouter();
  const { slug } = router.query;
    return (
        <div>
        <h1>Documentation</h1>
        {slug ? (
            <p>Current section: {slug.join(' / ')}</p>
        ) : (
            <p>Welcome to the documentation!</p>
        )}
        </div>
    ); 
}
}
```
This will create a catch-all route that matches any URL of the form `/docs/[...slug]`, where `[...slug]` is a placeholder for the actual slug. For example, if you navigate to `/docs/getting-started/installation`, it will render the `Documentation` component with `slug` set to `['getting-started', 'installation']`.

## Private Folders
To create a private folder in Next.js, you can use the following steps:
1. Create a new folder in the `app` directory with a leading underscore. For example, if you want to create a private folder for admin pages, you can create a folder named `_admin`.
2. Inside the `_admin` folder, create a `page.tsx` file.
3. In the `page.tsx` file, you can implement your private logic. Here's an example: 

```tsx
import { useEffect } from 'react';
export default function AdminPage() {
    useEffect(() => {
        // Check if the user is authenticated
        const isAuthenticated = false; // Replace with your authentication logic
        if (!isAuthenticated) {
            window.location.href = '/login'; // Redirect to login page if not authenticated
        }
    }, []);
    return (
        <div>
            <h1>Admin Page</h1>
            <p>This page is only accessible to authenticated users.</p>
        </div>
    );
}
}
```
This will create a private folder that can only be accessed by authenticated users. If the user is not authenticated, they will be redirected to the login page.