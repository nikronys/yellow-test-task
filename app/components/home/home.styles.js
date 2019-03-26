import styled, {css} from 'styled-components';

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

  @media (max-width: 576px) {
    background: white;
  }
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
  border: 3px solid #ffffff;
  background: transparent;
  color: white;
  font-size: 20px
  font-weight: 500;
  outline: none;
  positivion: relative;
  cursor: pointer;

  &:hover {
    background: white;
    color: black;
  }

  @media (max-width: 576px) {
    color: #e990f9;
    border: 3px solid #e990f9;

    &:hover {
      background: #e990f9;
      color: white;
    }
  }
`;