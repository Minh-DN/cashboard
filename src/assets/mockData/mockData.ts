/* Row 3 Mock Data */
export const mockAccountsBreakdownData = {
  keys: [
    'Cash',
    'Debit CommBank',
    'Debit St. George',
    'HECS Saving',
    'Japan Saving',
    'General Saving'
  ],
  data: [
    {
      'chartName:': 'Accounts Breakdown',
      'Cash': 85,
      'Debit CommBank': 150,
      'Debit St. George': 50,
      'HECS Saving': 2000,
      'Japan Saving': 1200,
      'General Saving': 7000,
    }
  ]
};

/* Row 2 Mock Data */
export interface ExpenseBreakdownData {
  category: string,
  amount: number,
}

export const mockExpenseBreakdownData = [
  {
    category: 'bills',
    amount: 814.98
  },
  {
    category: 'transport',
    amount: 128.64
  },
  {
    category: 'grocery',
    amount: 353.45
  },
  {
    category: 'household',
    amount: 93.14
  },
  {
    category: 'social',
    amount: 250
  },
  {
    category: 'clothes',
    amount: 52.5
  },
]

/* Row 1 Mock Data */
export const mockIncomeData = {
  amount: 5400,
  change: 14,
  target: 6000,
}

export const mockExpenseData = {
  amount: mockExpenseBreakdownData.reduce((acc, item) => acc + item.amount, 0),
  change: -10,
  budget: 3000,
}

export const mockSavingsContributionData = {
  amount: 500,
  target: 1500,
}

export const mockNetData = {
  amount: mockIncomeData.amount - (mockExpenseData.amount + mockSavingsContributionData.amount),
}







