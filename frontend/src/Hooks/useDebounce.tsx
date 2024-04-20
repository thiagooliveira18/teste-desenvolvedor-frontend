import { useRef } from "react";

export default function useDebounce(fn: Function, delay: number){
    
    const timeoutRef = useRef<any>(null);

    function debounceFunction(...args: any){
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
            fn(...args);
        }, delay);
    }

    return debounceFunction;
}