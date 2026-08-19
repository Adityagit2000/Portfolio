"use client";

import React from 'react';

export default function HTMLOverlay() {
  return (
    <div className="relative z-10 w-full overflow-y-auto h-screen" id="scroll-container">
      <section id="hero" className="w-full h-[100vh] flex flex-col justify-end items-center pb-20 pointer-events-none shrink-0">
        <div className="animate-bounce">
          <p className="text-sm tracking-widest uppercase text-gray-500 mb-2">Scroll to explore</p>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent mx-auto"></div>
        </div>
      </section>

      <section id="project-1" className="w-full h-[150vh] flex flex-col justify-center px-12 md:px-24 pointer-events-none shrink-0">
        <div className="max-w-xl proj-content opacity-0">
          <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">Confera V2</h2>
          <p className="text-gray-300 text-lg mb-6 drop-shadow-md">A next-generation platform for real-time video conferencing and seamless collaboration.</p>
          <div className="flex gap-3">
            <span className="px-3 py-1 rounded-full text-sm border border-purple-500/30 text-purple-300 glass">React</span>
            <span className="px-3 py-1 rounded-full text-sm border border-blue-500/30 text-blue-300 glass">WebRTC</span>
          </div>
        </div>
      </section>

      <section id="project-2" className="w-full h-[150vh] flex flex-col justify-center items-end px-12 md:px-24 pointer-events-none text-right shrink-0">
        <div className="max-w-xl proj-content opacity-0">
          <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">Ember & Ash</h2>
          <p className="text-gray-300 text-lg mb-6 drop-shadow-md">A premium culinary experience website showcasing elegant menus and reservations.</p>
          <div className="flex gap-3 justify-end">
            <span className="px-3 py-1 rounded-full text-sm border border-orange-500/30 text-orange-300 glass">Next.js</span>
            <span className="px-3 py-1 rounded-full text-sm border border-red-500/30 text-red-300 glass">Tailwind</span>
          </div>
        </div>
      </section>

      <section id="project-3" className="w-full h-[150vh] flex flex-col justify-center px-12 md:px-24 pointer-events-none shrink-0">
        <div className="max-w-xl proj-content opacity-0">
          <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">Lumiere Studio</h2>
          <p className="text-gray-300 text-lg mb-6 drop-shadow-md">Precision salon booking and aesthetic portfolio showcasing hair and beauty artistry.</p>
          <div className="flex gap-3">
            <span className="px-3 py-1 rounded-full text-sm border border-indigo-500/30 text-indigo-300 glass">TypeScript</span>
            <span className="px-3 py-1 rounded-full text-sm border border-violet-500/30 text-violet-300 glass">Framer Motion</span>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full h-[100vh] flex flex-col justify-center items-center pointer-events-none shrink-0">
        <div className="contact-content opacity-0 text-center pointer-events-auto">
          <h2 className="text-6xl font-bold mb-6 text-gradient">Let's Build Something</h2>
          <p className="text-gray-400 text-xl mb-10 max-w-lg mx-auto">Available for freelance opportunities and full-time roles.</p>
          <a href="mailto:hello@example.com" className="inline-block px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform">
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
