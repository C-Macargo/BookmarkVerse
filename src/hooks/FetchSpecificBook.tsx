// useFetchBook.js
import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetchBook(googleBooksId : string) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    `http://localhost:5000/book/find/${googleBooksId}`
                );
                setData(response.data);
            } catch (error:any) {
                console.error(error.message);
            }
        }

        fetchData();
    }, [googleBooksId]);

    return data;
}

export default useFetchBook;
