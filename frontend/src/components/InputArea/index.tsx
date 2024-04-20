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