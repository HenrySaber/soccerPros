import React, { useState } from 'react';
import './reviews.css'; // Ensure this path is correct

import parent1Image from '../pictures/parent1.png';
import johnSmithImage from '../pictures/parent2.png';
import sarahLeeImage from '../pictures/parent3.png';

const reviewsData = {
  english: [
    {
      name: "Jane Doe",
      review: "SoccerPros has completely transformed my child's soccer journey. The supportive community is one of the best aspects of this program. My child has connected with so many like-minded individuals who are always there to motivate and encourage each other.",
      image: parent1Image  
    },
    {
      name: "John Smith",
      review: "The coaches at SoccerPros are truly exceptional. Their dedication to helping my child achieve their soccer goals is evident in every interaction. My child's personal coach, Mark, constantly checks in with him and provides the motivation needed to stay on track.",
      image: johnSmithImage
    },
    {
      name: "Sarah Lee",
      review: "The dietary advice from the nutritionists at SoccerPros has been a game-changer for my child. They feel healthier and more energetic than ever before. The personalized meal plans are tailored to my child's preferences and goals, making it easy to stick to a healthy diet.",
      image: sarahLeeImage
    }
  ],
  french: [
    {
      name: "Jane Doe",
      review: "SoccerPros a complètement transformé le parcours de football de mon enfant. La communauté solidaire est l'un des meilleurs aspects de ce programme. Mon enfant a rencontré tellement de personnes partageant les mêmes idées qui sont toujours là pour se motiver et s'encourager mutuellement.",
      image: parent1Image
    },
    {
      name: "John Smith",
      review: "Les entraîneurs de SoccerPros sont vraiment exceptionnels. Leur dévouement à aider mon enfant à atteindre ses objectifs de football est évident à chaque interaction. L'entraîneur personnel de mon enfant, Mark, le suit constamment et lui donne la motivation nécessaire pour rester sur la bonne voie.",
      image: johnSmithImage
    },
    {
      name: "Sarah Lee",
      review: "Les conseils diététiques des nutritionnistes de SoccerPros ont changé la donne pour mon enfant. Il se sent plus en forme et plus énergique que jamais. Les plans de repas personnalisés sont adaptés aux préférences et aux objectifs de mon enfant, ce qui facilite le maintien d'une alimentation saine.",
      image: sarahLeeImage
    }
  ]
};

const Reviews = () => {
  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'english' ? 'french' : 'english'));
  };

  const readReviews = () => {
    const reviewsText = reviewsData[language].map(review => review.review).join(' ');
    const utterance = new SpeechSynthesisUtterance(reviewsText);
    utterance.lang = language === 'english' ? 'en-US' : 'fr-FR';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="reviews-page">
      <div className="language-switch">
        <button onClick={toggleLanguage} aria-label={language === 'english' ? 'Switch to French' : 'Switch to English'}>
          {language === 'english' ? '🇫🇷' : '🇬🇧'}
        </button>
      </div>
      <div className="speaker-switch">
        <button onClick={readReviews} aria-label="Read reviews">
          🔊
        </button>
      </div>
      <h1>{language === 'english' ? 'Reviews from Parents' : 'Avis des Parents'}</h1>
      <div className="reviews-container">
        {reviewsData[language].map((review, index) => (
          <div key={index} className="review-card">
            <p>{review.review}</p>
            <div className="reviewer-info">
              <img src={review.image} alt={`${review.name}'s picture`} />
              <h3>{review.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
