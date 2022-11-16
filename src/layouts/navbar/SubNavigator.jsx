import { HiChevronLeft } from "react-icons/hi";
/* ============== React router ============== */
import { useNavigate } from "react-router-dom";
/* ============== utils ============== */
import{
  getModelsFromBrand,
  getBrandsList,
} from "../../utils/carMethods";

// ประเภทรถที่จะ render
const SubNavigator = () => {
  const navigate = useNavigate();

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
      <div className="flex w-full max-w-[70em] justify-start flex-col md:flex-row flex-wrap">
        {getBrandsList().map((carbrand) => {
          return (
            <div key={carbrand} className="p-2 w-full md:w-[20%]">
              <h4
                onClick={() => navigate(`/${carbrand}`)}
                className="cursor-pointer hover:decoration-blue-500 decoration-transparent underline underline-offset-2 decoration-2  carlist-animation font-medium duration-200"
              >
                {carbrand}
              </h4>
              <ul className="text-sm text-bluegrey-light-2">
                {getModelsFromBrand(carbrand).map((model) => (
                  <li key={model} className="carlist-animation">
                    {model}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </li>
  );
};

export default SubNavigator;
