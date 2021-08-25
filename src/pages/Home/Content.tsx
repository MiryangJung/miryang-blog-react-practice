import styled from '@emotion/styled';
import mq from '../../theme/mq';

const SmallCardInfo = [
    {
        title:'코드는 오픈',
        description:'코드는 Github에서 확인할 수 있습니다.',
        image:'/images/github.png'
    },
    {
        title:'배포 Deploy',
        description:'Netlify 이용 중입니다.',
        image:'/images/netlify.jpg'
    },
    {
        title:'React 프로젝트',
        description:'추후에 Next.js로 바꾸고 싶습니다.',
        image:'/images/react.jpg'
    }
]

const BigCardInfo = {
    title:'이 곳은 어디인가요?',
    description:`제 블로그 miryang.dev를 서버리스 리액트로 개발하고 있는 중입니다.
                    프론트엔드 개발을 시작한지 3개월정도 되어 모르는 게 많습니다.
                     이것저것 적용해보고 공부하기 위해 만들기 시작했습니다.`,
    image:'/images/home2.jpg'
}


const LongCardInfo = {
    title:'요즘에',
    description:`하이퍼레저 Aries 공부 중입니다.
                    정말 어렵습니다.
                    자료가 없어서 진입장벽도 높고, 개념 익히기도 쉽지 않아요.`,
    image:'/images/aries.png'
}

const MediumCardInfo = [
    {
        title:'헤드의 날씨 아이콘은',
        description:`위치 정보 기반으로 실제 날씨를 보여줍니다.
                        openweathermap API를 사용했습니다.`,
        image:'/images/sky.jpg'
    },
    {
        title:'여기에 쓰인 이미지들은',
        description:'Pexels를 이용했습니다.',
        image:'/images/hello.jpg'
    }
]


export default function Content(){
    return (
        <ContentContainer>
            <ContentWrap>
            {
                <BigCard>
                    {
                        BigCardInfo.image
                        && <img src={BigCardInfo.image} alt={BigCardInfo.image} />
                    }
                    <CardText>
                        <BigCardTitle>{BigCardInfo.title}</BigCardTitle>
                        <BigCardDescription>{BigCardInfo.description}</BigCardDescription>
                    </CardText>
                </BigCard>
            }

            {
                <LongCard>
                    <CardText>
                        <LongCardTitle>{LongCardInfo.title}</LongCardTitle>
                        <LongCardDescription>{LongCardInfo.description}</LongCardDescription>
                    </CardText>
                    {
                        LongCardInfo.image
                        && <img src={LongCardInfo.image} alt={LongCardInfo.image} />
                    }
                </LongCard>
            }
            </ContentWrap>

            <ContentWrap>
            {SmallCardInfo.map((card)=>(
                <SmallCard key={card.title}>
                    {
                        card.image
                        && <img src={card.image} alt={card.image} />
                    }
                    <CardText>
                        <SmallCardTitle>{card.title}</SmallCardTitle>
                        <SmallCardDescription>{card.description}</SmallCardDescription>
                    </CardText>
                </SmallCard>
            ))}
            </ContentWrap>
            <ContentWrap>
            {MediumCardInfo.map((card)=>(
                <MediumCard key={card.title}>
                    {
                        card.image
                        && <img src={card.image} alt={card.image} />
                    }
                    <CardText>
                        <MediumCardTitle>{card.title}</MediumCardTitle>
                        <MediumCardDescription>{card.description}</MediumCardDescription>
                    </CardText>
                </MediumCard>
            ))}
            </ContentWrap>
        </ContentContainer>
    )
}

const ContentContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ContentWrap= styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  justify-content: space-around;
  & > div{
    white-space: pre-line;
    margin: 10px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  }
`;

const BigCard = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 1;
  min-width: 300px;
  min-height: 200px;
  border-radius: 10px;
  padding: 10px;
  & > img{
    width: auto;
    height: 180px;
    border-radius: 10px;
    object-fit: cover;
  }
  ${mq()({
    flexFlow:['column nowrap','row nowrap'],
  })}
`;

const BigCardTitle = styled.span`
  font-weight: 800;
  font-size: 20px;
`;

const BigCardDescription = styled.span`
  font-weight: 200;
  font-size: 15px;
  color: var(--color-gray);
`;

const SmallCard = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 1;
  min-width: 230px;
  height: 100px;
  border-radius: 10px;
  padding: 10px;
  & > img{
    width: auto;
    height: 80px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const SmallCardTitle = styled.span`
  font-weight: 600;
  font-size: 15px;
`;

const SmallCardDescription = styled.span`
  font-weight: 200;
  font-size: 13px;
  color: var(--color-gray);
`;

const LongCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: space-around;
  min-width: 100px;
  min-height: 200px;
  border-radius: 10px;
  & > img{
    width: 70px;
    height: auto;
    border-radius: 10px;
    margin: 10px;
    object-fit: cover;
  }
  ${mq()({
    width:['100%','100px']
  })}
`;

const LongCardTitle = styled.span`
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 5px;
`;

const LongCardDescription = styled.span`
  font-weight: 200;
  font-size: 10px;
  color: var(--color-gray);
`;

const MediumCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  flex: 1;
  min-width: 350px;
  height: 200px;
  border-radius: 10px;
  & > img{
    width: auto;
    height: 100px;
    border-radius: 10px;
    margin: 10px;
    object-fit: cover;
  }
`;

const MediumCardTitle = styled.span`
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 5px;
  padding-left: 10px;
`;

const MediumCardDescription = styled.span`
  font-weight: 200;
  font-size: 10px;
  color: var(--color-gray);
  padding-left: 10px;
`;

const CardText = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  padding: 10px;
`;