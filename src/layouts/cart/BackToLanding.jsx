import { HiChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const BackToLanding = () => (
  <Link to="/" className="mb-12 inline-block">
    <div className="flex items-center text-dark-1">
      <HiChevronLeft className="text-xl" />
      <span>กลับไปหน้าแรก</span>
    </div>
  </Link>
);

export default BackToLanding;
