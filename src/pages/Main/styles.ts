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

export const LoaderOverlay = styled.div`
  display: flex;

  position: absolute;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

export const Loader = styled.img`
  width: 300px;
  height: auto;

`;