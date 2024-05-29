import React, { useEffect, useState } from 'react'

const useFetch = (url, method = "GET") => {


    // 'https://jsonplaceholder.typicode.com/posts'

    const [data, setData] = useState([])
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState(null)


    const optionsData = (data) => {
        // console.log(data)
        if (method === "POST") {
            setOptions({
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }
        else if (method === "PATCH") {
            setOptions({
                method: 'PATCH',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }
    }


    useEffect(() => {

        setIsLoading(true)

        const fetchPosts = async (options) => {
            const res = await fetch(url, options);
            const data = await res.json();

            // console.log("res: ", res)

            if (res.ok) {
                setData(data)
                setError("")
                setIsLoading(false)
            }

            if (!res.ok) {
                setError(res.error)
                setIsLoading(false)
            }
        };

        if (method === "GET") {
            fetchPosts();
        }

        if ((method === "POST" || method === "PATCH") && options) {
            fetchPosts(options);
        }

    }, [url, method, options]);


    return { data, error, isLoading, optionsData }
}

export default useFetch