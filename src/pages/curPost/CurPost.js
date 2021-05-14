import React from 'react';
import Post from '../../components/post/Post';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {useParams} from 'react-router-dom';

const CurPost = (props) => {
    const params = useParams();
    return (
        <>
            <Header />
                <Post id={params.postId}/>
            <Footer />
        </>
    );
};

export default CurPost;