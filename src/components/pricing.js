import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pricing.css'; // Ensure this path is correct

const Pricing = () => {
  const [sortOrder, setSortOrder] = useState('price-low-to-high');
  const [priceFilter, setPriceFilter] = useState('all');
  const navigate = useNavigate();

  const pricingData = [
    {
      title: "Amateur Plan",
      price: 89.99,
      description: "Beginner Soccer Drills and Programs",
      features: [
        "Beginner Soccer Drills and Programs",
        "Bi-weekly Progress Tracking",
        "Performance Reports",
        "Monthly One-on-One Consultation",
        "One Selected Training Location",
        "Access to 5/10 of the Tournaments"
      ]
    },
    {
      title: "Pro Plan",
      price: 149.99,
      description: "Everything in the Amateur Plan",
      features: [
        "Everything in the Amateur Plan",
        "Advanced Soccer Drills with Messi",
        "Detailed Nutritional Plan with Ronaldo",
        "Weekly One-on-One Coaching",
        "Choice of any Pro Coach",
        "Access to all of the Tournaments"
      ]
    },
    {
      title: "Ultimate Plan",
      price: 199.99,
      description: "All features from Pro Plan plus more",
      features: [
        "Everything in the Pro Plan",
        "Unlimited Training Sessions",
        "Personalized Gear and Equipment",
        "Exclusive Training Camps",
        "VIP Access to Events",
        "24/7 Support"
      ]
    }
  ];

  const sortedPricingData = [...pricingData]
    .filter(plan => {
      if (priceFilter === 'all') return true;
      if (priceFilter === 'below-100') return plan.price < 100;
      if (priceFilter === 'above-100') return plan.price >= 100;
      return true; // Ensure a return value
    })
    .sort((a, b) => {
      if (sortOrder === 'price-low-to-high') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  const handleSubscribeClick = () => {
    navigate('/join');
  };

  return (
    <div className="pricing-page">
      <h1>Pricing Plans</h1>
      <div className="filter-container">
        <label htmlFor="price-filter">Filter By</label>
        <select id="price-filter" name="price-filter" value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
          <option value="all">All Prices</option>
          <option value="below-100">Price Below $100</option>
          <option value="above-100">Price Above $100</option>
        </select>
      </div>
      <div className="sort-container">
        <label htmlFor="sort">Sort By</label>
        <select id="sort" name="sort" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="price-low-to-high">Price Low to High</option>
          <option value="price-high-to-low">Price High to Low</option>
        </select>
      </div>
      <div className="plans-container">
        {sortedPricingData.map((plan, index) => (
          <div key={index} className={`plan ${plan.title.toLowerCase().replace(' ', '-')}-plan`}>
            <h2>{plan.title}</h2>
            <div className="price">
              <span>${plan.price.toFixed(2)}</span>
              <span>/month</span>
            </div>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button onClick={handleSubscribeClick}>Subscribe Now</button>
          </div>
        ))}
      </div>
      <div className="limited-time-offer">
        <p>LIMITED TIME OFFER</p>
        <p>$25 off the Pro Plan + Custom Backpack</p>
      </div>
    </div>
  );
};

export default Pricing;
