import React, {useState} from 'react'
import {TextFieldCreate} from './Styled'
import {ButtonCreate} from './Styled'
import useForm from '../../hooks/useForm'
import { CreatePost } from '../../services/posts'
import { CircularProgress } from '@material-ui/core'


const CreatePostCard = () => {

  const[form, onChange, clear] = useForm({title:"", body:""})
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(form)
    CreatePost(form, clear, setIsLoading)
  }


  return (
    <form onSubmit={onSubmitForm}>
        <TextFieldCreate
          name={"title"}
          value={form.title}
          onChange={onChange}
          id="outlined-multiline-static"
          label={"Título"}
          variant={"outlined"}
          fullWidth
          required
        />
        <TextFieldCreate
          name={"body"}
          value={form.body}
          onChange={onChange}
          id={"outlined-multiline-static"}
          label={"Escreva seu Post"}
          multiline
          rows={4}
          variant={"outlined"}
          fullWidth
          required
        />
        <ButtonCreate 
        type={"submit"}
        variant={"contained"} 
        color={"primary"}
        fullWidth
        >
           {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Postar</>}
        </ButtonCreate>
    </form>
  );
}

export default CreatePostCard