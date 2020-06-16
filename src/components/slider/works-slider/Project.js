import React from "react";
import StretchedLink from "../../links/stretched-link";
import Title from "../../text/Title";
import {
  ProjectSection,
  ProjectImg,
  ProjectIndex,
  ProjectTitle,
} from "./Project.styles";

const Project = (props) => {
  return (
    <ProjectSection
      title={props.slide.name}
      className={props.className + " project"}
    >
      <ProjectTitle title={props.slide.name}>
        <Title title={props.slide.name} />
      </ProjectTitle>
      <ProjectImg
        imgSrc={`../public/${props.slide.photos.thumb.default}`}
        imgAlt=""
      />
      <ProjectIndex>
        {props.slideIndex + 1 >= 10
          ? props.slideIndex + 1
          : `0${props.slideIndex + 1}`}
      </ProjectIndex>
      <StretchedLink
        id={props.slide.id}
        ariaLabel={`See ${props.slide.name} details`}
        srOnly={true}
      />
    </ProjectSection>
  );
};

export default Project;