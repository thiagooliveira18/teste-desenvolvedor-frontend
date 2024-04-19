'use client'

import ButtonMedicine from "@/components/ButtonMedicine";
import InputArea from "@/components/InputArea";
import { useEffect, useMemo, useState } from "react";

const URL = 'http://localhost:3000/';

export default function Home() {
  const [info, setInfo] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
      fetch(`${URL}data`)
      .then((res)=>res.json())
      .then((res: any)=>{
        setInfo(res)
      })
  }, []);

  
  const medicinesFiltered = useMemo(() => {
    const lowerSearch = text.toLowerCase();
    return info.filter((medicine: any) => medicine.name.toLowerCase().includes(lowerSearch));
  }, [text, info]) 

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
              medicinesFiltered.map((medicine: any)=>(
                <ButtonMedicine
                  key={medicine.id}
                  id={medicine.id}
                  name={medicine.name}
                  company={medicine.company}
                  published_at={medicine.published_at}  
                />
              ))
            }
          </ul>
        )
      }
    </main>
  );
}
