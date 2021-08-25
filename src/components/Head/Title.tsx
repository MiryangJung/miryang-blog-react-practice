import styled from '@emotion/styled';
import React from 'react';

export default function Title({title}:{ title:string }){
    return (
        <>
            <h1>
                {title}
            </h1>
        </>
    )
}

const WeatherIcon = styled.img`
  width: auto;
  height: 80px;
`;