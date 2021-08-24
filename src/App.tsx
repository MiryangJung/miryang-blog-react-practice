import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

function App() {
  return (
    <div className="App">
        <div css={stylea}>
            Some hotpink text.
        </div>
    </div>
  );
}

const stylea = css`
  color:red;
`;

export default App;
