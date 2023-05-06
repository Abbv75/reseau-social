import React, { useState } from 'react'
// import { Form } from 'react-router-dom'
import {Button, Form} from "react-bootstrap"
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    nom:"",
    prenom:"",
    email:"",
    motDePasse:"",
    bio:""
  });
  const [error, setError] = useState(null);

  const handleSubmit = (event) =>{
    event.preventDefault();
    const registrationForm = event.currentTarget;
    if(registrationForm.checkValidity() === false){
      event.stopPropagation();
    }

    setValidated(true);

    const data = {
      nom : form.nom,
      prenom : form.prenom,
      email : form.email,
      motDePasse : form.motDePasse,
      bio : form.bio
    }
    console.log(data);
  }

  return (
    <div>
      <Form
        id='registration-form'
        className='border p-4 rounded' 
        onSubmit={handleSubmit} 
      >
        <Form.Group
          className="mb-3"
        >
          <Form.Label>Nom</Form.Label>
          <Form.Control
            required
            type='text'
            value={form.nom}
            onChange={(e)=> setForm({
              ...form,
              nom:e.target.value
            })}
            placeholder='Saisissez votre nom'
          />
          <Form.Control.Feedback type='invalid'>
              Ce champ est obligatoir
          </Form.Control.Feedback> 
        </Form.Group>
        
        <Form.Group
          className="mb-3"
        >
          <Form.Label>Prenom</Form.Label>
          <Form.Control
            required
            type='text'
            value={form.prenom}
            onChange={(e)=> setForm({
              ...form,
              prenom:e.target.value
            })}
            placeholder='Saisissez votre prenom'
          />
          <Form.Control.Feedback type='invalid'>
              Ce champ est obligatoir
          </Form.Control.Feedback> 
        </Form.Group>
        
        <Form.Group
          className="mb-3"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type='email'
            value={form.email}
            onChange={(e)=> setForm({
              ...form,
              email:e.target.value
            })}
            placeholder='Saisissez votre email'
          />
          <Form.Control.Feedback type='invalid'>
              Ce champ est obligatoir
          </Form.Control.Feedback> 
        </Form.Group>
        
        <Form.Group
          className="mb-3"
        >
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            required
            type='password'
            value={form.motDePasse}
            onChange={(e)=> setForm({
              ...form,
              motDePasse:e.target.value
            })}
            placeholder='Saisissez votre mot de passe'
          />
          <Form.Control.Feedback type='invalid'>
              Ce champ est obligatoir
          </Form.Control.Feedback> 
        </Form.Group>
        
        <Form.Group
          className="mb-3"
        >
          <Form.Label>Bio</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            value={form.bio}
            onChange={(e)=> setForm({
              ...form,
              bio:e.target.value
            })}
            placeholder='Saisissez votre biographie'
          />
          <Form.Control.Feedback type='invalid'>
              Ce champ est obligatoir
          </Form.Control.Feedback> 
        </Form.Group>
        <div className='text-content text-danger'>
          {error && <p>{error}</p>}
        </div>
        <Button variant='primary' type='submit'>
          Valider
        </Button>
      </Form>
    </div>
  )
}
