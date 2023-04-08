// Row 1 Mock Data
export const mockIncomeData = {
  value: 5400,
  change: 14,
  target: 6000,
}

export const mockExpenseData = {
  value: 2100,
  change: -10,
  budget: 3000,
}

export const mockSavingsContributionData = {
  value: 500,
  target: 1500,
}

export const mockNetData = {
  value: mockIncomeData.value - (mockExpenseData.value + mockSavingsContributionData.value),
}



