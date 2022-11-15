import React from 'react'



const Contact = () => {
  return (
    <Wrapper>
        <h3 className="text-bluegrey-dark-4">สมาชิกกลุ่ม</h3>
        <ul>
          <li>นายศุภกร เนตรสุวรรณ 64070108</li>
        </ul>
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