// Exercise #2: Promotion Conditions

// Start coding here
// John
let lastMonthPaid = 4001;
let memberLevel = "Gold"

let lastMonthPaidMoreThan4000 = lastMonthPaid > 4000;
let isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = memberLevel == "Platinum";
// console.log(lastMonthPaidMoreThan4000);

let hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent) || isPlatinum;

console.log(hasPromotion);
