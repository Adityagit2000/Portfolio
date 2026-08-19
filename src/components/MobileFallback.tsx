"use client";

import React from 'react';

export default function MobileFallback() {
  return (
    <main className="w-full min-h-screen bg-black text-white p-6 font-sans">
      <section className="h-[90vh] flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-2 text-gradient">Aditya Jha</h1>
        <p className="text-gray-400 text-xl">Cinematic Portfolio</p>
      </section>
      
      {[
        { title: 'Confera V2', url: 'https://conferav2.vercel.app/', img: '/conferav2_demo_1787130841097.webp' },
        { title: 'Ember & Ash', url: 'https://emberandash.vercel.app/', img: '/emberandash_demo_1787130936600.webp' },
        { title: 'Lumiere Studio', url: 'https://lumiere-studio-delta.vercel.app/', img: '/lumiere_demo_1787131074919.webp' }
      ].map((p, i) => (
        <section key={i} className="mb-24">
          <h2 className="text-3xl font-bold mb-4">{p.title}</h2>
          <a href={p.url} target="_blank" rel="noreferrer" className="block relative rounded-xl overflow-hidden glass p-1">
            <img src={p.img} alt={p.title} className="w-full h-auto rounded-lg object-cover" />
          </a>
        </section>
      ))}

      <section className="h-[50vh] flex flex-col justify-center text-center">
        <h2 className="text-4xl font-bold mb-4 text-gradient">Let's Build Something</h2>
        <a href="mailto:hello@example.com" className="inline-block mx-auto px-6 py-3 rounded-full bg-white text-black font-semibold mt-4">Get In Touch</a>
      </section>
    </main>
  );
}
