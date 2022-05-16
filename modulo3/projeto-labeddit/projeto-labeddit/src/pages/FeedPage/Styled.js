import styled from "styled-components"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export const PostsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px;
`

export const TextFieldCreate = styled(TextField)`
    margin-bottom: 10px;
`

export const ButtonCreate = styled(Button)`
    margin-bottom: 30px;
`
