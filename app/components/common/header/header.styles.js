import styled, {css} from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 116px;
  background: #7ed321;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;

  @media (max-width: 576px) {
    ${props => props.expandMenu && css`
      background: white;
    `}
    ${props => css`
      height: ${props.theme.header.heightMobile}
    `}
  }
`;

export const Link = styled.a`
  margin-left: 37px;
  cursor: pointer;

  @media (max-width: 576px) {
    margin-left: 18px;
  }
`;

export const Logo = styled.img`
  width: 147px;
  height: 56px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  margin-right: 46px;
  font-size: 18px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 4px;

  ${props => props.currentPath === props.href && css`
    border-bottom: 2px solid white;
  `}

  ${props => props.addMargin && css`
    margin-right: 59px;
  `}
`;

export const MenuButton = styled.button`
  background: none;
  outline: none;
  cursor: pointer;
  border: none;
  margin-right: 18px;
  cursor: pointer;
`;

export const Cancel = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 15px;
`;