// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import FilterSelect from './_selectFilter';
// import TotalCard from './_totalCard';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
// interface FilterOption {
//   key: string;
//   value: string;
// }

// const getDOBReports = async (filters: any, setChartData: (data: any) => void, setTotalWithDOB: (total: number) => void, setTotalWithoutDOB: (total: number) => void, setLoading: (loading: boolean) => void) => {
//   try {
//     setLoading(true);
//     const response = await fetch(""); // TODO add proper endpoint
//     let data = await response.json();
//     data = applyFilters(data, filters);
//     const { groupedData, totalWithDOB, totalWithoutDOB } = processData(data, filters.groupBy);
//     setChartData(groupedData);
//     setTotalWithDOB(totalWithDOB);
//     setTotalWithoutDOB(totalWithoutDOB);
//   } catch (error) {
//     console.error('Error fetching DOB reports:', error);
//     return null;
//   } finally {
//     setLoading(false);
//   }
// };
// const applyFilters = (data: any, filters: any) => {
//   return data.filter((user: any) => {
//     let matches = true;
//     if (filters.accountType && user.accountType !== filters.accountType) {
//       matches = false;
//     }
//     if (
//       filters.membershipStatus &&
//       user.membershipStatus !== filters.membershipStatus
//     ) {
//       matches = false;
//     }
//     if (
//       filters.currentMembershipType &&
//       user.currentMembershipType !== filters.currentMembershipType
//     ) {
//       matches = false;
//     }
//     return matches;
//   });
// };
// const processData = (data: any, groupBy: any) => {
//   let totalWithDOB = 0;
//   let totalWithoutDOB = 0;
//   const groupedData: { [key: string]: number } = {};
//   data.forEach((user: any) => {
//     if (user.birthday && user.birthday !== '0000-00-00 00:00:00') {
//       totalWithDOB++;
//       const date = new Date(user.birthday);
//       let key;
//       if (groupBy === 'decade') {
//         const decade = Math.floor(date.getFullYear() / 10) * 10;
//         key = `${decade}s`;
//       } else {
//         key = date.getFullYear().toString();
//       }
//       groupedData[key] = (groupedData[key] || 0) + 1;
//     } else {
//       totalWithoutDOB++;
//     }
//   });
//   return { groupedData, totalWithDOB, totalWithoutDOB };
// }

// const DateOfBirths: React.FC = () => {
//   const [accountType, setAccountType] = useState<string>('');
//   const [membershipStatus, setMembershipStatus] = useState<string>('');
//   const [currentMembershipType, setCurrentMembershipType] = useState<string>('');
//   const [groupBy, setGroupBy] = useState<string>('year');
//   const [chartData, setChartData] = useState<any | null>(null);
//   const [totalWithDOB, setTotalWithDOB] = useState<number>(0);
//   const [totalWithoutDOB, setTotalWithoutDOB] = useState<number>(0);
//   const [loading, setLoading] = useState<boolean>(false);
//   const chartContainer = useRef<HTMLDivElement>(null);

//   const accountTypeFilter: FilterOption[] = [
//     { key: '', value: 'All' },
//     { key: '1', value: 'Translation agency/company' },
//     { key: '2', value: 'Freelancer (translator and/or interpreter)' },
//     { key: '3', value: 'Freelancer and outsourcer' },
//     { key: '4', value: 'Not specified' },
//     { key: '5', value: 'Student' },
//     { key: '6', value: 'End customer' }
//   ];

//   const membershipFilter: FilterOption[] = [
//     { key: '', value: 'All' },
//     { key: '0', value: 'Probation' },
//     { key: '1', value: 'Guest' },
//     { key: '2', value: 'Premium' },
//     { key: '3', value: 'Platinum' },
//   ];
//   const [formValues, setFormValues] = useState({
//     accountType: '',
//     membershipStatus: '',
//     currentMembershipType: '',
//     groupBy: 'year',
//   });

//   const onFilterChange = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setFormValues({
//       accountType: accountType,
//       membershipStatus: membershipStatus,
//       currentMembershipType: currentMembershipType,
//       groupBy: groupBy
//     });
//   };

//   useEffect(() => {
//     getDOBReports(formValues, setChartData, setTotalWithDOB, setTotalWithoutDOB, setLoading);
//   }, [formValues]);

//   return (
//     <div className="p-6 block w-full">
//       <h1 className="text-2xl font-bold mb-4">Date of Birth Reports</h1>
//       <form onSubmit={onFilterChange} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//         <FilterSelect
//           label="Account Type"
//           value={accountType}
//           onChange={setAccountType}
//           options={accountTypeFilter}
//         />
//         <FilterSelect
//           label="Membership Status"
//           value={membershipStatus}
//           onChange={setMembershipStatus}
//           options={[
//             { key: '', value: 'All' },
//             { key: 'member', value: 'Member' },
//             { key: 'past_member', value: 'Past Member' },
//             { key: 'never_member', value: 'Never Member' }
//           ]}
//         />
//         <FilterSelect
//           label="Current Membership Type"
//           value={currentMembershipType}
//           onChange={setCurrentMembershipType}
//           options={membershipFilter}
//         />
//         <FilterSelect
//           label="Group By"
//           value={groupBy}
//           onChange={setGroupBy}
//           options={[
//             { key: 'year', value: 'Year' },
//             { key: 'decade', value: 'Decade' }
//           ]}
//         />
//         <div className="md:col-span-4 text-right">
//           <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Apply Filters</button>
//         </div>
//       </form>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         {loading ? (
//           <>
//             <div className="block h-[100px] bg-gray-200 animate-pulse"></div>
//             <div className="block h-[100px] bg-gray-200 animate-pulse"></div>
//           </>
//         ) : (
//           <>
//             <TotalCard title="Users with Date of Birth" total={totalWithDOB} />
//             <TotalCard title="Users without Date of Birth" total={totalWithoutDOB} />
//           </>
//         )}
//       </div>
//       <div className="chart">
//         {loading ? (
//           <div className="block h-[300px] bg-gray-200 animate-pulse"></div>
//         ) : (
//           chartData && (
//             <Bar
//               options={{
//                 responsive: true,
//                 plugins: {
//                   legend: {
//                     position: 'top',
//                   },
//                   title: {
//                     display: true,
//                     text: 'Date of Birth Distribution',
//                   },
//                 },
//               }}
//               data={{
//                 labels: Object.keys(chartData),
//                 datasets: [
//                   {
//                     label: 'Users',
//                     data: Object.values(chartData),
//                     backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                     borderColor: 'rgba(75, 192, 192, 1)',
//                     borderWidth: 1,
//                   },
//                 ],
//               }}
//             />
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// export default DateOfBirths;

import React from "react";

const page = () => {
  return <div>Temporary Disabled chart js | react chart js 2</div>;
};

export default page;
