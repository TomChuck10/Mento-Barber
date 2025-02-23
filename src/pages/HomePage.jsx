import ViteIcon from "../assets/react.svg";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen px-20 pt-12">
      <nav className="flex justify-between items-center w-full relative">
        <div className="flex space-x-10 uppercase">
          <p className="text-textPrimary">o nas</p>
          <p className="text-textPrimary">cennik</p>
          <p className="text-textPrimary">barberzy</p>
          <p className="text-textPrimary">nasze prace</p>
        </div>
        <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2">
          <img src={ViteIcon} alt="Vite Icon" />
        </div>
        <div className="flex space-x-10 uppercase">
          <p className="text-textPrimary">blog</p>
          <p className="text-textPrimary">szkolenia</p>
          <p className="text-textPrimary">zarezerwuj</p>
        </div>
      </nav>
      <div className="flex flex-col items-start mt-60 leading-none max-w-screen-sm">
        <h1 className="text-textPrimary uppercase text-titleOne">
          mento barber
        </h1>
        <h1 className="text-titleTwo uppercase">bochnia</h1>
        <p>
          MENTO Barber Bochnia Shop to znakomite miejsce, gdzie rzemiosło
          spotyka się z pasją i profesjonalizmem. Nasza oferta skupia się na
          perfekcyjnych męskich fryzurach, precyzyjnym strzyżeniu brody, oraz
          zadbanym zarostem.
        </p>
      </div>
      <div className="flex justify-between items-center w-full mt-auto py-4">
        <div className="flex space-x-4">
          <div className="border border-gray-400 rounded-full p-2 text-textPrimary">
            Nad Babicą 2, Bochnia
          </div>
          <div className="border border-gray-400 rounded-full p-2 text-textPrimary">
            +48 123 456 789
          </div>
        </div>
        <div className="flex space-x-4 text-textPrimary">
          <div>Facebook</div>
          <div>Instagram</div>
          <div>TikTok</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
