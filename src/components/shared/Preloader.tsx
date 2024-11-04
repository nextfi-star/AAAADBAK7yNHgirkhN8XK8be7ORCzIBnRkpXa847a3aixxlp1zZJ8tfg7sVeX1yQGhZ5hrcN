import animationData from "../../../public/preloader/White_logo2.json";
import animationData2 from "../../../public/preloader/Black_logo2.json";
import Lottie from "lottie-react";
import { useThemeStore } from "../../store";

const Preloader = () => {
  const { theme } = useThemeStore();
  return (
    <>
      {theme.toString() !== "light" ? (
        <div className="preloader preloader__black">
          <Lottie animationData={animationData} className="lottie" loop={false} autoPlay/>
        </div>
      ) : (
        <div className="preloader preloader__white">
          <Lottie animationData={animationData2} className="lottie" loop={false} autoPlay/>
        </div>
      )}
    </>
  );
};

export default Preloader;
