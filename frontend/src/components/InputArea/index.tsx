import useDebounce from "@/Hooks/useDebounce";
import { useState } from "react";

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
        <input 
            type='search' 
            value={displayValue} 
            onChange={handleChange}
        />
    );
}