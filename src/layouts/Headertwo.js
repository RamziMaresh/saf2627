'use client';

import { useState, useEffect } from 'react';


export default function TopHeader() {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = now.toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setDateTime(formatted);
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="header-two">
      <div className="container-headertwo">
        
        {/* Left Side: Live Date & Time */}
        <div className=" item-headertwo">
          <svg
            className="icon-headertwo"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="clockText">
            {dateTime || 'Loading time...'}
          </span>
        </div>

        {/* Right Side: Company Email */}
        <div className="item-headertwo-mail">
          <svg
            className="icon-headertwo"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a href="mailto:info@safraco.com" className="emailLink">
            info@safraco.com
          </a>
        </div>

      </div>
    </header>
  );
}
