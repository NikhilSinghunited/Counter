import React, { useState } from 'react';
const Counter = () => {
  const [num, setNum] = useState(5);

  const incNum = () => {
    setNum(num + 1);
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0);
    }
  };

  return (
    <div className='Parent bg-yellow-200 w-full flex min-h-screen items-center'>
      <div className='centre bg-blue-200 w-full h-96 flex flex-col items-center justify-center '>
        <h1>{num}</h1>
        <div className='flex gap-2 btn'>
          <button
            onClick={incNum}
            className='bg-blue-700 hover:bg-red-200 text-white font-bold  rounded'
          >
            Inc
          </button>
          <button
            onClick={decNum}
            className='bg-blue-700 hover:bg-red-200 text-white font-bold  rounded'
          >
            Dec
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
