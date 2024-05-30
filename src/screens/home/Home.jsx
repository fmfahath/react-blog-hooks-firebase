import React, { useEffect, useState } from 'react'
import './Home.css'
import PostCard from '../../components/postcard/PostCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useFetchCollection } from '../../hooks/useFetchCollection';



const Home = () => {
    // const [data, setData] = useState('')
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    // useEffect(() => {
    //     const collectionRef = collection(db, "posts");

    //     getDocs(collectionRef)
    //         .then((snapshot) => {
    //             let result = []

    //             snapshot.docs.forEach((doc) => {
    //                 result.push({ ...doc.data(), id: doc.id })
    //                 setData(result)
    //             })
    //         })
    //         .catch((err) => console.log(err))

    // }, [])

    // -----------------------------------------------------

    const { documents: data } = useFetchCollection("posts");

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