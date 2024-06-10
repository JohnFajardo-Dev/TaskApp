import React from 'react'
import "./Tasks.css"
import NavBar from '../../modules/NavBar/NavBar'

import Task from '../../modules/Task/Task'

function Tasks() {
  return (
    <main>
        <NavBar/>
        <section className='tasks-cont'>
          <article className='day-target'>
            <h2>TODAY</h2>
            <Task title="Name" date="7:00 am - 8:00 am" color="yellow"/> 
            <Task title="Name" date="7:00 am - 8:00 am" color="black-blue"/> 
            <Task title="Name" date="7:00 am - 8:00 am" color="white-blue"/> 
            <Task title="Name" date="7:00 am - 8:00 am" color="black"/> 
            <Task title="Name" date="7:00 am - 8:00 am" color="red"/> 
          </article>
          <article className='day-target'>
            <h2>TODAY</h2>
            <Task title="Name" date="7:00 am - 8:00 am" color="black"/> 
            <Task title="Name" date="7:00 am - 8:00 am" color="black-blue"/> 
            <Task title="Name" date="7:00 am - 8:00 am" color="yellow"/> 
            <Task title="Name" date="7:00 am - 8:00 am" color="white-blue"/> 
          </article>
          <article className='day-target'>
            <h2>TODAY</h2>
            <Task title="Name" date="7:00 am - 8:00 am" color="black"/> 
            <Task title="Name" date="7:00 am - 8:00 am" color="red"/> 
            <Task title="Name" date="7:00 am - 8:00 am" color="white-blue"/> 
            <Task title="Name" date="7:00 am - 8:00 am" color="black-blue"/> 
            <Task title="Name" date="7:00 am - 8:00 am" color="yellow"/> 
          </article>
        </section>
    </main>
  )
}

export default Tasks