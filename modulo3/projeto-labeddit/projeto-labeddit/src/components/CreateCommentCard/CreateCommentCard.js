import React from 'react'
import {TextFieldCreate} from './Styled'
import {ButtonCreate} from './Styled'


const CreatePostCard = () => {
  

  return (
    <div>
        <TextFieldCreate
          id="outlined-multiline-static"
          label="Adicionar Comentário"
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
          Responder
        </ButtonCreate>
    </div>
  );
}

export default CreatePostCard