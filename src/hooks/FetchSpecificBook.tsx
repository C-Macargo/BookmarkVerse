import { useEffect, useState } from 'react';
import axios from 'axios';

function fetchSpecificBook(googleBooksId : string) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.get(
                    `http://localhost:5000/book/find/${googleBooksId}`
                );
                setData(response.data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [googleBooksId]);

    return { data, isLoading, error };
}

export default fetchSpecificBook;