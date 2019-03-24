import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100% - 116px);
  padding: 0 20px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #7ed321;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  line-height: 24px;
  font-size: 19px;
  color: #979797;
  line-height: 1.71;
  margin-bottom: 50px;
`;

export const TitleAndDescription = styled.div`
  margin: 85px auto 0 auto;
  max-width: 600px;
`;