import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';

export const FormBox = styled.div`
  height: 379px;
  width: 503px;
  background: #7ed321;
  border-radius: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 100px 90px 47px 90px;
  box-sizing: border-box;
  position: relative;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 116px);
`;

export const SaveButton = styled.button`
  width: 100%;
  height: 42px;
  border-radius: 36px;
  border: solid 3px #ffffff;
  background: transparent;
  color: white;
  font-size: 12px
  font-weight: 500;
  outline: none;
`;

export const Cancel = styled.button`
  position: absolute;
  top: 24px;
  right: 27px;
  background: none;
  border: none;
  outline: none;
`;

export const DatePicker = styled(ReactDatePicker)`
  border: 1px solid #979797;
  height: 31px;
  color: #979797;
  border-radius: 11px;
  box-sizing: border-box;
  width: 236px;
  padding-left: 15px;
  outline: none;
`;

export const InputWithDescription = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const Description = styled.span`
  font-size: 18px;
`;

export const Input = styled.input`
  border: 1px solid #979797;
  height: 31px;
  color: #979797;
  border-radius: 11px;
  box-sizing: border-box;
  width: 236px;
  outline: none;
`;