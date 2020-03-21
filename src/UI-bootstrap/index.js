import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

// const Column = styled.div`
//   float: left;
//   width: 100%;
//   border: 1px solid pink;

//   @media only screen and (min-width: 768px) {
//     width: ${props => (props.span ? (props.span / 12) * 100 : 8.33)}%;
//   }
// `;

const Column = styled.div`
  float: left;
  border: 1px solid pink;
  margin: 0 -1px 0 -1px;
  ${({ xs }) => (xs ? `width: ${(xs / 12) * 100}%` : "width: 100%")}
  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && `width: ${(sm / 12) * 100}%`};
  }
  @media only screen and (min-width: 992px) {
    ${({ md }) => md && `width: ${(md / 12) * 100}%`};
  }
  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && `width: ${(lg / 12) * 100}%`};
  }
`;

//https://medium.com/styled-components/how-to-create-responsive-ui-with-styled-components-c6b71a3ce172

const App = () => {
  return (
    <Row>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(number => (
        <Column key={number} xs={12} sm={6} md={4} lg={3}>
          {number}
        </Column>
      ))}
    </Row>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
