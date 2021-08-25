import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {useHistory} from "react-router-dom";
import {ReactComponent as HomeIcon} from "../../static/icons/home_black_24dp.svg";
import {ReactComponent as BlogIcon} from "../../static/icons/note_alt_black_24dp.svg";
import {ReactComponent as DesIcon} from "../../static/icons/description_black_24dp.svg";
import mq from '../../theme/mq';

interface MenuProps {
    title: string
    Svg : any
    path: string
}

const MenuInfo:MenuProps[] = [
    {
        title: 'Home',
        Svg: HomeIcon,
        path: '/'
    },
    {
        title: 'Blog',
        Svg: BlogIcon,
        path: '/blog'
    },
    {
        title: 'TIL',
        Svg: DesIcon,
        path: 'https://til.miryang.dev'
    },
];

function MenuItem({title, Svg, path}:MenuProps){
    const history = useHistory();

    return (
        <MenuItemWrap onClick={()=>history.push(path)}>
            <span>{title}</span>
            <Svg alt={title} css={menuItemIcon}/>
        </MenuItemWrap>
    )
}

export default function Menu(){

    return (
        <MenuWrap>
            {MenuInfo.map((props, idx)=>(
                <MenuItem key={idx} {...props}></MenuItem>
            ))}
        </MenuWrap>
    )
}

const MenuWrap = styled.section`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding-left: 10px;
`;

const MenuItemWrap = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-weight: 400;
  cursor: pointer;
  margin: 5px 0;
  &:hover{
    background-color: var(--color-gray-lightest);
  }
  & > span{
    ${mq()({
      display:['none','block'],
      padding:['0', '10px']
    })}
  }
`;

const menuItemIcon = css`
  fill: var(--color-gray)
`;