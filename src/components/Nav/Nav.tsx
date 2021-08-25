import styled from '@emotion/styled';
import Profile from "./Profile";
import Menu from "./Menu";
import Sns from "./Sns";
import Banner from "./Banner";
import mq from '../../theme/mq';

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
  border-right: var(--color-gray-lightest) 3px solid;

  ${mq()({
    width:['50px','220px'],
    minWidth:['50px','200px'],
    padding:['5px','20px']
  })}
`;
