import React from 'react'

const ModalNavigate = ({ children }) => {
    if (children) {
      return (
        <div className="bg-gray-50 sticky bottom-2 p-2 rounded border border-gray-200">
          {children}
        </div>
      );
    }
    return null;
  };
export default ModalNavigate