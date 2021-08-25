import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ProfileInfo = {
    picture: 'https://avatars.githubusercontent.com/u/48237511?v=4',
    koreaName: '정미량',
    englishName: 'MiryangJung'
};

export default function Profile(){
    return (
        <ProfileWrap>
            <img src={ProfileInfo.picture} css={profileImage} alt="profile"/>
            <span css={profileBigName}>{ProfileInfo.englishName}</span>
            <span css={profileSmallName}>{ProfileInfo.koreaName}</span>
        </ProfileWrap>
    )
}

const ProfileWrap = styled.section`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 180px;
  padding: 20px;
`;

const profileImage = css`
  border-radius: 50%;
  width: 50px;
`;

const profileBigName = css`
  font-weight: 500;
  font-size: 16px;
  margin: 10px 0;
`;

const profileSmallName = css`
  font-weight: 200;
  font-size: 13px;
  color: var(--color-gray);
`;