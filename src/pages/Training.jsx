import Navbar from "../components/Navbar";
import Texture from "../assets/texture.png";
import Gradient from "../assets/gradient.svg";

const Training = () => {
  return (
    <div className="h-screen ">
      <Navbar />
      <div
        className="relative min-h-screen h-screen overflow-hidden"
        style={{
          background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="absolute w-full flex items-center justify-center h-full z-[2]">
          <div className="flex items-center justify-center gap-[16px] w-[calc(100%-196px)] mt-[100px]">
            <div
              className="h-[600px] w-[33%] bg-[#171D1F]"
              style={{ boxShadow: "0px 8px 10px #00000099" }}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div
              className="h-[600px] w-[66%] bg-[#171D1F]"
              style={{ boxShadow: "0px 8px 10px #00000099" }}
            ></div>
          </div>
        </div>
        <img
          src={Gradient}
          alt="Gradient"
          className="absolute w-full h-auto pointer-events-none z-[1] opacity-70"
          style={{ top: "-50%" }}
        />
      </div>
    </div>
  );
};

export default Training;
