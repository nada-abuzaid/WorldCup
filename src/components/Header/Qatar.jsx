import React from "react";
import styled from "styled-components";
import qatarWord from "../../assets/qatar-word.png";

export default function Qatar() {
  return (
    <TitleStyle>
      <img src={qatarWord} alt="Qatar Word" />
    </TitleStyle>
  );
}

const TitleStyle = styled.div`
  img {
    width: 20%;
    display: flex;
    margin: 1rem auto;
  }
  @media only screen and (max-width: 600px) {
    img{
      width: 50%;
    }
  }
`;
