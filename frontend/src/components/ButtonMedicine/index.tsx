import "./styles.css";

interface Props{
    id: string;
    name: string;
    company: string;
    published_at: string;
}

export default function ButtonMedicine({id, name, company, published_at} : Props){
    return(
        <button className="button-container">
            <h1 className="button-name button-text">{name}</h1>
            <h2 className="button-company button-text">{company}</h2>
            <h3 className="button-published button-text">{published_at}</h3>
        </button>
    );
}