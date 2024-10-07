// import React from 'react';
// import { Link } from 'react-router-dom';

// const SimpleNavbar = () => {
//   return (
//     <nav className="bg-gray-900 shadow-md">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <Link to="/" className="text-white text-2xl font-bold">
//           Logo
//         </Link>
//         <ul className="flex space-x-6">
//           <li>
//             <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="text-gray-300 hover:text-white transition duration-300">
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link to="/recipes" className="text-gray-300 hover:text-white transition duration-300">
//               Recipes
//             </Link>
//           </li>
//           <li>
//             <Link to="/blog" className="text-gray-300 hover:text-white transition duration-300">
//               Blog
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default SimpleNavbar;

import React from 'react';
import { NavLink } from 'react-router-dom';

const CookingNavbar = () => {
  return (
    <nav className="bg-green-600 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <NavLink to="/" className="text-white text-2xl font-bold">
         Ungal Unavu...
        </NavLink>
        
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-white font-semibold' : 'text-green-200 hover:text-white transition duration-300'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-white font-semibold' : 'text-green-200 hover:text-white transition duration-300'
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive ? 'text-white font-semibold' : 'text-green-200 hover:text-white transition duration-300'
              }
            >
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? 'text-white font-semibold' : 'text-green-200 hover:text-white transition duration-300'
              }
            >
              Blog
            </NavLink>
          </li>
        
        </ul>
      </div>
    </nav>
  );
};

export default CookingNavbar;


