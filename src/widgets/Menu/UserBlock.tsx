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
        <SpacedButton
          size="sm"
          variant="primary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </SpacedButton>
      ) : (
        <SpacedButton
          size="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </SpacedButton>
      )}
    </Flex>
  );
};

export default UserBlock;
