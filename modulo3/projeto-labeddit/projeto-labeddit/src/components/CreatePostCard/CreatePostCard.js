import React from 'react'
import {TextFieldCreate} from './Styled'
import {ButtonCreate} from './Styled'


const CreatePostCard = () => {
  

  return (
    <form>
        <TextFieldCreate
          id="outlined-multiline-static"
          label="Título"
          variant="outlined"
          fullWidth
        />
        <TextFieldCreate
          id="outlined-multiline-static"
          label="Escreva seu Post"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
        />
        <ButtonCreate 
        type={"submit"}
        variant={"contained"} 
        color={"primary"}
        fullWidth
        >
          Postar
        </ButtonCreate>
    </form>
  );
}

export default CreatePostCard