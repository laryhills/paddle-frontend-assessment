import styled from "styled-components";

export const ArrowDiv = styled.div`
  border: 3px solid var(--primary);
  cursor: pointer;

  svg {
    margin: 15px;
    fill: #ba55d3;
  }
  :hover {
    background: var(--primary);
  }

  :hover svg {
    fill: #ffffff;
  }
`;
