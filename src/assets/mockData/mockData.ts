/* Row 3 Mock Data */
export const mockAccountsBreakdownData = {
  keys: [
    'Cash',
    'Debit',
    'Buffer Account',
    'HECS Saving',
    'Japan Saving',
    'General Saving'
  ],
  data: [
    {
      'chartName:': 'Accounts Breakdown',
      'Cash': 200,
      'Debit': 150,
      'Buffer Account': 1000,
      'HECS Saving': 2000,
      'Japan Saving': 1200,
      'General Saving': 7000,
    }
  ]
};

export const mockUpcomingSubscriptionsData = [
  {
    id: 1, 
    product: 'Health Insurance',
    date: '2023-05-08',
    amount: 99.88,
  },
  {
    id: 2, 
    product: 'Phone Plan',
    date: '2023-05-10',
    amount: 15,
  },
  {
    id: 3, 
    product: 'YouTube Premium',
    date: '2023-05-15',
    amount: 8.99,
  },
  {
    id: 4, 
    product: 'Netflix',
    date: '2023-05-15',
    amount: 8,
  },
  {
    id: 5, 
    product: 'Amazon Prime',
    date: '2023-05-24',
    amount: 6.99,
  },
]

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







