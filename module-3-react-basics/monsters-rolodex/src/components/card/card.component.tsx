import React from 'react';

import { Monster } from '../../App';

import './card.styles.css';

type CardProps = {
  monster: Monster;
};

const Card = ({monster: { email, name, id}}: CardProps) => (
    <div className='card-container' key={id}>
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set1&size=180x180`}/>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
);

export default Card;