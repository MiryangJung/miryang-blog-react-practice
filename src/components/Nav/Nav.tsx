import styled from '@emotion/styled';
import Profile from "./Profile";
import Menu from "./Menu";
import Sns from "./Sns";
import Banner from "./Banner";

export default function Nav(){
    return (
        <NavWrap>
            <Profile />
            <Menu />
            <Banner />
            <Sns />
        </NavWrap>
    )
}

const NavWrap = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  min-width: 220px;
  padding: 20px;
  border-right: var(--color-gray-lightest) 3px solid;
`;
