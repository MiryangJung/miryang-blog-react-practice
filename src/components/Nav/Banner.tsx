import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {ReactComponent as WorkIcon} from "../../static/icons/work_white_24dp.svg";
import mq from '../../theme/mq';

const BannerInfo = {
    title:"Open to Work!",
    describe:"이직에 긍정적입니다.",
    button:"Resume",
    path:"https://www.notion.so/miryang/Jung-Miryang-45d8573632d74e8587f853b4982bfd9a"
};

export default function Banner(){
    return (
        <BannerContainer>
            <WorkIcon css={bannerIcon}/>
            <BannerTitle>
                {BannerInfo.title}
            </BannerTitle>
            <BannerDescribe>
                {BannerInfo.describe}
            </BannerDescribe>
            <BannerButton href={BannerInfo.path} target="_blank">
                {BannerInfo.button}
            </BannerButton>
        </BannerContainer>

    )
}

const BannerContainer = styled.div`
  display: flex;
  flex :1 ;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${mq()({
    display:['none','flex']
  })}
`;

const BannerTitle = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: var(--color-primary-dark);
  margin-bottom: 5px;
`;

const BannerDescribe = styled.span`
  font-size: 10px;
  margin-bottom: 15px;
`;

const BannerButton = styled.a`
  color: white;
  background-color: var(--color-primary-darkest);
  font-size: 13px;
  font-weight: 300;
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;

const bannerIcon = css`
  width: 35px;
  height: auto;
  fill: var(--color-primary-lighter)
`;

