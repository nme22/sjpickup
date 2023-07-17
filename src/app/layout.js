import 'src/app/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from '/components/Navbar';

export const metadata = {
   title: 'sjpickup',
   description: 'A soccer app designed for to help organize pickup games.',
};

export default function RootLayout({ children }) {
   return (
      <ClerkProvider>
         <Navbar />
         <main lang="en">
            <body className="">{children}</body>
         </main>
      </ClerkProvider>
   );
}
