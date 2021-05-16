import React from 'react';
import Box from '../../components/box/Box';

const AllPages = (props) => {
    return(
    <Box allCards={props.allPosts}/>
    );
};

export default AllPages;