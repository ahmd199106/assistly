import Link from "next/link";
import Avatar from "./Avatar";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <header
      className="bg-white shadow-sm text-gray-800 flex justify-between items-center p-5"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link href="/" className="flex items-center text-4xl font-thin">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar seed="PAPAFAM Support Agent" />
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">Assistly</h1>
            <h2 className="text-sm font-thin">
              Your Customisable AI Chat Agent
            </h2>
          </div>
        </div>
      </Link>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
