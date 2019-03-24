import styled, {css} from 'styled-components';
import ReactDatePicker from 'react-datepicker';

export const DatePickersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eaeaea;
  height: 60px;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  height: calc(100% - 176px);

  ${props => props.loading && css`
    align-items: center;
  `}
`;

export const Text = styled.span`
  font-size: 15px;
  color: #979797;
  margin: 0 15px;
`;

export const DatePicker = styled(ReactDatePicker)`
  border: 1px solid #979797;
  width: 100px;
  height: 31px;
  color: #979797;
  border-radius: 11px;
  padding: 0 15px;
  box-sizing: border-box;
  outline: none;
`;

export const RunData = styled.ul`
  margin-left: 46px;
  float: right;
`;

export const RunList = styled.ul`
  margin-top: 53px;
`;

export const RunElement = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 80px;

  ${props => props.resetMargin && css`
    margin-bottom: 0;
  `}
`;

export const RunDataElement = styled.li`
  color: #979797;
  margin-top: 10px;

  ${props => props.resetMargin && css`
    margin-top: 0;
  `}
`;

export const AddButton = styled.button`
  background: none;
  border: none;
  position: fixed;
  bottom: 40px;
  right: 40px;
  outline: none;
`;

export const Bold = styled.b`
  font-weight: bold;
  color: black;
`;

export const EmptyJogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmptyJogsTitle = styled.div`
  font-size: 24px;
  color: #979797;
  margin-top: 47px;
  margin-bottom: 150px;
`;

export const EmptyJogsButton = styled.button`
  width: 249px;
  height: 60px;
  border-radius: 36px;
  border: solid 3px #e990f9;
  background: none;
  font-size: 18px;
  color: #e990f9;
  font-weight: bold;
  outline: none;
`;