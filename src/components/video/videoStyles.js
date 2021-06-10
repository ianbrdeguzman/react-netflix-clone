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
    margin-top: -50%;
    margin-bottom: -49%;
`;

export const PlayerWrapper = styled.div`
    position: relative;
    overflow: hidden;
    padding-top: 150%;
`;

export const VideoPlayer = styled.iframe`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`;
