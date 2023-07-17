import Link from 'next/link';
export default function Navbar() {
   return (
      <div className="flex flex-row justify-between w-full gap-4 p-4 text-xl">
         <Link href="/SignIn.js">
            <button className="rounded-md ">Sign In</button>
         </Link>
         <Link href="/SignUp.js">
            <button className="rounded-md">Sign Up</button>
         </Link>
      </div>
   );
}
