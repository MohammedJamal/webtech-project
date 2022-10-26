import React from 'react'



const Contact = () => {
  return (
    <Wrapper>
        <p>asdasd</p>
    </Wrapper>
  )
}

const Wrapper = ({children}) => {
    return (
        <div className="p-6">
            {children}
        </div>
    )
}

export default Contact