'use client'

import InputArea from "@/components/InputArea";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState('');

  return (
    <main>
      <InputArea 
        value={text} 
        onChange={(str: string) => setText(str)} 
      />
    </main>
  );
}
