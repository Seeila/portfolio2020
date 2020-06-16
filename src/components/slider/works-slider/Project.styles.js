import styled from "styled-components";
import ImgWithOverflowingBg from "../../img/ImgWithOverflowinBg";

const ProjectSection = styled.section`
  width: 100%;
  max-width: 1920px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  /* Depending the text length, the last row will be bigger to allow the text to wrap */
  grid-template-rows: ${(p) =>
    p.title.length <= 10
      ? "repeat(8, minmax(1fr, 2.25rem))"
      : "repeat(6, minmax(1fr, 2.25rem)) repeat(2, minmax(1fr, 3rem))"};
  grid-gap: 0 1.875rem;
  font-family: ${(p) => p.theme.font.poppins};

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-template-rows: repeat(10, minmax(0, 1fr));
    grid-gap: 1.875rem;
  }
`;

const ProjectImg = styled(ImgWithOverflowingBg)`
  grid-column: 1 / span 3;
  grid-row: 1 / span 7;

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    width: 90%;
    padding-top: 0;
    grid-column: 3 / span 5;
    grid-row: 3 / span 6;
  }
`;

const ProjectIndex = styled.p`
  grid-column: 4;
  grid-row: 5;
  padding-left: 0.875rem;
  position: relative;
  font-size: 1.5rem;
  line-height: 1;
  letter-spacing: 3px;
  text-align: left;
  color: ${(p) => p.theme.color.primary};
  transition: all 0.25s ease-in-out;

  &::before {
    content: "";
    width: 100%;
    height: 0.25rem;
    position: absolute;
    right: 100%;
    bottom: 0.25rem;
    background: ${(p) => p.theme.color.primary};
    transition: all 0.25s ease-in-out;
    z-index: -1;
  }

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    width: 0;
    grid-column: 7 / span 4;
    grid-row: 7;
    align-self: end;
    text-align: right;
    font-size: 2.25rem;
    line-height: 0.8;
    transform-origin: left;
    overflow: hidden;
    z-index: -1;

    &::before {
      width: calc(100% - 4.4rem);
      position: relative;
      right: auto;
      display: inline-block;
      margin-right: 1rem;
    }

    span {
      display: inline-block;
      transform: translateY(200%);
    }
  }
`;

const ProjectTitle = styled.div`
  grid-column: 2 / span 3;
  grid-row: 7 / span 2;
  display: flex;
  align-items: center;
  z-index: 2;

  h2 {
    width: 100%;
    font-size: ${(p) => (p.title.length >= 4 ? "2.4rem" : "4rem")};
  }

  @media (min-width: ${(p) => `${p.theme.bp.phones}px`}) {
    h2 {
      font-size: ${(p) => (p.title.length >= 4 ? "4.5rem" : "6rem")};
    }
  }

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    overflow: hidden;
    grid-column: 6 / span 4;
    grid-row: 4 / span 3;

    h2 {
      width: auto;
      font-size: ${(p) =>
        p.title.length >= 4
          ? "clamp(2.4rem, 4.75vw, 4.5rem)"
          : "clamp(4rem, 9.5vw, 11.5rem); "};
    }
  }
`;

export { ProjectSection, ProjectImg, ProjectIndex, ProjectTitle };
