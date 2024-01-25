import React from 'react'

import './Style.css';

const projects = [
  {
    id: 1,
    title: 'Mariage',
    description: 'Un instant éternel, deux cœurs unis, un oui  gravé dans le temps',
    imageUrl: 'https://i.pinimg.com/564x/62/bc/35/62bc35aa9ce6ef4c137952dbd6d85e71.jpg',
  },
  {
    id: 2,
    title: 'Bébé',
    description: 'Pureté en un regard, sourire dinnocence.',
    imageUrl: 'https://i.pinimg.com/564x/06/d3/ac/06d3ac2593ef29898497dd2a07046539.jpg',
  },
  {
    id: 2,
    title: 'Food ',
    description: 'Douce tentation en une image, la délicatesse dun cake qui invite à la gourmandise',
    imageUrl: 'https://i.pinimg.com/564x/2f/5b/14/2f5b14561328fbc7a2f2df2cf587be7d.jpg',
  },
  {
    id: 2,
    title: 'Portrait',
    description: 'Élégance saisissante, la féminité capturée en un regard',
    imageUrl: 'https://i.pinimg.com/564x/21/2a/16/212a1665dd969f1bdc26831fbba051b6.jpg',
  },

  {
    id: 2,
    title: 'Portrait',
    description: 'Esprit espiègle, sourire pétillant Un jeune homme capturé dans linstant joyeux de lenfance.',
    imageUrl: 'https://i.pinimg.com/564x/15/e9/89/15e98995ea6b704d7884acb726352628.jpg',
  },
  {
    id: 2,
    title: ' Produit Cosmétique',
    description: 'Éclat pur, beauté simple',
    imageUrl: 'https://i.pinimg.com/564x/13/72/aa/1372aa9bb89d6b4277a0efdae72fd7d1.jpg',
  },

];

const Portfolio = () => {
  return (
    <div>
      <h1>loup production</h1>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <img src={project.imageUrl} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;