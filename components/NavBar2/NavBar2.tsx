"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import theme from '@/app/theme_emotion';
import barsSolid from "@/public/assets/bars-solid.svg";
import xmarkSolid from "@/public/assets/xmark-solid.svg";

const NavBar2 = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleCloseMenu = () => {
    setClick(false);
  };

  const logoe = "/assets/logo_mass.png";

  return (
    <NavContainer>
      <NavFixed>
        <LogoContainer href="/">
    
          <AnimatedText><span>M</span>ass De<span>v</span></AnimatedText>
          <AnimatedLogo>
            <Image src={logoe} alt="mass dev logo" width={40} height={40} />
          </AnimatedLogo>
        </LogoContainer>
        <MenuIcon onClick={handleClick}>
          <Image
            src={click ? xmarkSolid : barsSolid}
            alt={click ? "Close Icon" : "Bars Icon"}
            width={40}
            height={40}
          />
        </MenuIcon>
        <Link href="/" passHref></Link>
      </NavFixed>
      <NavMenu className={click ? "active" : ""}>
        <NavItem onClick={handleCloseMenu}>
          <Link href="/about_me" passHref>
            <NavLink>About Me</NavLink>
          </Link>
        </NavItem>
        <NavItem onClick={handleCloseMenu}>
          <Link href="/projects" passHref>
            <NavLink>Projects</NavLink>
          </Link>
        </NavItem>
        <NavItem onClick={handleCloseMenu}>
          <Link href="/blog_post" passHref>
            <NavLink>Blog</NavLink>
          </Link>
        </NavItem>
        <NavItem onClick={handleCloseMenu}>
     
          <Link href="mailto:massi.marcello@icloud.com" passHref>
            <NavLink>Contact</NavLink>
          </Link>
        </NavItem>
      </NavMenu>
    </NavContainer>
  );
};

export default NavBar2;

const NavContainer = styled.nav`
  width: 100%;
  background-color: #171d35;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 6rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;

  /* border-bottom: solid 0.4rem #feeb64; */
`;

const NavFixed = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
  height: 3rem;
  a {
    text-decoration: none;
  }
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;

  margin-left: -1rem;
  margin-top: 0.3rem;
`;

const AnimatedLogo = styled.div`
  margin-left: .3rem;
  margin-top: .3rem;
  margin-right: 0rem;
  animation: fadeIn 2s ease-in-out;
  align-items: center;
  z-index: -1;

  img {
 
    border-radius: 50%;
    animation: spin 2s linear;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const AnimatedText = styled.h1`
  font-family: "protest guerrilla";
  text-decoration: none;
  font-size: 2.5rem;
  color: #fff;
  margin-left: 0.5rem;
  margin-top: 2rem;
  animation: slideIn 1.8s ease-in-out;
  span{
color: ${theme.colors.bigYellow};
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    25% {
      opacity: 1;
      transform: translateY(-50%);
    }
    50% {
      opacity: 0;
      transform: translateX(20%);
    }
    75% {
      opacity: 1;
      transform: translateY(-20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;
  margin-top: 0.5rem;
  margin-right: -10rem;
  img {
    background-color: white;
  }
  @media screen and (min-width: 600px) {
    margin-right: -18rem;
  }
  @media screen and (min-width: 700px) {
    margin-right: -20rem;
  }
  @media screen and (min-width: 700px) {
    margin-right: -30rem;
  }
  @media screen and (min-width: 920px) {
    display: none;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  display: none;
  margin-bottom: -2rem;
  font-family: "Quicksand", sans-serif;

  @media screen and (min-width: 920px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    background-color: #171d35;
    margin-top: 6rem;
 
    
    border-bottom: solid 4rem yellow;
    @media screen and (min-width: 920px) {
      flex-direction: row;
      margin-top: 7.2rem;
      border-bottom: none;
      background-color: transparent;
    }
  }
`;

const NavItem = styled.li`
  margin: 3.5rem;
  text-align: center;

  a {
    text-decoration: none;
  }
  @media screen and (min-width: 920px) {
    margin-top: -4.5rem;

    margin-left: 0;
  }
`;

const NavLink = styled.div`
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  margin-bottom: -1rem;
  &:hover {
    color: #feeb64;
  }
`;
