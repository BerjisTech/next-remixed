// import Events from '@/app/learn/_events'
// import Link from 'next/link'
// import React from 'react'

// export default async function () {
//     return (
//         <>
//             <div className='flex items-center justify-between flex-wrap'>
//                 <h1>Events</h1>
//                 <div className='flex items-center justify-between gap-3'>
//                     <div className='rounded-lg flex items-center justify-between border-1 border-solid border-slate-600 bg-white dark:bg-primary'>
//                         <span className='material-symbols-outlined'>add</span>
//                         <input type='search' placeholder='Search' className='p-2 outline-none focus:outline-none' />
//                     </div>
//                     <Link href="/admin/events/new" className='rounded-lg p-3 flex items-center justify-center gap-3 bg-primary hover:bg-primary-400 dark:bg-primary-800 text-white'>
//                         <span className='material-symbols-outlined'>add</span>
//                         <span>Add Event</span>
//                     </Link>
//                 </div>
//             </div>
//             <div>
//                 <h2>Ongoing Events</h2>
//                 <Events limit={4} offset={0} wrap={'wrap'} admin={true} />
//             </div>
//             <div>
//                 <h2>Upcoming Events</h2>
//                 <Events limit={8} offset={0} wrap={'wrap'} admin={true} />
//             </div>
//         </>
//     )
// }

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
