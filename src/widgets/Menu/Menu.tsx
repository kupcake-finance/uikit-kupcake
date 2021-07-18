import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import Button from "../../components/Button/Button";
import { PancakeRoundIcon } from "../../components/Svg";
import Skeleton from "../../components/Skeleton/Skeleton";
import { Flex } from "../../components/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./Logo";
import Panel from "./Panel";
import UserBlock from "./UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import Avatar from "./Avatar";

const StyledButton = styled(Button)`
  font-family: "Roboto", sans-serif !important;
  background-color: #48cae4;
  margin-right: 5px;
  height: 30px;
  font-weight: 500;
  max-width: 300px;
  box-shadow: none;
  transition: all 0.2s ease-in-out;
  border: 2px solid #fff !important;

  & > svg,
  & > svg > * {
    fill: #fff;
  }

  &:hover {
    color: #48cae4;
    background-color: #fff;
    border: 2px solid #48cae4 !important;

    & > svg,
    & > svg > * {
      fill: #48cae4;
    }
  }

  &:focus {
    box-shadow: none !important;
  }

  &:active {
    background-color: #fff;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  z-index: 20;
  transform: translate3d(0, 0, 0);
  background-color: #ff629a;
  border-bottom: 2px solid rgba(133, 133, 133, 0.1);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const NewPanel = styled(Panel)`
  ${({ theme }) => theme.mediaQueries.xs} {
    display: flex;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`;

const NewLogo = styled(Logo)`
  ${({ theme }) => theme.mediaQueries.xs} {
    display: flex;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  priceLink,
  profile,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  const NewNavUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    ${({ theme }) => theme.mediaQueries.xs} {
      display: none;
    }
    ${({ theme }) => theme.mediaQueries.sm} {
      display: none;
    }

    ${({ theme }) => theme.mediaQueries.lg} {
      display: flex;
    }
  `;

  const StyledKupIcon = styled(PancakeRoundIcon)`
    ${({ theme }) => theme.mediaQueries.xs} {
      display: none;
    }
    ${({ theme }) => theme.mediaQueries.sm} {
      display: none;
    }

    ${({ theme }) => theme.mediaQueries.lg} {
      display: flex;
    }
  `;
  const NewNavLi = styled.li`
    color: #f5f5f7;
    opacity: 0.8;
    width: 80px;
    max-width: 10%;
    text-align: center;

    &:hover {
      opacity: 1;
    }
  `;
  const NewNavA = styled.a`
    color: #f5f5f7;
    text-align: center;
  `;

  const AbsoluteFlex = styled(Flex)`
    position: absolute;
    right: 10px;
  `;

  const AbsoluteFlexLeft = styled(Flex)`
    position: absolute;
    left: 10px;
  `;

  const SpacedButton = styled(Button)`
    margin-left: 10px;
    width: 175px;

    &:hover {
      color: #06c;
    }
  `;

  const HeaderFlex = styled(Flex)`
    margin: 0 auto;
    width: 100%;
    max-width: 2500px;
  `;

  return (
    <>
      <HeaderFlex flexDirection="row" justifyContent="space-between" alignItems="center">
        <>
          {cakePriceUsd ? (
            <>
              <StyledButton size="sm" variant="transparent">
                <StyledKupIcon width="20px" mr="8px" />
                {`$ ${cakePriceUsd.toFixed(3)}`}
              </StyledButton>
            </>
          ) : (
            <StyledButton size="sm">
              <Skeleton width={80} height={24} />
            </StyledButton>
          )}
        </>

        <>
          <UserBlock account={account} login={login} logout={logout} cakePriceUsd={cakePriceUsd} />
          {profile && <Avatar profile={profile} />}
        </>
      </HeaderFlex>
    </>
  );
};

export default Menu;
