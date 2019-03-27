import styled, {css} from 'styled-components';

export const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 30px;
  color: black;

  ${props => props.theme.common.green && css`
    &:hover {
      color: ${props.theme.common.green};
    }
  `}
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  width: 100%;
  height: 100%;
`;