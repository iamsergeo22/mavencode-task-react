import { Link, useNavigate } from 'react-router-dom';
import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';
import DarkModeSwitcher from './DarkModeSwitcher';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from '../../redux/action';

const Header = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated,
  );

  // Handle logout and reload page
  const handleLogout = () => {
    dispatch(logoutRequest()); // Dispatch logout action
    navigate('/auth/signin'); // Navigate to the sign-in page
  };


  const tabs = [
    {
      key: 'home',
      label: 'Home',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      key: 'interface',
      label: 'Interface',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
          />
        </svg>
      ),
    },
    {
      key: 'components',
      label: 'Components',
      icon: <></>,
    },
    {
      key: 'pages',
      label: 'Pages',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      ),
    },
    {
      key: 'forms',
      label: 'Forms',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
          />
        </svg>
      ),
    },
    {
      key: 'gallery',
      label: 'Gallery',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      ),
    },
    {
      key: 'documentation',
      label: 'Documentation',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <header>
      <div className="sticky flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none mb-0">
        <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-60">
          <div className="flex flex-row items-center gap-4">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" fill="#4285F4" rx="12" />
              <path
                d="M19 24L25 20L19 16"
                fill="none"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <line
                x1="27"
                y1="24"
                x2="31"
                y2="24"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>

            <Link className="" to="/">
              <h1 className="text-2xl text-black dark:text-white font-bold">
                Tabler
              </h1>
            </Link>
          </div>

          <div className="flex items-center gap-3 2xsm:gap-7">
            <ul className="flex items-center gap-2 2xsm:gap-4">
              <h2 className="border-2 text-blue-800 dark:text-white dark:border-white border-blue-800 p-2 text-lg leading-6">
                Source Code
              </h2>
              {/* <!-- Dark Mode Toggler --> */}
              <DarkModeSwitcher />
              {/* <!-- Dark Mode Toggler --> */}

              {/* <!-- Notification Menu Area --> */}
              <DropdownNotification />
              {/* <!-- Notification Menu Area --> */}
            </ul>

            {/* <!-- User Area --> */}
            <DropdownUser />
            {/* <!-- User Area --> */}
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-grow items-center justify-between mt-0 px-4 md:px-6 2xl:px-60">
        <div className="flex w-full justify-start border-b border-gray-200 gap-8 p-4">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`cursor-pointer flex items-center space-x-2 pb-2 ${
                activeTab === tab.key
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-4">
          {/* Display content based on the active tab */}
          {activeTab === 'home'}
          {activeTab === 'interface'}
          {activeTab === 'components'}
          {activeTab === 'pages'}
          {activeTab === 'forms'}
          {activeTab === 'gallery'}
          {activeTab === 'documentation'}
        </div>
      </div>
    </header>
  );
};

export default Header;
