
interface Props {
    value: string;
    onChange: Function;
}

export default function InputArea ({ value, onChange }: Props){
    function handleChange(event: any) {
        onChange(event.target.value);
    }

    return (
        <input 
            type='search' 
            value={value} 
            onChange={handleChange}
        />
    );
}