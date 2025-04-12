# Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router

This project was inspired in a functional E-Commerce platform with an Admin Dashboard.

## Technologies Used

- [Next.js 13](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/)
- [NextAuth](https://next-auth.js.org/)

## Features

- We will be using Shadcn UI for the Admin!
- Our admin dashboard is going to serve as both CMS, Admin and API!
- You will be able to control mulitple vendors / stores through this single CMS! (For example you can have a "Shoe store" and a "Laptop store" and a "Suit store", and our CMS will generate API routes for all of those individually!)
- You will be able to create, update and delete categories!
- You will be able to create, update and delete products!
- You will be able to upload multiple images for products, and change them whenever you want!
- You will be able to create, update and delete filters such as "Color" and "Size", and then match them in the "Product" creation form.
- You will be able to create, update and delete "Billboards" which are these big texts on top of the page. You will be able to attach them to a single category, or use them standalone (Our Admin generates API for all of those cases!)
- You will be able to Search through all categories, products, sizes, colors, billboards with included pagination!
- You will be able to control which products are "featured" so they show on the homepage!
- You will be able to see your orders, sales, etc.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your-username/project-name.git
   ```
2. Install NPM packages

   ```
   npm install
   ```

3. Create a .env file and update the content as follows my MySQL credentials, my Clerk Keys and my Cloudinary Cloud name.

   ```bash
   DATABASE_URL="mysql://root:sKQPjmDPKbeNuLwRpMHTBeLcOKZtGimd@crossover.proxy.rlwy.net:27811/railway"

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y2xlYW4tY29icmEtNzAuY2xlcmsuYWNjb3VudHMuZGV2JA
   CLERK_SECRET_KEY=sk_test_BP2tCM4HUpP2hSdGPiOwi1CB1eXlb7n7biCv0cOs27

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dtg2ivboz
   ```

4. Install the Next Cloudinary

   ```bash
   npm install next-cloudinary
   ```

5. Install the ShadCN library

   ```bash
   npx shadcn@latest
   ```

6. Add tanstack/react-table dependency

   ```bash
   npm install @tanstack/react-table
   ```

7. Apply the database schema

   ```bash
   npx prisma migrate dev
   ```

8. Run the development server:
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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Stripe Documentation](https://stripe.com/docs)
