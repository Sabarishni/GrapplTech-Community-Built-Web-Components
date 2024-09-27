import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import UserMenu from "./user-menu";

export default function Header(){
    return(
        <nav className="flex justify-between mx-auto py-2 px-4 items-center shadow-lg border-b-1">
            <Link href={"/"} className="flex items-center">
                <Image src="/logo.png" width="100" height="50" alt="Timely Logo" className="h-14  w-auto"/>
            </Link>
            <div className="flex items-center gap-4">
                <Link href="/events?create=true">
                    <Button variant="default" className="flex items-center gap-2">
                        <PenBox size={14}/> 
                        <span className="hidden sm:inline">Create Event</span>
                    </Button>
                </Link>
                <SignedOut>
                    <SignInButton forceRedirectUrl="/dashboard">
                        <Button variant='outline'>Login</Button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserMenu />
                </SignedIn>
            </div>
        </nav>
    );
}