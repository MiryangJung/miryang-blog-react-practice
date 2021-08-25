import styled from '@emotion/styled';
import Head from "../../components/Head/Head";

export default function Til(){
    return (
        <Container>
            <Head title={`HOME`}/>
            <span>개발 중입니다.</span>
            <a href="https://til.miryang.dev" target="_blank" rel="noreferrer" >
                원래 TIL
            </a>
        </Container>
    )
}

const Container = styled.section`
  flex: 1;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
`;