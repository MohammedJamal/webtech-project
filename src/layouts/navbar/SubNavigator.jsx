import { HiChevronLeft } from "react-icons/hi";
import carType from "../../assets/carType.json";
 // ประเภทรถที่จะ render
const SubNavigator = () => {
  return (
    <li
      id="sub-navigator"
      className="hidden md:overflow-x-auto opacity-0 bg-white z-30
         w-full md:max-w-none flex-col items-center
         md:shadow-realistic-1 absolute
         overflow-y-scroll md:overflow-y-auto
          md:left-0 right-0 top-0 bottom-0 md:bottom-auto md:top-full p-6 pt-0 md:pt-4"
    >
      <div className="sticky top-0  z-10 w-full md:hidden bg-white pt-4">
        <div id="back-main-nav" className="text-xl flex items-center">
          <HiChevronLeft className="text-2xl mr-4" />
          <span>ย้อนกลับ</span>
        </div>
        <hr className="my-4" />
      </div>
      <div className="flex w-full max-w-[70em] justify-center flex-col md:flex-row flex-wrap">
        {carType.map((item) => {
          return (
            <div key={item} className="p-2 w-full md:w-[20%]">
              <h4 className="carlist-animation font-medium">{item}</h4>
              <ul className="text-sm text-bluegrey-light-2">
                <li className="carlist-animation">xxxx-yyyy</li>
                <li className="carlist-animation">xxxx-yyyy</li>
                <li className="carlist-animation">xxxx-yyyy</li>
                <li className="carlist-animation">xxxx-yyyy</li>
                <li className="carlist-animation">xxxx-yyyy</li>
                <li className="carlist-animation">xxxx-yyyy</li>
                <li className="carlist-animation">xxxx-yyyy</li>
              </ul>
            </div>
          );
        })}
      </div>
    </li>
  );
};

export default SubNavigator;
