import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    // 'https://jsonplaceholder.typicode.com/posts'

    const [data, setData] = useState([])
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {

        setIsLoading(true)

        const fetchPosts = async () => {
            const res = await fetch(url);
            const data = await res.json();

            if (res.ok) {
                setData(data)
                setError("")
                setIsLoading(false)
            }

            if (!res.ok) {
                setError(res.error)
                setIsLoading(false)
            }
        }

        fetchPosts();
    }, [url]);

    return { data, error, isLoading }
}

export default useFetch