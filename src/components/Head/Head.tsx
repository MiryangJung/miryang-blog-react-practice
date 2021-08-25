import styled from '@emotion/styled';
import Weather from "./Weather";
import Title from "./Title";


export default function Head({title}:{title:string}){
    return (
        <HeadWrap>
            <Weather />
            <Title title={title} />
        </HeadWrap>
    )
}

const HeadWrap = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;