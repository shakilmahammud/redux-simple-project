import React from 'react';
import {AddPost} from '../Post/AddPost/AddPost';
import {PostList} from '../Post/PostList/PostList';

export const Home = () => {
  return (
    <>
      <AddPost />
      <PostList />
    </>
  )
}
