import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import Flex from "../../components/Flex/Flex";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { InjectedProps } from "./types";

interface Props extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
}

const StyledModal = styled.div`
  background: ${({ theme }) => theme.modal.background};
  box-shadow: 0 0 10px #3c3c3c;
  border: 5px solid #fff !important;
  border-radius: 21px;
  /* width: 100%; */
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: 360px;
    max-width: 100%;
  }
`;

const ModalHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e9eaeb;
  align-items: center;
  padding: 12px 24px;
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;
const StyledButton = styled(IconButton)`
  font-family: "Roboto", sans-serif !important;
  background-color: #48cae4;
  margin-right: 5px;
  height: 50px;
  font-weight: 600;
  box-shadow: none;
  -webkit-transition: all 0s ease-in-out;
  transition: all 0s ease-in-out;
  border: 2px solid #fff !important;
  position: absolute;
  right: -8px;
  top: -4px;
  border-radius: 0 0 0 15px;

  & > svg,
  & > svg > * {
    fill: #fff;
    width: 26px;
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

const StyledHeading = styled(Heading)`
  font-size: 28px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 15px;
  font-family: "M PLUS Rounded 1c", sans-serif !important;
  margin-top: 10px;
  color: #49cae4;
  letter-spacing: -1px;
`;
const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "24px",
}) => (
  <StyledModal>
    <ModalHeader>
      <ModalTitle>
        {onBack && (
          <StyledButton variant="text" onClick={onBack} area-label="go back" mr="8px">
            <ArrowBackIcon color="primary" />
          </StyledButton>
        )}
        <Heading>{title}</Heading>
      </ModalTitle>
      {!hideCloseButton && (
        <StyledButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
          <CloseIcon color="primary" />
        </StyledButton>
      )}
    </ModalHeader>
    <Flex flexDirection="column" p={bodyPadding}>
      {children}
    </Flex>
  </StyledModal>
);

export default Modal;
