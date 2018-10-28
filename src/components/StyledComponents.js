import styled from 'styled-components';
import { Colors } from 'variables';
import { media } from 'helpers/media-query';

export const Header = styled.div`
  padding: 2vh;
  ${media.phone`
    padding: 2vh 16px;
    background: ${Colors.red};
  `};
`;
export const MainContainer = styled.div`
  padding: 20vh 32vw;
  ${media.phone`
    padding: 20vh 16px;
    background: ${Colors.red};
  `};
`;
