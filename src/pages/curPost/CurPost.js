import React from 'react';
import Post from '../../components/post/Post';
import {useParams} from 'react-router-dom';

const CurPost = (props) => {
    const params = useParams();
    return (
        <Post id={params.postId}/>
    );
};

export default CurPost;