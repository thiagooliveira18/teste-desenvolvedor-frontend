import "./styles.css";
import Download_icon from '../../../public/download_icon.svg';
import Image from "next/image";

interface Documents {
    type: string;
    url: string;
}

export default function ButtonDownload({type, url} : Documents){
    return (
        
        <a
            href={url}
            download
        >
            <div className="button-download">
                {type}
                <Image src={Download_icon} alt="download icon" />
            </div>
        </a>
    );
}