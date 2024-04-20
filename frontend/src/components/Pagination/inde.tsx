
interface Props {
    limit: number;
    total: number;
    offset: number;
    setOffset: Function;
    setPage: Function;
}

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export default function Pagination({ limit, total, offset, setOffset, setPage }: Props){
    const currentPage = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const first = Math.max(currentPage - MAX_LEFT, 1);

    return(
        <ul>
            {
                Array.from({length: Math.min(MAX_ITEMS, pages)})
                    .map((_, index) => index + first)
                    .map((page, index) => (
                        <li key={index}>
                            <button 
                                onClick={() => {
                                    setOffset((page - 1) * limit);
                                    setPage(page);
                                    }}
                            >
                                {page}
                            </button>
                        </li>
                    ))
            }
        </ul>
    );
}