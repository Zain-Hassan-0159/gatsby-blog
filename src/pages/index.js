import * as React from "react";
import Seo from "../components/SEO/SEO";
import Layout from "../components/Layout/Layout";
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost";
import Articles from "../components/Articles/Articles";
import Hero from "../components/Hero/Hero";
import CtaArea from "../components/CtaArea/CtaArea";


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Articles />
    <LatestBlogPost />
    <CtaArea />
  </Layout>
)

export default IndexPage
