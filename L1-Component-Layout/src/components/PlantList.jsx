import React from 'react';
import PlanCard from './PlanCard';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    features: ['1 lorem ipsum', 'Lorem, ipsum dolor.', 'Monthly Updates'],
    highlight: false,
  },
  {
    name: 'Lorem Plus',
    price: '$32.00',
    features: ['1 lorem ipsum', 'Lorem, ipsum dolor.', 'Monthly Updates'],
    highlight: true,
  },
  {
    name: 'Lorem Pro',
    price: '$50.00',
    features: ['1 lorem ipsum', 'Lorem, ipsum dolor.', 'Monthly Updates'],
    highlight: false,
  },
];

const PlanList = () => {
  return (
    <div>
      {plans.map((plan, index) => (
        <PlanCard key={index} {...plan} />
      ))}
    </div>
  );
};

export default PlanList;
