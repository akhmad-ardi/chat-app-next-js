import React from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Home() {
  return (
    <main>
      <section className="border border-gray-950/20 py-5 px-5 space-x-5 flex justify-between rounded-b-3xl shadow-md">
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
            <BsThreeDotsVertical size={30} />
          </div>
        </div>
      </section>

      <section className="h-fit border border-gray-950/20 py-5 px-2 mt-7 space-x-5 flex justify-between rounded-3xl shadow-md">
        <ul className="px-1 w-full border-none">
          {[1, 2, 3, 4, 5].map((value) => {
            return (
              <li
                key={value}
                className="flex space-x-3 border-b py-3 border-b-gray-800 w-full"
              >
                <div>
                  <Image
                    src="/Photo.png"
                    alt="Description of the image"
                    width={50}
                    height={50}
                    className="h-16 w-16 rounded-full border border-primary"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold">Akhmad</h3>
                  <p className="text-gray-800">Hello...</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
