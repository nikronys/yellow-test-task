import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
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
  size: 14px;
  color: #979797;
  margin-bottom: 50px;
`;

export const TitleAndDescription = styled.div`
  margin: 85px auto 0 auto;
  max-width: 600px;
`;