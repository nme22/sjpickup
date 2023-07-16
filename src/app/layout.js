import 'src/app/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
   title: 'sjpickup',
   description: 'A soccer app designed for to help organize pickup games.',
};

export default function RootLayout({ children }) {
   return (
      <main lang="en">
         <Navbar />
         <body className="">{children}</body>
      </main>
   );
}
