import React, { useState, useRef, useEffect } from 'react';
import Notificaton from "@assets/AdminHeader/Notification.svg";
import Profile from "@assets/AdminHeader/Profile.svg";
import Api from '../../../Services/Api';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [allNotifications, setAllNotifications] = useState([])
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
    handleNotificationClick('All');
  };

  const handleNotificationClick = (section) => {
    if (section === 'All') {
      setActiveTab('All')
      Api.get('api/notifications')
        .then(response => {
          if (response && response.status === 200) {
            console.log('notifiactions', response.data)
            setAllNotifications(response.data)
          } else {
            console.error('notifiactions cant fetch', response)
          }
        })
    } else if (section === 'Unread') {
      setActiveTab('Unread')
      Api.get('api/notifications/unread')
        .then(response => {
          if (response && response.status === 200) {
            console.log('notifiactions', response.data)
            setAllNotifications(response.data)
          } else {
            console.error('notifiactions cant fetch', response)
          }
        })
    }
  }

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <div className='bg-[#FFFFFF] shadow-lg py-[20px] px-9 h-[72px] relative'>
      <div className='flex justify-end items-center'>
        {/* Notification Icon */}
        <div className='relative' ref={dropdownRef}>
          <img
            className='h-8 w-8 cursor-pointer'
            src={Notificaton}
            alt="Notification"
            onClick={toggleDropdown}
          />

          {/* Dropdown */}
          {showDropdown && (
            <div className='absolute right-0 mt-2 w-[462px] p-4 bg-white shadow-md border rounded-lg '>
              <h1 className='text-[20px] font-medium'>Notification</h1>

              {/* Tabs */}
              <div className="flex border-b mt-4">
                <button
                  onClick={() => handleNotificationClick('All')}
                  className={` py-2 px-10 text-sm ${activeTab === 'All' ? 'border-b border-black' : 'hover:bg-gray-100'}`}
                >
                  All
                </button>
                <button
                  onClick={() => handleNotificationClick('Unread')}
                  className={` py-2 px-10 text-sm ${activeTab === 'Unread' ? 'border-b border-black' : 'hover:bg-gray-100'}`}
                >
                  Unread
                </button>
              </div>

              {/* Notification List */}
              <div className='p-4 text-sm text-gray-700 max-h-60 overflow-y-auto'>
                
                  <ul className="space-y-2">
                    {allNotifications.map((notification, index) => (
                      <li key={index}>🔔 {notification.message}</li>
                    ))}

                  </ul>
                
              </div>
            </div>
          )}
        </div>

        {/* Profile Section */}
        <div className='flex items-center'>
          <img className='h-6 w-6 ml-10 mr-2' src={Profile} alt="Profile" />
          Hi Admin....!
        </div>
      </div>
    </div>
  );
}

export default Header;
