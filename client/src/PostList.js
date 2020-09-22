import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        // The port on which the query service runs
        const res = await axios.get('http://localhost:4002/posts');

        setPosts(res.data);
    }

    // Only fetches posts when component is first displayed
    // Empty array as second argument is so that the function
    // is ran only once
    useEffect(() => {
        fetchPosts();
    }, []);

    // Array of post objects
    const renderedPosts = Object.values(posts)
        .map(post => {
            return (
                <div 
                    className="card" 
                    style={{ width: '30%', marginBottom: '20px' }}
                    key={post.id}
                >
                    <div className="card-body">
                        <h3>{post.title}</h3>
                        <CommentList comments={post.comments}/>
                        <CommentCreate postId={post.id} />
                    </div>
                </div>
            )
        })

    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
    </div>
}
