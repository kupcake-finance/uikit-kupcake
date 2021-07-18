import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import { PancakeRoundIcon, CogIcon, SvgProps } from "../../components/Svg";
import Skeleton from "../../components/Skeleton/Skeleton";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  cakePriceUsd?: number;
}

const Flex = styled.div`
  display: flex;
`;

const SpacedButton = styled(Button)`
  margin-right: 10px;

  &:hover {
    color: #06c;
  }
`;

const StyledButton = styled(Button)`
  font-family: 'Roboto', sans-serif !important;
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
`

const StyledRedButton = styled(Button)`
  font-family: 'Roboto', sans-serif !important;
  background-color: #ff629a;
  margin-right: 5px;
  height: 30px;
  font-weight: 400;
  max-width: 300px;
  box-shadow: none;
  transition: all 0.2s ease-in-out;
  border: 2px solid #fff !important;

  & > svg,
  & > svg > * {
    fill: #fff;
  }

  &:hover {
    color: #ff629a;
    background-color: #fff;
    border: 2px solid #ff629a !important;

    & > svg,
    & > svg > * {
      fill: #ff629a;
    }
  }

  &:focus {
    box-shadow: none !important;
  }

  &:active {
    background-color: #fff;
  }
`

const UserBlock: React.FC<Props> = ({ account, login, logout, cakePriceUsd }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <Flex>
      {/* {cakePriceUsd ? (
        <>
          <SpacedButton 
          size="sm"
          variant="primary"
          >
            <PancakeRoundIcon width="20px" mr="8px" />
            {`$ ${cakePriceUsd.toFixed(3)}`}
          </SpacedButton>
        </>
      ) : (
        <SpacedButton size="sm">
          <Skeleton width={80} height={24} />
        </SpacedButton>
      )} */}

      {account ? (
        <StyledRedButton
          size="sm"
          variant="primary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </StyledRedButton>
      ) : (
        <StyledButton
          size="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </StyledButton>
      )}
    </Flex>
  );
};

export default UserBlock;
