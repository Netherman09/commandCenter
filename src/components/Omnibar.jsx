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
  // 'input' hält den aktuellen Text, 'setInput' ändert ihn
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    // Prüfen, ob die gedrückte Taste "Enter" ist
    if (e.key === 'Enter') {
      // 1. Das Ergebnis in der Konsole ausgeben (zum Testen)
      console.log("Der User hat eingegeben:", input);

      // 2. Logik ausführen (z.B. Google Suche)
      if (input.trim() !== "") {
        performAction(input);
      }

      // 3. Optional: Feld nach Enter leeren
      setInput("");
    }
  };
  const performAction = (command) => {
    // Hier entscheidest du, was passiert
    alert("Befehl ausgeführt: " + command);
    const prefix = command.slice(0, 2);
    //if (command.trim(2))
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(command)}`;
    window.location.href = searchUrl
  };
    return (
        <div className="mt-2.5 w-96">
        <input ref={inputRef} 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
      </div>
    )
}