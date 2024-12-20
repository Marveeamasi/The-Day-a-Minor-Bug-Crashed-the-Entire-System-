const { addDays, isValid } = require("date-fns");

function calculateRenewalDate(subscriptionStartDate) {
  const startDate = new Date(subscriptionStartDate);
  if (!isValid(startDate)) {
    throw new Error("Invalid subscription start date");
  }

  const renewalDate = addDays(startDate, 30);

  return renewalDate;
}

try {
  const subscriptionStartDate = "2024-01-01";
  const renewalDate = calculateRenewalDate(subscriptionStartDate);
  console.log("Next renewal date:", renewalDate);
} catch (error) {
  console.error("Error calculating renewal date:", error.message);
}
