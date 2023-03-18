import React from 'react'
import { Link } from 'react-router-dom'
import RegistrationForm from '../components/RegistrationForm'

export default function Registration() {
  return (
    <div className='container'>
        <div className='row'>
        
            <div className="col-md-6 d-flex align-items-center">
                <div className="content text-center px-4">
                    <h1 className="text-primary">
                        Bienvenue a Kabako!
                    </h1>
                    <p className="content">
                        C'est un nouveau reseau social qui vous permet de partager vos connaissances et experiances avec vos amis.
                        Inscrivez vous maintenant et profitez.
                        <br/>
                        Ou si vous avez deja un compte, s'il vous plait <Link to="/login"> Connexion </Link>.
                    </p>
                </div>
            </div>

            <div className="col-md-6 p-5">
                <RegistrationForm/>
            </div>
        </div>
    </div>
  )
}
