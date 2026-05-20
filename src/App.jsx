import { useState } from 'react'
import { useEffect, useRef } from 'react';
import React from 'react';
import Omnibar from './components/Omnibar';


export default function App() {
  
  
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center font-sans">
        <Omnibar></Omnibar>
    </div>
  );
}