// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { EllipsisVertical, UserIcon } from "lucide-react";
// // import { getAllUsers } from "@/services/actions/user-actions";
// import { User } from "@prisma/client";

// async function ListUsers() {
//   // const users : User[] = await getAllUsers()

//   return (
//     <div className="max-w-2xl mx-auto">
//       <div className="p-4 max-w-md md:min-w-[360px] bg-white rounded-lg border shadow-md sm:py-6 dark:bg-gray-800 dark:border-gray-700">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
//             Usuários recentes
//           </h3>
//           <Link
//             href=""
//             className="text-xs font-medium text-blue-600 hover:underline dark:text-blue-500"
//           >
//             Ver todos
//           </Link>
//         </div>
//         <div className="flow-root">
//           <ul className="divide-y divide-gray-200 dark:divide-gray-700">
//             {users.map((user) => (
//               <li className="py-3 sm:py-4" key={user.id}>
//                 <div className="flex items-center space-x-4">
//                   <div className="flex-shrink-0">
//                     {/* <Image className="w-8 h-8  rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" width={100} height={100} alt="Neil image"/> */}
//                     <UserIcon className="bg-muted w-10 h-10 rounded-full p-2" />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
//                       {user.name}
//                     </p>
//                     <p className="text-sm text-gray-500 truncate dark:text-gray-400">
//                       {user.email}
//                     </p>
//                   </div>
//                   <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white cursor-pointer">
//                     <EllipsisVertical />
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ListUsers;
