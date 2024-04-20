'use client'

import ButtonMedicine from "@/components/ButtonMedicine";
import InputArea from "@/components/InputArea";
import Pagination from "@/components/Pagination/inde";
import { useEffect, useMemo, useState } from "react";

const URL = 'http://localhost:3000/';

const LIMIT = 10;

export default function Home() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [totalItens, setTotalItens] = useState<any>();
  const [dataCurrentPage, setDataCurrentPage] = useState([]);

  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
      fetch(`${URL}data?_page=${page}`)
      .then((res)=>res.json())
      .then((res)=>{
        setDataCurrentPage(res.data);
        setTotalItens(res.items);
      })
  }, [page]);
  
  useEffect(() => {
    if(text){
      fetch(`${URL}data`)
      .then((res) => res.json())
      .then((res) => setData(res));
    }
  }, [text])

  const medicinesFiltered = useMemo(() => {
    const lowerSearch = text.toLowerCase();
    return data.filter((medicine: any) => medicine.name.toLowerCase().includes(lowerSearch));
  }, [text, data]);

  return (
    <main>
      <InputArea 
        value={text} 
        onChange={(str: string) => setText(str)} 
      />
      <Pagination 
        limit={LIMIT} 
        total={totalItens} 
        offset={offset} 
        setOffset={setOffset} 
        setPage={setPage}
      />
      {
        data && !text && (
          <ul>
            {
              dataCurrentPage.map((medicine: any)=>(
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
      {
        data && text && (
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
