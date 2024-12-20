it("should calculate renewal date correctly", () => {
  const startDate = new Date("2024-01-01");
  const renewalDate = addDays(startDate, 30);
  expect(renewalDate).toEqual(new Date("2024-01-31"));
});
