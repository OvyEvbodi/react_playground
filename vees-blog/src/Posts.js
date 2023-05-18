import { useState, useEffect } from 'react';
import Blogs from './Blogs';

const Posts = () => {
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => {
            if (data.ok === false) {
                console.log(data)
                console.log(error)
                throw Error("Oops, something went wrong... :( ");
            }
            return data.json()})
        .then(res => {
            setPosts(res);
            setIsLoading(false);
            setError(null);
            console.log(res)
        })
        .catch(err => {
            setError(err.message)
            console.log(error)
            setIsLoading(false);
        })
    }, [])

    // const [users, setUsers] = useState(null);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(res => { 
    //             if (res.status !== 200) {
    //                 throw Error("Oop, something went wrong...");
    //             }
    //             return res.json()})
    //         .then(data => { 
    //             setUsers(data)
    //             setError(null)
    //             console.log(data)
    //         })
    //         .catch(err => console.log(err.message))
    // }, [])

    return (
        <div>
            { error && <h4>{error}</h4> }
            { isLoading && <h4>Loading..... zukwike</h4> }
            <Blogs blogs={ posts } title="rest stuff" />
        </div>
    )

};

export default Posts;