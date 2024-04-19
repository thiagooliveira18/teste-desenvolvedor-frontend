
interface Props {
    value: string;
    onChange: Function;
}

export default function InputArea ({ value, onChange }: Props){
    return (
        <input 
            type='search' 
            value={value} 
            onChange={onChange()}
        />
    );
}