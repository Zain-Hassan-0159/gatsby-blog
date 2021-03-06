import React from 'react';
import {Link} from 'gatsby';
import Navigation from '../Navigation/Navigation';
import {useMenuQuery} from "../../hooks/useMenuQuery";
import {Wrapper,Content} from "./Header.styles";

const Header = ()=>{
    const {site, menu} = useMenuQuery();
    
    return(
        <Wrapper>
            <Content>
                <Link to="/">
                    <h2>{site.siteMetadata.title}</h2>
                </Link>
                <Navigation menu={menu.menuItems.nodes} />
            </Content>
        </Wrapper>
    )
}

export default Header;