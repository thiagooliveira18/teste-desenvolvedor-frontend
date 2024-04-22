import useDebounce from "@/Hooks/useDebounce";
import { useState } from "react";
import "./styles.css";

interface Props {
    value: string;
    onChange: Function;
}

export default function InputArea ({ value, onChange }: Props){
    const [displayValue, setDisplayValue] = useState(value);
    
    const debouncedChange = useDebounce( onChange, 500 );

    function handleChange(event: any) {
        setDisplayValue(event.target.value);
        debouncedChange(event.target.value);
    }

    return (
        <div className="input-container">
            <div className="search-icon">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
            </div>
            <input 
                type='search' 
                value={displayValue} 
                onChange={handleChange}
                className="input-area"
                placeholder="Pesquise Aqui."
            />
        </div>
    );
}