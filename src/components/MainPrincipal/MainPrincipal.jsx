import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainPrincipal.css';

function MainPrincipal() {
  return (
    <main className=' position-relative  main-screen'>
      <section className='container-sm h-75 d-flex flex-column justify-content-center align-items-center'>
        <img src={require(`../../assets/icon/logo.png`)} alt='Logo HubTodo' />
        <h1 className='fw-bold mt-2'>
          Hub<span>ToDo</span>
        </h1>
        <p className='text-center fs-6 fw-bolder w-75'>
          Gestiona cómoda y sencillamente tu jornada.
        </p>
      </section>
      <section className='container-buttons'>
        <div className='container d-flex justify-content-center align-items-center w-100 h-50'>
          <p className='fw-bold fs-5'>¿Qué deseas hacer?</p>
        </div>
        <div className='w-100 d-flex justify-content-evenly'>
          <ul className='link-main p-2 text-center'>
            <NavLink className='link' to='createaccount'>
              Registrate
            </NavLink>
          </ul>
          <ul className='link-main p-2 text-center'>
            <NavLink className='link' to='login'>
              Inicia sesión
            </NavLink>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default MainPrincipal;
