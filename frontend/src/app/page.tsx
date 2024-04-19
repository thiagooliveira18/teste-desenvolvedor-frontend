'use client'

import ButtonMedicine from "@/components/ButtonMedicine";
import InputArea from "@/components/InputArea";
import { useEffect, useState } from "react";

const URL = 'http://localhost:3000/';

export default function Home() {
  const [info, setInfo] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
      fetch(`${URL}data?_page=1`)
      .then((res)=>res.json())
      .then((res: any)=>{
        console.log(res);
        setInfo(res.data)
      })
  }, []);

  return (
    <main>
      <InputArea 
        value={text} 
        onChange={(str: string) => setText(str)} 
      />
      {
        info && (
          <ul>
            {
              info.map((remedio: any)=>(
                <ButtonMedicine
                  key={remedio.id}
                  name={remedio.name}
                  company={remedio.company}
                  published_at={remedio.published_at}  
                />
              ))
            }
          </ul>
        )
      }
    </main>
  );
}
