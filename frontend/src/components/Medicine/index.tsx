import { useEffect, useState } from "react";
import "./styles.css";
import Download_icon from '../../../public/download_icon.svg'
import Image from "next/image";

const URL = process.env.NEXT_PUBLIC_DB_URL;

interface Props {
    id: string;
    setModal: Function;
}

interface Medicine {
    active_principles: Array<any>;
    company: string;
    documents: Array<any>;
    name: string;
    published_at: string;
}

export default function Medicine({ id , setModal } : Props ){
    const [data, setData] = useState<Medicine>();

    useEffect(() => {
        fetch(`${URL}data/${id}`)
            .then((res) => res.json())
            .then((res) => {setData(res)});
            
    }, []);

    console.log(data);

    return (
        <div className="medicine-modal">
                <div 
                    className="close"
                    onClick={() => {setModal(false)}}
                >
                    X
                </div>
                <div className="medicine-container">
                    <div className="act_princ">
                        <h2>Princípio(s) Ativo(s): </h2>
                        {data?.active_principles.map((act: any) => (<p key={act.id}>{act.name}</p>))}
                    </div>
                    <div>
                        <h2>Bula</h2>
                        {data?.documents.map((document: any) => 
                            (
                                <button
                                    key={document.id}
                                    className="button-download"
                                    onClick={() => {}}
                                >
                                    {document.type}<Image src={Download_icon} alt="download icon" />
                                </button>
                            )
                        )}
                    </div>
                </div>
        </div>
    );
}