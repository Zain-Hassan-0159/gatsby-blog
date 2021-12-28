import React from "react";
import {useLatestBlogPost} from "../../hooks/useLatestBlogPost";
import {Link} from "gatsby";
import {Wrapper} from "./LatesBlogPost.styles";

const LatestBlogPost = () => {

    const data = useLatestBlogPost();

    return(
        <Wrapper>
            <h1>Latest Blog Post</h1>
            <h4>{data.allWpPost.edges[0].node.title}</h4>
            <div dangerouslySetInnerHTML={{__html: data.allWpPost.edges[0].node.excerpt}} />
            <Link to={`/blog${data.allWpPost.edges[0].node.uri}`} >
                <h5>Read More</h5>
            </Link>
        </Wrapper>
    )
}

export default LatestBlogPost;