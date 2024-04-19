interface Props{
    id: string;
    name: string;
    company: string;
    published_at: string;
}

export default function ButtonMedicine({id, name, company, published_at} : Props){
    return(
        <button>
            <h1>{name}</h1>
            <h2>{company}</h2>
            <h3>{published_at}</h3>
        </button>
    );
}