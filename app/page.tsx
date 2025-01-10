import React from "react";
import { Suspense } from 'react';
import { DropDownWrapper } from './components/Dropdowns/DropDownWrapper';
import { Loader } from './components/Loader/Loader';

export default async function Home() {
  return (
    <main className="  flex flex-col  min-h-screen bg-slate-400 p-5">
      <section className="bg-white p-5 m-auto rounded-md md:py-7">
        <h1 className="pb-4 text-center text-xl font-bold">
          The Car Dealer App
        </h1>
        <DropDownWrapper />
      </section>
    </main>
  );
}


