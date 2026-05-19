import { useState } from 'react'
import { useEffect, useRef } from 'react';

import React from 'react';

export default function App() {
  // 1. Erstelle eine Referenz (wie einen "Zeiger") für das Input-Feld
  const inputRef = useRef(null);

  // 2. Nutze useEffect, um den Fokus direkt nach dem ersten Rendern zu setzen
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Das leere Array [] sorgt dafür, dass dies nur 1x beim Laden passiert
  
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center font-sans">
      <div class="mt-2.5">
        <input ref={inputRef} type="text" class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
      </div>
    </div>
  );
}