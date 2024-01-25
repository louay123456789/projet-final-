
import React, { useState } from 'react';
import axios from 'axios';
import './Style.css';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    weddingDate: '',
    instagram: '',
    weddingLocation: '',
    howDidYouFindMe: '',
    questions: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await axios.post('https://formspree.io/loupproduction7050@gmail.com', formData);
      console.log('Formulaire soumis avec succès!');
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
    }
  };

  return (
    <div>
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Prénom :</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />

        <label htmlFor="lastName">Nom :</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />

        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="phone">Téléphone :</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

        <label htmlFor="weddingDate">Date du mariage ou de la séance :</label>
        <input type="date" id="weddingDate" name="weddingDate" value={formData.weddingDate} onChange={handleChange} required />

        <label htmlFor="instagram">Instagram :</label>
        <input type="text" id="instagram" name="instagram" value={formData.instagram} onChange={handleChange} />

        <label htmlFor="weddingLocation">Lieu du mariage :</label>
        <input type="text" id="weddingLocation" name="weddingLocation" value={formData.weddingLocation} onChange={handleChange} />

        <label htmlFor="howDidYouFindMe">Comment m'avez-vous trouvé ? :</label>
        <input type="text" id="howDidYouFindMe" name="howDidYouFindMe" value={formData.howDidYouFindMe} onChange={handleChange} />

        <label htmlFor="questions">Des questions ? :</label>
        <textarea id="questions" name="questions" value={formData.questions} onChange={handleChange}></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactPage;
