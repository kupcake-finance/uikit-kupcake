import React, { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  color: #fcfcfc;
  font-size: 16px;
`;

const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isHttpLink ? "a" : NavLink;
  const props = isHttpLink ? { href } : { to: href };
  return (
    <Wrapper>
      <Tag {...props} {...otherProps} />
    </Wrapper>
  );
};

export default MenuLink;
