import styled from '@emotion/styled';
import Head from "../components/Head/Head";

export default function Home(){
    return (
        <Container>
            <Head title={`HOME`}/>
        </Container>
    )
}

const Container = styled.section`
  flex: 1;
  height: 100%;
  padding: 10px;
`;