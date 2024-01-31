import SignL from "./SignL";
import SignMd from "./SignMd";

const Sign = () => {
  return (
    <div>
      <div className="md:block hidden">
        <SignL/>
      </div>

      <div className="block md:hidden">
        <SignMd/>
      </div>
    </div>

  );
};
export default Sign;