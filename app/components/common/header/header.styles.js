import styled, {css} from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 116px;
  background: #7ed321;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.a`
  margin-left: 37px;
  cursor: pointer;
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
`;

export const FilterButton = styled.button`
  background: none;
  outline: none;
  cursor: pointer;
  border: none;
  margin-right: 30px;
`;