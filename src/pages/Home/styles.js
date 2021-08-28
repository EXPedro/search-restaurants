import styled from 'styled-components';

export const Wrapper =  styled.div`
    display: flex;
    flex-direction: row;
`;

export const Container = styled.aside`
    background-color:  ${(props) => props.theme.colors.background};
    width: 300px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    padding: 16px;
`;

export const Logo = styled.img`
    margin-bottom: 15px;
    width: auto;
    height: 20vh;
`;

export const Map =  styled.div`
    background-color: ${(props) => props.theme.colors.background};
    width: 700px;
    margin-left: 8px;
`;

