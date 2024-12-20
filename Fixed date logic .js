import { addDays, isValid } from "date-fns";
import {subscriptionStartDate} from '../utils/unsub.js'

function calculateRenewalDate(subscriptionStartDate) {
  const startDate = subscriptionStartDate;
  if (!isValid(startDate)) {
    throw new Error("Invalid subscription start date");
  }

  const renewalDate = addDays(startDate, 30);

  return renewalDate;
}

try {
  const renewalDate = calculateRenewalDate(subscriptionStartDate);
  console.log("Next renewal date:", renewalDate);
} catch (error) {
  console.error("Error calculating renewal date:", error.message);
}
