import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import PortableText from "@sanity/block-content-to-react";
import styled from "styled-components";
import InnerLink from "../InnerLink";
import Layout from "../Layout";

const Header = styled.section`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  align-items: center;
  gap: 5rem;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1.4rem;
  }
`;

const Content = styled.div`
  /* border: solid blue; */
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Subtitle = styled.h2`
  font-size: 1rem;
  margin-top: 0.75rem;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Details = styled.section`
  /* display: grid; */
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr, 1fr;
  gap: 2rem;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Graphics = styled.div`
  display: flex;
  gap: 4rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: center;
  }
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr; */
`;

const Graphic = styled.div`
  h2 {
    margin-bottom: 0.4rem;
  }
  &::nth-of-type(3) {
    grid-row: 2/3;
  }
`;

const Blurb = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 1rem 0;
  }
  p {
    line-height: 2rem;
  }
`;

const LeadText = styled.h3`
  font-size: 1.7rem;
  margin-bottom: 1rem;
  &::first-letter {
    text-transform: capitalize;
  }
`;

const DemoLink = styled.a`
  text-transform: capitalize;
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectInfo = ({ pageContext }) => {
  const {
    _rawDescription,
    projectTitle,
    blurb,
    projectImg,
    mobileImg,
    tabletImg,
    projectDemo,
  } = pageContext;
  return (
    <Layout title={projectTitle}>
      <Header>
        <Content>
          <Title> {projectTitle} </Title>
          <Subtitle> {blurb} </Subtitle>
        </Content>
        <Buttons>
          <DemoLink href={projectDemo} target="_blank" rel="noreferrer">
            view live site
          </DemoLink>
          <InnerLink
            style={{ backgroundColor: "red !important" }}
            userRoute="portfolio"
            text="back to projects"
          />
        </Buttons>
      </Header>

      <Details>
        <Graphics>
          <Graphic>
            <Subtitle>Desktop View</Subtitle>
            <GatsbyImage
              image={projectImg.asset.gatsbyImageData}
              alt={projectTitle}
              placeholder="blurred"
            />
          </Graphic>

          <Graphic>
            <Subtitle>Mobile Look</Subtitle>
            <GatsbyImage
              image={mobileImg.asset.gatsbyImageData}
              alt={projectTitle}
              placeholder="blurred"
            />
          </Graphic>

          <Graphic>
            <Subtitle>Tablet</Subtitle>
            <GatsbyImage
              image={tabletImg.asset.gatsbyImageData}
              alt={projectTitle}
              placeholder="blurred"
            />
          </Graphic>
        </Graphics>

        <Blurb>
          <LeadText>more about this project</LeadText>
          <PortableText blocks={_rawDescription} />
        </Blurb>
      </Details>
    </Layout>
  );
};

export default ProjectInfo;
