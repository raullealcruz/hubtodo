import React from 'react';
import './LoGin.css';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

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
        <section className='container mt-5 d-flex justify-content-center'>
          <h1 className='fw-bold'>
            Hub<span>ToDo</span>
          </h1>
        </section>
        <article className='p-2'>
          <h5 className='mt-2 fw-bold'>Iniciar sesión</h5>
          <p>Bienvenido de vuelta, entra a tu cuenta</p>
        </article>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='row g-1  w-100 p-2'
          noValidate>
          <div className='mb-3'>
            <label className='form-label fs-6'>Email address</label>
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
            <label className='form-label fs-6'>Password</label>
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
          <div className='w-100 mb-5 d-flex justify-content-end'>
            <NavLink className='link-login' to='/'>
              ¿Olvidaste la contraseña?
            </NavLink>
          </div>
          <button type='submit' class='button-login'>
            Iniciar Sesión
          </button>
        </form>
      </main>
    </>
  );
}

export default CreateAccount;
