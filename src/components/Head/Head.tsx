import styled from '@emotion/styled';
import Weather from "./Weather";


export default function Head(){
    return (
        <HeadWrap>
            <Weather />
        </HeadWrap>
    )
}

const HeadWrap = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;