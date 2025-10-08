import React, { useState, useRef, useEffect } from 'react';
import Notification from "@assets/AdminHeader/Notification.svg";
import NotificationNew from "@assets/AdminHeader/notiNew.svg"; // add a highlighted or filled version
import Profile from "@assets/AdminHeader/Profile.svg";
import readIcon from "@assets/AdminNotification/readNotification.svg"
import unreadIcon from "@assets/AdminNotification/unreadNotification.svg"
import Api from '../../../Services/Api';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [allNotifications, setAllNotifications] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [hasUnread, setHasUnread] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleOpenNotification = (id, type) => {
    Api.post(`api/notifications/read/${id}`)
      .then(response => {
        if (response && response.status === 200) {
          setRefreshKey(prev => prev + 1);
        }
      });

    if (type === 'audit') navigate('/websiteAudit');
    else if (type === 'contact') navigate('/enquiries');
    else if (type === 'job') navigate('/jobapplications');
  };

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
    if (!showDropdown) {
      // Reset unread highlight when dropdown opened
      setHasUnread(false);
      handleNotificationClick('All');
    }
  };

  const handleNotificationClick = (section) => {
    setActiveTab(section);
    const endpoint =
      section === 'Unread'
        ? 'api/notifications/unread'
        : 'api/notifications';

    Api.get(endpoint)
      .then(response => {
        if (response?.status === 200) {
          setAllNotifications(response.data);
        }
      });
  };

  // Fetch notifications and check unread
  useEffect(() => {
    Api.get('api/notifications')
      .then(response => {
        if (response?.status === 200) {
          setAllNotifications(response.data);
          const hasUnreadData = response.data.some(n => !n.read);
          setHasUnread(hasUnreadData);
        }
      });
  }, [refreshKey]);

  // Close dropdown when clicking outside
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
            src={hasUnread ? NotificationNew : Notification}
            alt="Notification"
            onClick={toggleDropdown}
          />

          {/* Dropdown */}
          {showDropdown && (
            <div className='absolute right-0 mt-2 w-[462px] p-4 bg-white shadow-md border rounded-lg'>
              <h1 className='text-[20px] font-medium'>Notification</h1>

              {/* Tabs */}
              <div className="flex border-b mt-4">
                <button
                  onClick={() => handleNotificationClick('All')}
                  className={`py-2 px-10 text-sm ${activeTab === 'All' ? 'border-b border-black' : 'hover:bg-gray-100'}`}
                >
                  All
                </button>
                <button
                  onClick={() => handleNotificationClick('Unread')}
                  className={`py-2 px-10 text-sm ${activeTab === 'Unread' ? 'border-b border-black' : 'hover:bg-gray-100'}`}
                >
                  Unread
                </button>
              </div>

              {/* Notification List */}
              <div className='p-4 text-sm text-gray-700 max-h-60 overflow-y-auto'>
                <ul className="space-y-2 cursor-pointer">
                  {allNotifications.map((notification, index) => (
                    <li
                      key={index}
                      className={`flex items-center py-[13px] px-4 border-b ${notification.read ? '' : 'bg-[#F4FFFE]'}`}
                      onClick={() => handleOpenNotification(notification.id, notification.type)}
                    >
                      <img
                        src={notification.read ? readIcon : unreadIcon}
                        className='mr-4'
                        alt=""
                      />
                      {notification.message}
                    </li>
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
