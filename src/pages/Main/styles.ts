import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100% - 76px);
  overflow: auto;
`;