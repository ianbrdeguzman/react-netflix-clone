import styled from 'styled-components';

export const VideoContainer = styled.div``;

export const VideoSize = styled.div`
    width: 100%;
`;

export const CroppingDiv = styled.div`
    overflow: hidden;
`;

export const DivToCrop = styled.div`
    overflow: hidden;
    margin-top: -52.5%;
    margin-bottom: -52.5%;
`;

export const PlayerWrapper = styled.div`
    position: relative;
    overflow: hidden;
    padding-top: 155%;
`;

export const VideoPlayer = styled.iframe`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`;
