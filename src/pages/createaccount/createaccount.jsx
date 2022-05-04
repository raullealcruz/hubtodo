import React from 'react';
import './createaccount.css';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaArrowLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

class iconos extends CreateAccount {
  render() {
    return <FaArrowLeft />
    return <FaUser />
  }
}



function CreateAccount() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(event) {
    console.log(event);
  }

  return (
    <>
      <main className='main-create'>

        <section className='container mt-5 d-flex justify-content-left'>
          <h1 className='fw-bold'>
            <div className="flecha"><span><a className="flecha" href="/"><FaArrowLeft/></a></span></div>
            Crea tu cuenta
          </h1>
        </section>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='row g-1  w-100 p-2'
          noValidate>
          <div className='mb-3'>
            <label className='form-label fs-7'>Nombre</label>

           <input
              type='nombre'
              className='form-control'
              autoComplete='off'

              {...register('nombre', {
                required: {
                  value: true,
                  message: 'El campo es requerido',

                },
                pattern: {
                  value: /^[A-Z0-9._%+-]\$/i,
                  message: 'El formato no es correcto',
                },

              })}
            />
            {errors.nombre && (
              <span className='invalid'>{errors.nombre.message}</span>
            )}
          </div>
          <div className='mb-3'>
            <label className='form-label fs-7'>Apellidos</label>
            <input
                type='apellidos'
                className='form-control'
                autoComplete='off'
                {...register('apellidos', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]\$/i,
                    message: 'El formato no es correcto',
                  },
                })}
            />
            {errors.apellidos && (
                <span className='invalid'>{errors.apellidos.message}</span>
            )}
          </div>
          <div className='mb-3'>
            <label className='form-label fs-7'>Email address</label>
            <input
                type='email'
                className='form-control'
                autoComplete='off'
                {...register('email', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'El formato no es correcto',
                  },
                })}
            />
            {errors.email && (
                <span className='invalid'>{errors.email.message}</span>
            )}
          </div>
          <div class='mb-3'>
            <label className='form-label fs-7'>Password</label>
            <input
              type='password'
              className='form-control '
              {...register('password', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
                minLength: {
                  value: 6,
                  message: 'La contraseña debe tener al menos 6 carecteres',
                },
              })}
            />
            {errors.password && (
              <span className='invalid'>{errors.password.message}</span>
            )}
          </div>
          <button type='submit' className='button-register'>
            Finalizar registro
          </button>
          <button type='submit' class='button-cancel'>
            Cancelar
          </button>

        </form>
        <div className="go-login">
          <p> ¿Ya tienes una cuenta? <span className="regreso"><a href="LoGin">Inicia sesión</a></span></p>
        </div>
      </main>
    </>
  );
}

export default CreateAccount;
