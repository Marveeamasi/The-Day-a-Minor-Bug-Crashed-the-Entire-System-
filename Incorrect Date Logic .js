import {subscriptionStartDate} from '../utils/unsub.js';

function calculateRenewalDate(subscriptionStartDate) {
  const startDate = subscriptionStartDate;
  
  const renewalDate = new Date(startDate + 30 * 24 * 60 * 60 * 1000);

  return renewalDate;
}

const renewalDate = calculateRenewalDate(subscriptionStartDate);
console.log("Next renewal date:", renewalDate);
