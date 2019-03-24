import styled from 'styled-components';

export const BackgroundBox = styled.div`
  height: 379px;
  width: 503px;
  background: #e990f9;
  border-radius: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 77px;
  padding-bottom: 36px;
  box-sizing: border-box;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 116px);
`;

export const LoginButton = styled.button`
  width: 151px;
  height: 60px;
  border-radius: 36px;
  border: solid 3px #ffffff;
  background: transparent;
  color: white;
  font-size: 20px
  font-weight: 500;
`;