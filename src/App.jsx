import { useState } from 'react'
//import './App.css'

import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center font-sans">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl text-center max-w-sm">
        <h1 className="text-3xl font-bold text-indigo-400 mb-2 tracking-tight">
          Command Center
        </h1>
        <p className="text-slate-400 text-sm">
          Tailwind v4 läuft nativ und blitzschnell auf deinem Surface!
        </p>
        <button className="mt-6 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all text-sm font-medium rounded-lg shadow-lg shadow-indigo-600/20">
          Loslegen
        </button>
      </div>
    </div>
  );
}