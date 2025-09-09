import { useState } from "react";

// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.png";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";

// Assets
import ShortHair from "../assets/shortHair.png";
import LongHair from "../assets/longHair.png";
import Beard from "../assets/beard.png";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Training = () => {
  const isMobile = useIsMobile();

  const [activePanel, setActivePanel] = useState(0);

  const [dialogText, setDialogText] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [reservationDialogText, setReservationDialogText] = useState(null);
  const [isReservationDialogOpen, setIsReservationDialogOpen] = useState(false);

  const openDialog = (index) => {
    setDialogText(data[index].tutorial);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setDialogText(null);
  };

  const openReservationDialog = (index) => {
    setReservationDialogText(data[index].tutorial);
    setIsReservationDialogOpen(true);
  };

  const closeReservationDialog = () => {
    setIsReservationDialogOpen(false);
    setReservationDialogText(null);
  };

  const data = [
    {
      photo: ShortHair,
      title: "Krótkie włosy + cieniowanie od zera (fade)",
      description:
        "Perfekcyjny fade to podstawa nowoczesnego barberingu. W tym panelu skupimy się na technice cieniowania od zera, precyzyjnym przejściu tonalnym i odpowiednim doborze długości do kształtu głowy. Pokażemy, jak pracować z maszynką, trymerem i shaverem, by uzyskać idealne wykończenie. Szkolenie obejmuje zarówno teorię, jak i praktykę na modelach, abyś mógł doszlifować swoje umiejętności i zyskać pewność w pracy z krótkimi fryzurami.",
      tutorial: "KRÓTKIE WŁOSY + CIENIOWANIE OD ZERA (FADE) - PLAN DNIA",
      data: "5 października 2025",
      plan: (
        <>
          <div className="mb-[32px]">
            <p className="font-bold">09:00 - 12:00</p>
            <p>Teoria + prezentacja multimedialna + konsultacje</p>
            <p>→ Technika cieniowania, główne techniki, proporcje</p>
            <p>→ Analiza głowy, tekstury włosów, dobór fryzury do klienta</p>
            <p>→ Analiza głowy, tekstury włosów, dobór fryzury do klienta</p>
            <p>
              → Dobór i omówienie narzędzi do pracy (maszynki, nasadki, trymery,
              nożyczki)
            </p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">12:00 - 12:30</p>
            <p>Lunch dla uczestników – wliczony w cenę szkolenia</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">12:30 - 15:00</p>
            <p>Model pokazowy dla szkoleniowca</p>
            <p>→ Pełne cięcie z omówieniem krok po kroku</p>
            <p>→ Detale, wykończenie, technika pracy maszynką i nożyczkami</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">15:00 - 18:00</p>
            <p>Warsztaty – praca uczestników na modelach</p>
            <p>→ Praktyczne wykorzystanie wiedzy</p>
            <p>→ Cięcie pod okiem szkoleniowców, indywidualny feedback</p>
          </div>
          <div>
            <p className="font-bold">18:00</p>
            <p>Zakończenie dnia – rozdanie dyplomów i upominków</p>
          </div>
        </>
      ),
    },
    {
      photo: LongHair,
      title: "Długie włosy , praca na nożyczkach",
      description:
        "Precyzyjna praca nożyczkami to podstawa przy dłuższych fryzurach. W tym panelu przepracujemy główne techniki strzyżenia, takie jak linia , gradacja , warstwa , aby dopasować fryzurę do kształtu głowy i struktury włosa. Nauczysz się, jak kontrolować napięcie pasma, jak pracować sekcyjnie i uzyskiwać płynne przejścia. Skupimy się na ergonomii ruchu oraz doborze narzędzi, byś mógł świadomie budować formę każdej fryzury.",
      tutorial: "DŁUGIE WŁOSY + PRACA NA NOŻYCZKACH - PLAN DNIA",
      data: "24 sierpnia 2025",
      plan: (
        <>
          <div className="mb-[32px]">
            <p className="font-bold">09:00 - 12:00</p>
            <p>Teoria + prezentacja multimedialna + konsultacje</p>
            <p>→ Technika cieniowania, główne techniki, proporcje</p>
            <p>→ Analiza głowy, tekstury włosów, dobór fryzury do klienta</p>
            <p>→ Analiza głowy, tekstury włosów, dobór fryzury do klienta</p>
            <p>
              → Dobór i omówienie narzędzi do pracy (maszynki, nasadki, trymery,
              nożyczki)
            </p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">12:00 - 12:30</p>
            <p>Lunch dla uczestników – wliczony w cenę szkolenia</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">12:30 - 15:00</p>
            <p>Model pokazowy dla szkoleniowca</p>
            <p>→ Pełne cięcie z omówieniem krok po kroku</p>
            <p>→ Detale, wykończenie, technika pracy maszynką i nożyczkami</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">15:00 - 18:00</p>
            <p>Warsztaty – praca uczestników na modelach</p>
            <p>→ Praktyczne wykorzystanie wiedzy</p>
            <p>→ Cięcie pod okiem szkoleniowców, indywidualny feedback</p>
          </div>
          <div>
            <p className="font-bold">18:00</p>
            <p>Zakończenie dnia – rozdanie dyplomów i upominków</p>
          </div>
        </>
      ),
    },
    {
      photo: Beard,
      title: "Brody krótke i długie",
      description:
        "Idealnie przycięta broda to nie tylko estetyka, ale i komfort klienta. W tym panelu nauczysz się cieniowania brody, jej konturowania i odpowiedniego skracania, by dopasować kształt do rysów twarzy. Skupimy się także na tonowaniu i pielęgnacji zarostu, aby uzyskać naturalny, zdrowy wygląd. Podczas praktycznej części dowiesz się, jak pracować maszynka , trymerem, brzytwą i nożyczkami, by broda wyglądała perfekcyjnie i była dopasowana do stylu klienta.",
      tutorial: "BRODY: CIENIOWANIE • MODELOWANIE • TONOWANIE - PLAN DNIA",
      data: "24 sierpnia 2025",
      plan: (
        <>
          <div className="mb-[32px]">
            <p className="font-bold">09:00 - 10:30</p>
            <p>Teoria + prezentacja</p>
            <p>→ Różne typy brody i ich dopasowanie do kształtu twarzy</p>
            <p>→ Linie naturalne vs geometryczne</p>
            <p>→ Cieniowanie, konturowanie, wykończenie</p>
            <p>→ Narzędzia, techniki, produkty i tonery</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">10:30 - 12:30</p>
            <p>Pierwszy model pokazowy – krótka broda</p>
            <p>→ Opracowanie krok po kroku z pełnym omówieniem</p>
            <p>→ Praca z konturem, cieniowaniem i tonowaniem</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">12:30 - 15:00</p>
            <p>Drugi model pokazowy – długa broda</p>
            <p>→ Inne podejście, narzędzia i prowadzenie linii</p>
            <p>→ Stylizacja, tekstura, objętość i pielęgnacja</p>
          </div>
          <div className="mb-[32px]">
            <p className="font-bold">15:00 - 18:00</p>
            <p>Praca uczestników na modelach</p>
            <p>→ Każdy kursant wykonuje pełną stylizację brody</p>
            <p>
              → Szkoleniowcy aktywnie pomagają w opracowaniu brody – od
              planowania, przez wykonanie, aż po finalne wykończenie
            </p>
          </div>
          <div>
            <p className="font-bold">18:00</p>
            <p>Zakończenie dnia – rozdanie dyplomów i upominków</p>
          </div>
        </>
      ),
    },
  ];

  const handleChangePanel = (index) => setActivePanel(index);

  const renderPanel = (panel, index) => (
    <div
      key={index}
      className={`h-[33.3%] pl-[36px] border-l-4 ${
        activePanel === index ? "border-prime" : "border-transparent"
      } border-b-[1px] flex flex-col justify-center cursor-pointer`}
      style={{
        borderBottomColor:
          activePanel === index
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(112,112,112, 0.1)",
      }}
      onClick={() => handleChangePanel(index)}
    >
      <p className="text-white uppercase text-[14px]">panel {index + 1}</p>
      <p
        className={`text-[18px] ${
          activePanel === index ? "text-prime" : "text-white"
        }`}
      >
        {panel.title}
      </p>
    </div>
  );

  return (
    <>
      {!isMobile ? (
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
                  className="h-[75vh] w-[33%] bg-[#171D1F]"
                  style={{ boxShadow: "0px 8px 10px #00000099" }}
                >
                  {data.map((panel, index) => renderPanel(panel, index))}
                </div>
                <div
                  className="h-[75vh] w-[66%] bg-[#171D1F] flex flex-col"
                  style={{ boxShadow: "0px 8px 10px #00000099" }}
                >
                  <div className=" bg-white m-[32px] mb-[20px] rounded-[6px] overflow-hidden">
                    <img
                      src={data[activePanel].photo}
                      alt="photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="title text-prime mx-[32px] text-[20px]">
                    {data[activePanel].title}
                  </p>
                  <p className="description text-[13px] text-white mx-[32px] mt-[10px] mb-[24px] font-light">
                    {data[activePanel].description}
                  </p>
                  <div className="flex flex-row items-center justify-center mx-[32px] gap-[16px]">
                    <button
                      className="border-2 border-prime rounded-[16px] p-[12px] text-prime mb-[36px] mt-auto flex items-center justify-center gap-[2px]"
                      style={{ width: "20%" }}
                      onClick={() => openDialog(activePanel)}
                    >
                      <IoInformationCircleOutline
                        style={{ marginTop: "2px" }}
                      />{" "}
                      Plan szkolenia
                    </button>
                    <button
                      className=" bg-prime rounded-[16px] p-[12px] text-white mb-[36px] mt-auto"
                      style={{ width: "80%" }}
                      onClick={() => openReservationDialog(activePanel)}
                    >
                      Umów szkolenie
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={Gradient}
              alt="Gradient"
              className="absolute w-full h-auto pointer-events-none z-[1] opacity-70"
              style={{ top: "-50%" }}
            />
          </div>
          {isDialogOpen && (
            <div
              className="fixed inset-0 bg-[#00000088] backdrop-blur-sm flex justify-center items-center z-50"
              onClick={closeDialog}
            >
              <div
                className="px-[48px] py-[32px] bg-[#171D1F] text-white rounded-[10px] min-w-[65%] max-h-[80vh] overflow-y-auto relative shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="font-bold">PLAN DNIA I TERMINY</p>
                <div className="flex justify-between items-center">
                  <p className="text-[24px] font-bold text-prime">
                    {dialogText}
                  </p>
                  <button onClick={closeDialog} className="text-prime">
                    <IoClose size={40} />
                  </button>
                </div>
                <hr className="border-[white] opacity-5 mt-[32px] mb-[16px]" />
                <p>
                  <span className="font-bold">Nadchodzące terminy: </span>
                  {data[activePanel].data}
                </p>
                <hr className="border-[white] opacity-5 mt-[16px] mb-[24px]" />
                {data[activePanel].plan}
              </div>
            </div>
          )}
          {isReservationDialogOpen && (
            <div
              className="fixed inset-0 bg-[#00000088] backdrop-blur-sm flex justify-center items-center z-50"
              onClick={closeReservationDialog}
            >
              <div
                className="px-[48px] py-[32px] bg-[#171D1F] text-white rounded-[10px] min-w-[65%] max-h-[80vh] overflow-y-auto relative shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="font-bold">UMÓW SZKOLENIE</p>
                <div className="flex justify-between items-center">
                  <p className="text-[24px] font-bold text-prime">
                    {reservationDialogText}
                  </p>
                  <button
                    onClick={closeReservationDialog}
                    className="text-prime"
                  >
                    <IoClose size={40} />
                  </button>
                </div>
                <hr className="border-[white] opacity-5 mt-[32px] mb-[16px]" />
                <p>
                  Aby umówić szkolenie, skontaktuj się z nami telefonicznie lub
                  przez Instagram, podając nazwę szkolenia oraz interesujący Cię
                  termin.
                </p>
                <hr className="border-[white] opacity-5 mt-[16px] mb-[24px]" />
                <p>
                  <span className="font-bold">Telefon: </span>+48 798 144 399
                </p>
                <p>
                  <span className="font-bold">Instagram: </span>
                  <a
                    href="https://www.instagram.com/mento.barbershop/"
                    target="_blank"
                  >
                    mento.barbershop
                  </a>
                </p>
              </div>
            </div>
          )}
          <style>{`
				@media (min-width: 1800px) {
					.title {
						font-size: 24px;
					}
					.description {
						font-size: 16px;
					}
					.button {
						padding: 16px
					}
				}
			`}</style>
        </div>
      ) : (
        <div
          className="relative w-full py-6 px-4 overflow-hidden"
          style={{
            background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
          }}
        >
          <Navbar />
          <div className="flex flex-col gap-6 mt-[80px]">
            {data.map((panel, index) => (
              <div
                key={index}
                className="bg-[#171D1F] rounded-lg shadow-lg p-4 flex flex-col z-10"
              >
                <div className="bg-white rounded-[6px] overflow-hidden mb-4">
                  <img
                    src={panel.photo}
                    alt="panel"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-prime text-[18px] font-semibold mb-2">
                  {panel.title}
                </p>
                <p className="text-white text-[14px] font-light mb-6">
                  {panel.description}
                </p>
                <button
                  onClick={() => openDialog(activePanel)}
                  className="border-2 border-prime text-prime rounded-[12px] py-[16px] mb-2 flex justify-center items-center gap-2 "
                >
                  <IoInformationCircleOutline style={{ marginTop: "2px" }} />{" "}
                  Plan szkolenia
                </button>
                <button
                  onClick={() => openReservationDialog(activePanel)}
                  className="bg-prime text-white rounded-[12px] py-[16px] mb-2"
                >
                  Umów szkolenie
                </button>
              </div>
            ))}
          </div>
          <img
            src={Gradient}
            alt="Gradient"
            className="absolute top-0 z-0 w-[800px] max-w-none"
            style={{ right: "-200px", top: "-200px" }}
          />
          {isDialogOpen && (
            <div
              className="fixed inset-0 bg-[#00000088] backdrop-blur-sm flex justify-center items-center z-50"
              onClick={closeDialog}
            >
              <div
                className="px-[48px] py-[32px] bg-[#171D1F] text-white rounded-[10px] h-[100vh] overflow-y-auto relative shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="font-bold text-[12px]">PLAN DNIA I TERMINY</p>
                <div className="flex justify-between items-start gap-4">
                  <p className="text-[20px] font-bold text-prime">
                    {dialogText}
                    fgf{" "}
                  </p>
                  <button onClick={closeDialog} className="text-prime">
                    <IoClose size={30} />
                  </button>
                </div>
                <hr className="mt-[32px] mb-[16px]" />
                <p>
                  <span className="font-bold">Nadchodzące terminy: </span>
                  {data[activePanel].data}
                </p>
                <hr className="mt-[16px] mb-[24px]" />
                {data[activePanel].plan}
              </div>
            </div>
          )}
          {isReservationDialogOpen && (
            <div
              className="fixed inset-0 bg-[#00000088] backdrop-blur-sm flex justify-center items-center z-50"
              onClick={closeReservationDialog}
            >
              <div
                className="px-[48px] py-[32px] bg-[#171D1F] text-white rounded-[10px] min-h-[30vh] overflow-y-auto relative shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="font-bold text-[12px]">UMÓW SZKOLENIE</p>
                <div className="flex justify-between items-start gap-4">
                  <p className="text-[20px] font-bold text-prime">
                    {reservationDialogText}
                  </p>
                  <button
                    onClick={closeReservationDialog}
                    className="text-prime"
                  >
                    <IoClose size={30} />
                  </button>
                </div>
                <hr className="border-[white] opacity-5 mt-[32px] mb-[16px]" />
                <p>
                  Aby umówić szkolenie, skontaktuj się z nami telefonicznie lub
                  przez Instagram, podając nazwę szkolenia oraz interesujący Cię
                  termin.
                </p>
                <hr className="border-[white] opacity-5 mt-[16px] mb-[24px]" />
                <p>
                  <span className="font-bold">Telefon: </span>+48 798 144 399
                </p>
                <p>
                  <span className="font-bold">Instagram: </span>
                  <a
                    href="https://www.instagram.com/mento.barbershop/"
                    target="_blank"
                  >
                    mento.barbershop
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Training;
