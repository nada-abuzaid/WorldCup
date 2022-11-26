import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import pattern from "../../assets/pattern.png";

export default function Header() {
  return (
    <HeaderStyle>
      <div className="logo-header">
        <img className="logo-img" src={logo} alt="Logo" />
      </div>
      <div className="header bg-primary">
          <img src={pattern} alt="pattern" className="pattern-back"/>
          <div className="title">
            <p className="title-world">كأس العالم</p>
          </div>
      </div>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  .bg-primary {
    background-color: #8a1538 !important;
    color: white;
    height: 12rem;
    position: relative;
    .pattern-back{
      position: absolute;
      width: 100%;
      height: 12rem;
      object-fit: cover;
    }
  }

  .title .title-world {
    direction: rtl;
    font-size: 65px;
    font-family: 'Noto Kufi Arabic', sans-serif;
    position: absolute;
    right: 10%;
    top: 15%;
  }

  .header {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%);
  }

  .logo-header {
    position: absolute;
    z-index: 999;
    left: 90px;
    top: 35px;
  }

  .logo-img {
    -webkit-filter: drop-shadow(5px 5px 50px #222);
    filter: drop-shadow(5px 5px 30px #222);
    height: 200px;
  }

  @media only screen and (max-width: 600px) {
    .title .title-world {
      font-size: 45px;
      right: 30px;
      top: 22%;
    }
    .logo-header{
      left: 40px;
    }
    .logo-img {
      height: 180px;
    }
  }
  @media only screen and (max-width: 400px) {
    .logo-header{
      left: 20px;
      top: 50px;
    }
    .logo-img {
      height: 155px;
    }
  }
`;
