import { useStaticQuery, graphql } from "gatsby";

export const useLatestBlogPost = () =>{

    const data = useStaticQuery(graphql`
        query LatestBlogPostQuery {
            allWpPost(sort: {order: DESC, fields: date}) {
            edges {
                node {
                title
                excerpt
                uri
                }
            }
            }
        }
    `)
    return data;
}