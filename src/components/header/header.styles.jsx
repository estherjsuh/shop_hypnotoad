import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
height: 160px;
width: 90%;
display: flex;
justify-content: space-between;
margin-bottom: 30px;`;

export const LogoContainer = styled(Link)`
height: 100%;
width: 20px;
padding: 35px;
`;

export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`;


export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;

