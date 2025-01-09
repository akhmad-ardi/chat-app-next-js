import React from 'react';
import Link from 'next/link';

import { LuMessagesSquare } from "react-icons/lu";

// components
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import FormSignIn from "./_components/FormSignIn";

export default function page() {
    return (
        <main className="h-screen grid gap-1 justify-center content-center ">
            <div className="h-fit">
                <Card className="w-[95vw] shadow-md">
                    <CardHeader>
                        <div className="flex justify-center mb-5">
                            <div className="bg-primary p-3 rounded-lg">
                                <LuMessagesSquare color="white" size={30} />
                            </div>
                        </div>
                        <CardTitle className="text-center">Sign In</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <FormSignIn />
                    </CardContent>
                    <CardFooter className='justify-center'>
                        <p className='text-center'>
                            <Link href="/signup" className='font-bold underline'>Sign Up</Link> {" "} if you don&apos;t have account
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </main>
    );
}