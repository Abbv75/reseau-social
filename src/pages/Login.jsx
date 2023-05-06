import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

export default function Login() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 d-flex align-items-center'>
                <div className='content text-center px-4'>
                    <h1 className='text-primary'>Bienvenue sur Kabako!</h1>
                    <p className='content'>
                        Connectez vous maintenant et commencez a profiter !
                        <br />
                        Ou si vous n'avez pas de compte, veuillez vous {" "} 
                        <Link to="/register/">connecter</Link>.
                    </p>
                </div>
            </div>
            <div className='col-md-6 p-5'>
                <LoginForm/>
            </div>
        </div>
    </div>
  )
}
