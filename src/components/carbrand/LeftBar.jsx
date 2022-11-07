import React , {useContext} from "react";
import { CarBrandContext } from "../../context/CarBrandContext";

const LeftBar = () => {
  const [carBrandState, setCarBrandState] = useContext(CarBrandContext);
  const { isToggleSideBar, toggleSideBar } = carBrandState;

  return (
    <div className={`custom-scrollbar bg-white pl-0 p-4 sticky top-28 max-w-[15em] h-[85vh] overflow-y-auto`}>
      <h3>LeftBar</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore,
        velit, dicta illum enim, libero doloribus perspiciatis facilis earum et
        saepe repellat dolor! Illo sequi eius, quo perspiciatis ipsum atque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore,
        velit, dicta illum enim, libero doloribus perspiciatis facilis earum et
        saepe repellat dolor! Illo sequi eius, quo perspiciatis ipsum atque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore,
        velit, dicta illum enim, libero doloribus perspiciatis facilis earum et
        saepe repellat dolor! Illo sequi eius, quo perspiciatis ipsum atque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore,
        velit, dicta illum enim, libero doloribus perspiciatis facilis earum et
        saepe repellat dolor! Illo sequi eius, quo perspiciatis ipsum atque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore,
        velit, dicta illum enim, libero doloribus perspiciatis facilis earum et
        saepe repellat dolor! Illo sequi eius, quo perspiciatis ipsum atque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore,
        velit, dicta illum enim, libero doloribus perspiciatis facilis earum et
        saepe repellat dolor! Illo sequi eius, quo perspiciatis ipsum atque!
      </p>
    </div>
  );
};

export default LeftBar;
