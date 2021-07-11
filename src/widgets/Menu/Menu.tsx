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
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <NewLogo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
        <HeaderFlex flexDirection="row" justifyContent="space-between" alignItems="center">
          <>
            {cakePriceUsd ? (
              <>
                <SpacedButton size="sm" variant="transparent">
                  <PancakeRoundIcon width="20px" mr="8px" />
                  {`$ ${cakePriceUsd.toFixed(3)}`}
                </SpacedButton>
              </>
            ) : (
              <SpacedButton size="sm">
                <Skeleton width={80} height={24} />
              </SpacedButton>
            )}
          </>

          <>
            <NewNavUl>
              <NewNavLi>
                <NewNavA href="/">
                  <img src="/images/common/token-white.png" alt="Token" width="17px" />
                </NewNavA>
              </NewNavLi>
              <NewNavLi>
                <NewNavA href="/">Home</NewNavA>
              </NewNavLi>
              <NewNavLi>
                <NewNavA href="/swap">Swap</NewNavA>
              </NewNavLi>
              <NewNavLi>
                <NewNavA href="/liquidity">Liquidity</NewNavA>
              </NewNavLi>
              <NewNavLi>
                <NewNavA href="/farms">Farm</NewNavA>
              </NewNavLi>
              {/* <NewNavLi>
                <NewNavA href="/lottery">Lottery</NewNavA>
              </NewNavLi> */}
              <NewNavLi>
                <NewNavA href="/chart">Chart</NewNavA>
              </NewNavLi>
              <NewNavLi>
                <NewNavA href="/">Doc</NewNavA>
              </NewNavLi>
            </NewNavUl>
          </>
          <>
            <UserBlock account={account} login={login} logout={logout} cakePriceUsd={cakePriceUsd} />
            {profile && <Avatar profile={profile} />}
          </>
        </HeaderFlex>
      </StyledNav>
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={cakePriceUsd}
          pushNav={setIsPushed}
          links={links}
          priceLink={priceLink}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
