import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {ReactComponent as GithubIcon} from "../../static/icons/github.svg";
import {ReactComponent as TwitterIcon} from "../../static/icons/twitter.svg";
import {ReactComponent as StackoverflowIcon} from "../../static/icons/stackoverflow.svg";

const SnsInfo = {
    github:"https://github.com/miryangjung",
    twitter:"https://twitter.com/MiryangJung",
    stackoverflow:"https://stackoverflow.com/users/11981439/miryangjung"
};

export default function Sns(){
    return (
        <SnsWrap>
            <a href={SnsInfo.github} target="_blank" rel="noreferrer" >
                <GithubIcon css={snsIcon} />
            </a>
            <a href={SnsInfo.twitter} target="_blank" rel="noreferrer" >
                <TwitterIcon css={snsIcon}/>
            </a>
            <a href={SnsInfo.stackoverflow} target="_blank" rel="noreferrer" >
                <StackoverflowIcon css={snsIcon}/>
            </a>
        </SnsWrap>
    )
}

const SnsWrap = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const snsIcon = css`
  width: 20px;
  height: auto;
  margin: 10px;
`;

