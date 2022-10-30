import React from 'react'

const ModalNavigate = ({ children }) => {
    if (children) {
      return (
        <div className="bg-gray-50 sticky z-10 bottom-2 p-3 rounded border border-gray-200 mt-4 shadow-lg">
          {children}
        </div>
      );
    }
    return null;
  };
export default ModalNavigate