import React, { Fragment, useEffect, useState  } from 'react';
import { useForm } from 'react-hook-form'
// import { Container } from './styles';

const FormBasic = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()

  // submir form
 const customSubmit = (data) => {
    console.log(data)
    alert("Validação bem sucedida!!")
  }

  // ler o que esta sendo digitado no campo
  const [colorInput, setColorInput] = useState('#fff7f7')
  useEffect( ()=> {
      let words = watch('teste')
      if(words === 'react'){setColorInput('#614ad3')}
  } )

  return (
    
    <Fragment>
      <h2>Form Validation Basic</h2>

      <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
            <div className='form-control'>
                <label>Name</label>
                <input type="text" {...register('name', {
                    required:true,
                     maxLength:10 
                })} />
                {errors.name?.type === 'required' && <small className='fail'>O campo nome é obrigatório</small>}
                {errors.name?.type === 'maxLength' && <small className='fail'>O número máximo de caracteres é 10</small>}
            </div>
            <div className='form-control'>
                <label>Age</label>
                <input type="number" {...register('age', {
                    required:true,
                    min:10,
                    max:100
                })} />
                {errors.age?.type === 'required' && <small className='fail'>O campo não pode ficar vazio</small>}
                {errors.age?.type === 'min' && <small className='fail'>A idade mínima é de 10 anos</small>}
                {errors.age?.type === 'max' && <small className='fail'>A idade máxima é de 100 anos</small>}
            </div>
            <div className='form-control'>
                <label>Country</label>
                <input type="text" {...register('country', {
                    required: {
                        value:true,
                        message:"Mensagem personalizada: insira dados"
                    }
                })} />
                {errors.country && <small className='fail'>{errors.country.message}</small>}
            </div>
            <div className='form-control'>
                 <input {...register('teste')} style={{ backgroundColor:colorInput }} />
             </div>  
            <button type='submit'>Send</button>
        </form>
    </Fragment>
  )
}

export default FormBasic;