import react from "react";
import styled from "styled-components";
import Banner from './Banner';
import Posts from './Posts/Post/Post';

const HomeContent = () => {
    return (
        <div className="HomeContent">
            <Banner /> 
            <Posts />
        </div>
    );
}
export default HomeContent;