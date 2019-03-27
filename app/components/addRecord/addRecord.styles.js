import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';

export const FormBox = styled.form`
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
  margin: auto;

  @media (max-width: 576px) {
    margin-top: 25px;
    padding: 48px 26px 28px 26px;
    border: 2px solid #ffffff;
    width: 300px;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  height: calc(100% - 116px);
`;

export const SaveButton = styled.button`
  width: 100%;
  height: 42px;
  border-radius: 36px;
  border: 3px solid #ffffff;
  background: transparent;
  color: white;
  font-size: 12px
  font-weight: 500;
  outline: none;
  cursor: pointer;

  &:hover {
    background: white;
    color: #7ed321;
  }

  @media (max-width: 576px) {
    margin-top: 25px;
    border: 2px solid #ffffff;
  }
`;

export const Cancel = styled.button`
  position: absolute;
  top: 24px;
  right: 27px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const DatePicker = styled(ReactDatePicker)`
  border: 1px solid #979797;
  height: 31px;
  color: #979797;
  border-radius: 11px;
  box-sizing: border-box;
  width: 244px;
  padding-left: 15px;
  outline: none;
  cursor: pointer;
`;

export const InputWithDescription = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const Description = styled.span`
  font-size: 18px;

  @media (max-width: 576px) {
    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  border: 1px solid #979797;
  height: 31px;
  color: #979797;
  border-radius: 11px;
  box-sizing: border-box;
  width: 236px;
  padding-left: 15px;
  outline: none;
  cursor: pointer;

  @media (max-width: 576px) {
    width: 100%;
  }
`;