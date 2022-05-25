import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { CreateComment } from '../../services/posts'
import {TextFieldCreate} from './Styled'
import {ButtonCreate} from './Styled'
import useForm from '../../hooks/useForm'
import { CircularProgress } from '@material-ui/core'


const CreateCommentCard = () => {

  const params = useParams()

  const [form, onChange, clear] = useForm({body:""})
  const [isLoading, setIsLoading] = useState(false)


  const onSubmitForm= (event) => {
    event.preventDefault()
    CreateComment(params.id, form, clear, setIsLoading)
  }
  
  return (
    <form onSubmit={onSubmitForm}>
        <TextFieldCreate
          name={"body"}
          value={form.body}
          onChange={onChange}
          id="outlined-multiline-static"
          label={"Adicionar Comentário"}
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          required
        />
        <ButtonCreate 
        type={"submit"}
        variant={"contained"} 
        color={"primary"}
        fullWidth
        >
         {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Responder</>}
        </ButtonCreate>
    </form>
  );
}

export default CreateCommentCard