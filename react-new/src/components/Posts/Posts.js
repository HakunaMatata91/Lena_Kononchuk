import react from "react";
import styled from "styled-components";
import Posts from './Posts/Post/Post.js';

const Posts = () => {
    return (
        <div className="Posts">
            <Post name="Alla"massege="jQuery это быстрая, небольшая и богатая возможностями JavaScript библиотека." />
            <Post name="Devid"massege="jQuery это быстрая, небольшая и богатая возможностями JavaScript библиотека." />
            <Post name="Lena"massege="jQuery это быстрая, небольшая и богатая возможностями JavaScript библиотека." />
        </div>
    );
}
export default Posts;