import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
`;

const Container = styled.div`
    height: 500px;
    width: 500px;
    background-color: aqua;
`;


function TelaInicial(props) {

    return (
        <Div>
            <Container>
                olá
                {props.nome}
            </Container>

        </Div>
    );
}

export default TelaInicial