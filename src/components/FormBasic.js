import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form'
// import { Container } from './styles';

const FormBasic = () => {
  const { register, handleSubmit } = useForm()

 const customSubmit = (data) => {
    console.log(data)
  }

  return (
    
    <Fragment>
      <h2>Form Validation Basic</h2>

      <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
            <div className='form-control'>
                <label>Name</label>
                <input type="text" {...register('name')} />
            </div>
            <div className='form-control'>
                <label>Age</label>
                <input type="number" {...register('age')} />
            </div>
            <div className='form-control'>
                <label>Country</label>
                <input type="text" {...register('country')} />
            </div>
            <button type='submit'>Send</button>
        </form>
    </Fragment>
  )
}

export default FormBasic;