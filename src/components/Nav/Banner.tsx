import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {ReactComponent as WorkIcon} from "../../static/icons/work_white_24dp.svg";
import {useHistory} from "react-router-dom";

const BannerInfo = {
    title:"Open to Work!",
    describe:"이직에 긍정적입니다.",
    button:"Resume",
    path:"https://www.notion.so/miryang/Jung-Miryang-45d8573632d74e8587f853b4982bfd9a"
};

export default function Banner(){
    const history = useHistory();
    return (
        <BannerWrap>
            <BannerTextWrap>
                <BannerTitle>
                    {BannerInfo.title}
                </BannerTitle>
                <BannerDescribe>
                    {BannerInfo.describe}
                </BannerDescribe>
                <BannerButton href={BannerInfo.path} target="_blank">
                    {BannerInfo.button}
                </BannerButton>
            </BannerTextWrap>
            <WorkIcon css={bannerIcon}/>
        </BannerWrap>
    )
}

const BannerWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 200px;
  background-color: var(--color-primary);
  height: 100px;
  border-radius: 15px;
  padding: 10px;
`;

const BannerTextWrap = styled.div`
  display: flex;
  flex-flow: column;
`;

const BannerTitle = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  margin-bottom: 5px;
`;

const BannerDescribe = styled.span`
  font-size: 10px;
  color: var(--color-gray-lightest);
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
  fill: var(--color-primary-dark)
`;

