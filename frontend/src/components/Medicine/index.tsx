import { useEffect, useState } from "react";
import "./styles.css";
import ButtonDownload from "../ButtonDownload";

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
            
    },[id]);

    return (
        <div className="medicine-modal">
                <div 
                    className="close"
                    onClick={() => {setModal(false)}}
                >
                    X
                </div>
                <div className="medicine-container">
                    <div className="act-princ">
                        <h2>Princípio ativo </h2>
                        <div className="act-container">
                            {data?.active_principles.map((act: any) => (<p key={act.id} className="act-name">{act.name}</p>))}
                        </div>
                    </div>
                    <div className="button-download-container">
                        <h2>Bulas</h2>
                        {data?.documents.map((document: any) => 
                            (
                                <ButtonDownload 
                                    key={document.id}
                                    type={document.type}
                                    url={document.url}
                                 />
                            )
                        )}
                    </div>
                </div>
        </div>
    );
}