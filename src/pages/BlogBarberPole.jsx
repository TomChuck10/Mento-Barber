// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.png";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import Blog7 from "../assets/blog7.jpg";

const BlogBarberPole = () => {
  const isMobile = useIsMobile();

  return !isMobile ? (
    <div className="h-screen overflow-hidden">
      <Navbar />
      {/* Stałe tło */}
      <div
        className="fixed top-0 left-0 w-full h-full z-[-1]"
        style={{
          background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      />

      {/* Kontener z przewijaną treścią */}
      <div className="relative h-screen overflow-auto">
        <div className="flex items-center justify-center mt-[10%] mb-[5%]">
          <div
            className="w-[65%] bg-[#171D1F] flex flex-col p-[32px]  rounded-[10px]"
            style={{ boxShadow: "0px 8px 10px #00000099" }}
          >
            <div className="rounded-[6px] overflow-hidden h-[400px] flex justify-center items-center">
              <img
                src={Blog7}
                alt="panel"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-[12px] text-white mt-[32px] font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[6px]">
              Dobra fryzura = dobre wrażenie
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Mówi się, że nie szata zdobi człowieka – ale prawda jest taka, że
              <b>pierwsze wrażenie ma ogromne znaczenie</b>. Ludzie oceniają nas
              w ciągu kilku sekund, zanim zdążymy się odezwać. A jednym z
              kluczowych elementów, na który zwracają uwagę, jest fryzura.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[32px] text-prime font-bold">
              Dlaczego fryzura jest tak ważna?
            </h1>
            <ul className="list-disc text-[16px] text-white my-[12px] ml-[20px] font-light">
              <li>
                <b>Podkreśla Twój styl</b> – dobrze dobrane cięcie pasuje do
                kształtu twarzy i Twojej osobowości,
              </li>
              <li>
                <b>Dodaje pewności siebie</b> – z zadbaną fryzurą czujesz się
                lepiej i to widać w Twoim zachowaniu,
              </li>
              <li>
                <b>Buduje profesjonalny wizerunek</b> – szczególnie w pracy i na
                spotkaniach biznesowych
              </li>
            </ul>

            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              W pracy – liczy się profesjonalizm
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Nawet jeśli masz świetne kompetencje, zaniedbany wygląd może
              podświadomie obniżać zaufanie do Ciebie. Z kolei{" "}
              <b>schludna fryzura i zadbana broda</b> sprawiają, że inni
              postrzegają Cię jako osobę poukładaną i pewną siebie.
            </p>

            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              W codziennym życiu – pierwsze wrażenie robi różnicę
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Wyobraź sobie randkę, spotkanie ze znajomymi albo nawet zwykłą
              rozmowę w urzędzie. Czasem łatwiej jest coś załatwić czy przekonać
              kogoś do siebie, jeśli wyglądasz na osobę zadbaną.
            </p>
            <p className="text-[16px] text-white mt-[12px] font-light">
              <span className="text-[20px]">👉</span> To sygnał, że dbasz o
              siebie – a skoro potrafisz zadbać o siebie, potrafisz też zadbać o
              inne sprawy.
            </p>

            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              Dobra fryzura to inwestycja w siebie
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Czasem wystarczy kilka minut u barbera i codzienna stylizacja,
              żeby zrobić ogromną różnicę w tym, jak jesteś postrzegany. To
              <b>prosta inwestycja</b>, która daje realne korzyści – w pracy, w
              relacjach i w codziennym życiu.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <div className="text-[16px] text-white font-light mb-[42px]">
              <span className="text-[20px]">💈</span> <b>Podsumowanie:</b>
              <br />
              Dobra fryzura to nie tylko kwestia wyglądu. To narzędzie, które
              pomaga Ci budować wizerunek, dodaje pewności siebie i sprawia, że
              inni postrzegają Cię lepiej. Dlatego warto o nią zadbać – bo
              pierwsze wrażenie możesz zrobić tylko raz.
            </div>
          </div>
        </div>
      </div>
      <img
        src={Gradient}
        alt="Gradient"
        className="fixed w-full h-auto pointer-events-none z-[-1] opacity-70"
        style={{ top: "-50%" }}
      />
    </div>
  ) : (
    <div className="relative h-screen overflow-hidden">
      <Navbar />
      {/* Stałe tło */}
      <div
        className="fixed top-0 left-0 w-full h-full z-[-1]"
        style={{
          background: `linear-gradient(90deg, #090909, #091E23), url(${Texture})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      />

      {/* Kontener z przewijaną treścią */}
      <div className="relative h-screen overflow-auto">
        <div className="flex items-center justify-center mt-[100px] mb-[5%]">
          <div
            className="w-full bg-[#171D1F] flex flex-col p-[32px] m-[16px] rounded-[10px] z-10"
            style={{ boxShadow: "0px 8px 10px #00000099" }}
          >
            <div className="h-[200px] rounded-[6px] overflow-hidden flex justify-center items-center">
              <img
                src={Blog7}
                alt="panel"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-[12px] text-white mt-[32px] font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[6px]">
              Dobra fryzura = dobre wrażenie
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Mówi się, że nie szata zdobi człowieka – ale prawda jest taka, że
              <b>pierwsze wrażenie ma ogromne znaczenie</b>. Ludzie oceniają nas
              w ciągu kilku sekund, zanim zdążymy się odezwać. A jednym z
              kluczowych elementów, na który zwracają uwagę, jest fryzura.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[24px] text-prime font-bold">
              Dlaczego fryzura jest tak ważna?
            </h1>
            <ul className="list-disc text-[14px] text-white my-[12px] ml-[20px] font-light">
              <li>
                <b>Podkreśla Twój styl</b> – dobrze dobrane cięcie pasuje do
                kształtu twarzy i Twojej osobowości,
              </li>
              <li>
                <b>Dodaje pewności siebie</b> – z zadbaną fryzurą czujesz się
                lepiej i to widać w Twoim zachowaniu,
              </li>
              <li>
                <b>Buduje profesjonalny wizerunek</b> – szczególnie w pracy i na
                spotkaniach biznesowych
              </li>
            </ul>

            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              W pracy – liczy się profesjonalizm
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Nawet jeśli masz świetne kompetencje, zaniedbany wygląd może
              podświadomie obniżać zaufanie do Ciebie. Z kolei{" "}
              <b>schludna fryzura i zadbana broda</b> sprawiają, że inni
              postrzegają Cię jako osobę poukładaną i pewną siebie.
            </p>

            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              W codziennym życiu – pierwsze wrażenie robi różnicę
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Wyobraź sobie randkę, spotkanie ze znajomymi albo nawet zwykłą
              rozmowę w urzędzie. Czasem łatwiej jest coś załatwić czy przekonać
              kogoś do siebie, jeśli wyglądasz na osobę zadbaną.
            </p>
            <p className="text-[14px] text-white mt-[12px] font-light">
              <span className="text-[18px]">👉</span> To sygnał, że dbasz o
              siebie – a skoro potrafisz zadbać o siebie, potrafisz też zadbać o
              inne sprawy.
            </p>

            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              Dobra fryzura to inwestycja w siebie
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Czasem wystarczy kilka minut u barbera i codzienna stylizacja,
              żeby zrobić ogromną różnicę w tym, jak jesteś postrzegany. To
              <b>prosta inwestycja</b>, która daje realne korzyści – w pracy, w
              relacjach i w codziennym życiu.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <div className="text-[14px] text-white font-light mb-[42px]">
              <span className="text-[18px]">💈</span> <b>Podsumowanie:</b>
              <br />
              Dobra fryzura to nie tylko kwestia wyglądu. To narzędzie, które
              pomaga Ci budować wizerunek, dodaje pewności siebie i sprawia, że
              inni postrzegają Cię lepiej. Dlatego warto o nią zadbać – bo
              pierwsze wrażenie możesz zrobić tylko raz.
            </div>
          </div>
        </div>
      </div>
      <img
        src={Gradient}
        alt="Gradient"
        className="absolute top-0 z-0 w-[800px] max-w-none"
        style={{ right: "-200px", top: "-200px" }}
      />
    </div>
  );
};

export default BlogBarberPole;
