import React, { useEffect, useMemo, useState } from 'react'
import './Home.css'
import PostCard from '../../components/postcard/PostCard';
import useFetch from '../../hooks/useFetch';



const Home = () => {
    // const [data, setData] = useState([])
    // const [error, setError] = useState("");
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     const { data, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts');
    //     setData(data)
    //     setError(error)
    //     setIsLoading(isLoading)
    // }, [])

    const { data, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts');



    return (
        <div className='container-home'>
            {
                isLoading && <h3 style={{ color: "orange" }}>Loading...</h3>
            }
            {
                error && <h3 style={{ color: "red" }}>{error}</h3>
            }
            {
                data && data.map((post) => {
                    return <PostCard post={post} key={post.id} />
                })
            }

        </div>
    )
}

export default Home