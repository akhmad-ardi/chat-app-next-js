import React from "react";
import Image from "next/image";
import { BsThreeDotsVertical, BsList } from "react-icons/bs";

// components
import InputMessage from "./_components/InputMessage";

type Props = {
  params: { chat: string };
};

export default function page({ params }: Props) {
  return (
    <main>
      <section className="border border-gray-950/20 py-5 px-5 space-x-5 flex rounded-b-3xl shadow-md justify-between">
        <div className="grid grid-cols-2 gap-3 items-center">
          <Image
            src="/Photo.png"
            alt="Description of the image"
            width={50}
            height={50}
            className="h-16 w-16 rounded-full border border-primary"
          />
          <p className="text-center text-2xl">Ardi</p>
        </div>

        <div>
          <div className="p-3 rounded-lg border border-gray-950/20">
            <BsList size={30} />
          </div>
        </div>
      </section>

      <section className="flex flex-col space-y-4 p-5">
        <div className="flex justify-start">
          <div className="bg-primary text-white p-3 rounded-lg max-w-xs">
            <p>Hello! How can I help you today?</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
            <p>I need some information about your services.</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-primary text-white p-3 rounded-lg max-w-xs">
            <p>Sure! What would you like to know?</p>
          </div>
        </div>
      </section>

      <section className="fixed bottom-0 left-0 right-0 p-5 bg-white border-t border-gray-950/20">
        <InputMessage />
      </section>
    </main>
  );
}
