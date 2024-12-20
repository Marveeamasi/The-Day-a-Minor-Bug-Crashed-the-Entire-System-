function calculateRenewalDate(subscriptionStartDate) {
  const startDate = new Date(subscriptionStartDate);
  
  const renewalDate = new Date(startDate.getTime() + 30 * 24 * 60 * 60 * 1000);

  return renewalDate;
}

const subscriptionStartDate = "2024-01-01";
const renewalDate = calculateRenewalDate(subscriptionStartDate);
console.log("Next renewal date:", renewalDate);
