import react from "react";
import styled from "styled-components";

const Post = (props) => {
    return (
        <div className="">
            <div className="myPost">
                <div class="namePost">{props.name}</div>
                <div class="textPost">{props.massege}</div>
            </div>
           { /*<div className="myPost">
                <div class="namePost">Mery</div>
                <div class="textPost">It's recommended (but not required) to also use the styled-components Babel plugin if you can. It offers many benefits like more legible class names, server-side rendering compatibility, smaller bundles, and more.</div>
            </div>
            <div className="myPost">
                <div class="namePost">Lena</div>
                <div class="textPost">It's recommended (but not required) to also use the styled-components Babel plugin if you can. It offers many benefits like more legible class names, server-side rendering compatibility, smaller bundles, and more.</div>
    </div>}*/}
            

        </div>
    );
}
 export default Post;