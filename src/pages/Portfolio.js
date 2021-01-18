import React from "react";
import Project from "../components/Project/Project";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
// Portfolio page renders information from json
function Portfolio({ user }) {
  const FadeIn = styled.div`
    animation: 2s ${keyframes`${fadeIn}`};
  `;
  return (
    <FadeIn>
      <div className="mainAbout">
        <Project user={user} />
      </div>
    </FadeIn>
  );
}

export default Portfolio;
