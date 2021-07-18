import styled from "styled-components";

export const Handle = styled.div`
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  height: 32px;
  left: 4px;
  position: absolute;
  top: 4px;
  transition: left 200ms ease-in;
  width: 32px;
  z-index: 1;
  box-shadow: 0px 0px 0px 4px #48cae4; 
`;

export const Input = styled.input`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: calc(100% - 36px);
  }

  &:focus + ${Handle} {
    box-shadow: 0px 0px 0px 4px #ff629a; 
  }

  &:hover + ${Handle}:not(:disabled):not(:checked) {
    box-shadow: 0px 0px 0px 4px #ff629a; 
  }
`;

const StyledToggle = styled.div<{ checked: boolean }>`
  align-items: center;
  background-color: #fff;
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  position: relative;
  transition: background-color 200ms;
  width: 72px;
`;

export default StyledToggle;
