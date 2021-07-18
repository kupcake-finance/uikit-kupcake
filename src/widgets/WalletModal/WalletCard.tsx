import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { localStorageKey } from "./config";
import { Login, Config } from "./types";

const StyledButton = styled(Button)`
  font-family: "Roboto", sans-serif !important;
  background-color: #48cae4;
  margin-right: 5px;
  height: 40px;
  font-weight: 500;
  max-width: 300px;
  box-shadow: none;
  transition: all 0.2s ease-in-out;
  border: 2px solid #fff !important;

  &:hover {
    color: #48cae4 !important;
    background-color: #fff;
    border: 2px solid #48cae4 !important;

    & > div {
      color: #48cae4 !important;
    }
  }

  &:focus {
    box-shadow: none !important;
  }

  &:active {
    background-color: #fff;
  }
`;

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <StyledButton
      fullWidth
      variant="primary"
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(localStorageKey, "1");
        onDismiss();
      }}
      style={{ justifyContent: "space-between" }}
      mb={mb}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Text bold color="#fcfcfc" mr="16px">
        {title}
      </Text>
      <Icon width="32px" />
    </StyledButton>
  );
};

export default WalletCard;
