import { useState } from "react";
import Medicine from "../Medicine";
import "./styles.css";

interface Props{
    id: string;
    name: string;
    company: string;
    published_at: string;
}

export default function ButtonMedicine({id, name, company, published_at} : Props){

    const [modal, setModal] = useState(false);

    function formatedDate(date: string) {
        const formated_dt = date;
        const newDate = new Date(formated_dt);
        const x = `${newDate.getDay()}/${newDate.getMonth()}/${newDate.getFullYear()} - ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
        return x;
    }

    return(
        <>
            <button className="button-container" onClick={() => setModal(!modal)}>
                <h1 className="button-name button-text">{name}</h1>
                <h2 className="button-company button-text">{company}</h2>
                <h3 className="button-published button-text">{formatedDate(published_at)}</h3>
            </button>
            {
                modal && (
                    <Medicine id={id} setModal={setModal} />
                )
            }
        </>
    );
}