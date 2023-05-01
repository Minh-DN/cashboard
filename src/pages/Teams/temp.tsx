// import PieChart from "../../components/PieChart";

// const mockYTDLineChartData = [
//   {
//     id: "income",
//     data: [
//       {
//         x: "Jan",
//         y: 5100, 
//       },
//       {
//         x: "Feb",
//         y: 5300, 
//       },
//       {
//         x: "Mar",
//         y: 5600, 
//       },
//       {
//         x: "Apr",
//         y: 5400, 
//       },
//     ]
//   },
//   {
//     id: "expense",
//     data: [
//       {
//         x: "Jan",
//         y: 3000, 
//       },
//       {
//         x: "Feb",
//         y: 1900, 
//       },
//       {
//         x: "Mar",
//         y: 2400, 
//       },
//       {
//         x: "Apr",
//         y: 2100, 
//       },
//     ]
//   },
//   {
//     id: "savings contribution",
//     data: [
//       {
//         x: "Jan",
//         y: 1000, 
//       },
//       {
//         x: "Feb",
//         y: 1300, 
//       },
//       {
//         x: "Mar",
//         y: 1500, 
//       },
//       {
//         x: "Apr",
//         y: 500, 
//       },
//     ]
//   }
// ]

// const data = {
//   nodes: [
//     { id: 'Salary' },
//     { id: 'Other Income' },
//     { id: 'Income' },
//     { id: 'Expense' },
//     { id: 'Bills' },
//     { id: 'Transportation' },
//     { id: 'Grocery' },
//     { id: 'Household' },
//     { id: 'Social' },
//     { id: 'Clothes' },
//     { id: 'Subscription' },
//     { id: 'Rent' },
//     { id: 'Health Insurance' },
//     { id: 'Phone' },
//     { id: 'Opal' },
//     { id: 'Uber' },
//     { id: 'Coles' },
//     { id: 'Woolworths' },
//     { id: 'YouTube Premium' },
//     { id: 'Savings' },
//   ],
//   links: [
//     { source: 'Salary', target: 'Income', value: 5000 },
//     { source: 'Other Income', target: 'Income', value: 400 },
//     { source: 'Income', target: 'Expense', value: 995.08 },
//     { source: 'Expense', target: 'Bills', value: 814.98 },
//     { source: 'Bills', target: 'Rent', value: 700 },
//     { source: 'Bills', target: 'Health Insurance', value: 99.98 },
//     { source: 'Bills', target: 'Phone', value: 15 },
//     { source: 'Expense', target: 'Transportation', value: 128.64 },
//     { source: 'Transportation', target: 'Opal', value: 117.68 },
//     { source: 'Transportation', target: 'Uber', value: 10.96 },
//     { source: 'Expense', target: 'Grocery', value: 353.45 },
//     { source: 'Grocery', target: 'Coles', value: 298.5 },
//     { source: 'Grocery', target: 'Woolworths', value: 54.95 },
//     { source: 'Expense', target: 'Household', value: 93.14 },
//     { source: 'Expense', target: 'Social', value: 250 },
//     { source: 'Expense', target: 'Clothes', value: 52.5 },
//     { source: 'Expense', target: 'Subscription', value: 8.99 },
//     { source: 'Subscription', target: 'YouTube Premium', value: 8.99 },
//     { source: 'Income', target: 'Savings', value: 500 },
//   ],
// };


// const TeamsPage = () => {
//   return (
//     <div style={{ height: '700px', width: '1300px' }}>
//       <ResponsiveSankey
//         data={data}
//         margin={{ top: 40, right: 250, bottom: 40, left: 50 }}
//         align="justify"
//         colors={{ scheme: 'category10' }}
//         nodeOpacity={1}
//         nodeHoverOthersOpacity={0.35}
//         nodeThickness={18}
//         nodeSpacing={24}
//         nodeBorderWidth={0}
//         sort='input'
//         nodeBorderColor={{
//             from: 'color',
//             modifiers: [
//                 [
//                     'darker',
//                     0.8
//                 ]
//             ]
//         }}
//         nodeBorderRadius={3}
//         linkOpacity={0.5}
//         linkHoverOthersOpacity={0.1}
//         linkContract={3}
//         enableLinkGradient={true}
//         labelPosition="outside"
//         labelOrientation="horizontal"
//         labelPadding={16}
//         labelTextColor={{
//             from: 'color',
//             modifiers: [
//                 [
//                     'darker',
//                     1
//                 ]
//             ]
//         }}
//         legends={[
//             {
//                 anchor: 'bottom-right',
//                 direction: 'column',
//                 translateX: 200,
//                 itemWidth: 100,
//                 itemHeight: 14,
//                 itemDirection: 'right-to-left',
//                 itemsSpacing: 2,
//                 itemTextColor: '#999',
//                 symbolSize: 14,
//                 effects: [
//                     {
//                         on: 'hover',
//                         style: {
//                             itemTextColor: '#000'
//                         }
//                     }
//                 ]
//             }
//         ]}
//     />
//     </div>
//   )
// }

// export default TeamsPage;
