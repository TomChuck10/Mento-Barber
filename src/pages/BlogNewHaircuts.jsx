// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.png";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import Blog3 from "../assets/haircut3.png";

const BlogNewHaircuts = () => {
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
                src={Blog3}
                alt="panel"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-[12px] text-white mt-[32px] font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[6px]">
              Jak pan młody powinien przygotować się do wielkiego dnia?
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Ślub to wyjątkowe wydarzenie – wszystko musi być dopięte na
              ostatni guzik. Garnitur, buty, dodatki… ale równie ważny jest
              <b> wizerunek pana młodego</b>. Odpowiednia fryzura, zadbana broda
              i zdrowa skóra twarzy sprawią, że w tym dniu będziesz wyglądał
              pewnie i świeżo. Jak to zaplanować?
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[32px] text-prime font-bold">
              Minimum 6 tygodni przed ślubem – pierwsza wizyta w Mento
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Nie odkładaj przygotowań na ostatnią chwilę.{" "}
              <b>
                Najpóźniej 6 tygodni przed weselem umów się na strzyżenie w
                Mento Barber Shop.
              </b>
            </p>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Podczas tej wizyty:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc">
              <li>ocenimy kształt fryzury,</li>
              <li>dobierzemy cięcie do Twojej twarzy,</li>
              <li>podpowiemy, czy lepiej zapuścić włosy, czy je skrócić.</li>
            </ul>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Dzięki temu będziemy mieć czas, żeby wypracować idealny efekt na
              dzień ślubu.
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              Zadbaj o skórę – Mento Care
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Twój wygląd to nie tylko fryzura i broda. Skóra również potrzebuje
              uwagi. Dlatego polecamy wizytę w <b>Mento Care</b>, gdzie Faustyna
              zadba o cerę:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc">
              <li>oczyści ją z zanieczyszczeń,</li>
              <li>nawilży i odświeży,</li>
              <li>
                przygotuje skórę do tego, by wyglądała zdrowo i promiennie w
                dniu ślubu.
              </li>
            </ul>
            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              Dzień przed weselem – finałowe przygotowania
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Na dzień przed tym wielkim wydarzeniem zaplanuj wizytę w Mento:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc">
              <li>
                wykonamy <b>ślubne strzyżenie</b>,
              </li>
              <li>zadbamy o brodę i kontury,</li>
              <li>
                zrobimy <b>zabieg pielęgnacyjny na twarz</b>, który nada skórze
                świeżości i blasku.
              </li>
            </ul>
            <p className="text-[16px] text-white mt-[12px] font-light">
              To moment, w którym dopieszczamy każdy detal – Ty możesz się
              zrelaksować, a my zadbamy o perfekcyjny efekt.
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              W dniu ślubu – tylko stylizacja
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              W dzień ceremonii nie ma czasu na długie zabiegi. Wystarczy, że:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc">
              <li>
                w domu weźmiesz prysznic, aby spłukać ewentualne resztki włosów
                po wczorajszym strzyżeniu,
              </li>
              <li>
                przyjdziesz do nas na <b>samą stylizację włosów i brody</b>,
              </li>
              <li>
                pojawisz się w koszuli lub ubraniu, które nie wymaga zakładania
                przez głowę – unikniesz psucia fryzury.
              </li>
            </ul>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Wtedy w pełnym spokoju, bez nerwów, będziesz gotowy, aby
              powiedzieć sakramentalne &quot;tak&quot;.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[32px] text-prime font-bold">
              💈 Podsumowanie:
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light mb-[42px]">
              Przygotowania pana młodego do ślubu to nie tylko garnitur i spinki
              do mankietów. To także plan pielęgnacyjny, który zaczyna się
              <b> minimum 6 tygodni wcześniej</b> i kończy się tuż przed
              ceremonią. W Mento zadbamy o każdy szczegół – fryzurę, brodę i
              skórę – tak, byś w dniu ślubu wyglądał i czuł się TOP!
            </p>
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
                src={Blog3}
                alt="panel"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-[12px] text-white mt-[32px] font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[6px]">
              Jak pan młody powinien przygotować się do wielkiego dnia?
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Ślub to wyjątkowe wydarzenie – wszystko musi być dopięte na
              ostatni guzik. Garnitur, buty, dodatki… ale równie ważny jest
              <b> wizerunek pana młodego</b>. Odpowiednia fryzura, zadbana broda
              i i zdrowa skóra twarzy sprawią, że w tym dniu będziesz wyglądał
              pewnie i świeżo. Jak to zaplanować?
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[24px] text-prime font-bold">
              Minimum 6 tygodni przed ślubem – pierwsza wizyta w Mento
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Nie odkładaj przygotowań na ostatnią chwilę.{" "}
              <b>
                Najpóźniej 6 tygodni przed weselem umów się na strzyżenie w
                Mento Barber Shop.
              </b>
            </p>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Podczas tej wizyty:
            </p>
            <ul className="text-[14px] text-white mt-[12px] font-light ml-[24px] list-disc">
              <li>ocenimy kształt fryzury,</li>
              <li>dobierzemy cięcie do Twojej twarzy,</li>
              <li>podpowiemy, czy lepiej zapuścić włosy, czy je skrócić.</li>
            </ul>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Dzięki temu będziemy mieć czas, żeby wypracować idealny efekt na
              dzień ślubu.
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              Zadbaj o skórę – Mento Care
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Twój wygląd to nie tylko fryzura i broda. Skóra również potrzebuje
              uwagi. Dlatego polecamy wizytę w <b>Mento Care</b>, gdzie Faustyna
              zadba o cerę:
            </p>
            <ul className="text-[14px] text-white mt-[12px] font-light ml-[24px] list-disc">
              <li>oczyści ją z zanieczyszczeń,</li>
              <li>nawilży i odświeży,</li>
              <li>
                przygotuje skórę do tego, by wyglądała zdrowo i promiennie w
                dniu ślubu.
              </li>
            </ul>
            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              Dzień przed weselem – finałowe przygotowania
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Na dzień przed tym wielkim wydarzeniem zaplanuj wizytę w Mento:
            </p>
            <ul className="text-[14px] text-white mt-[12px] font-light ml-[24px] list-disc">
              <li>
                wykonamy <b>ślubne strzyżenie</b>,
              </li>
              <li>zadbamy o brodę i kontury,</li>
              <li>
                zrobimy <b>zabieg pielęgnacyjny na twarz</b>, który nada skórze
                świeżości i blasku.
              </li>
            </ul>
            <p className="text-[14px] text-white mt-[12px] font-light">
              To moment, w którym dopieszczamy każdy detal – Ty możesz się
              zrelaksować, a my zadbamy o perfekcyjny efekt.
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              W dniu ślubu – tylko stylizacja
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              W dzień ceremonii nie ma czasu na długie zabiegi. Wystarczy, że:
            </p>
            <ul className="text-[14px] text-white mt-[12px] font-light ml-[24px] list-disc">
              <li>
                w domu weźmiesz prysznic, aby spłukać ewentualne resztki włosów
                po wczorajszym strzyżeniu,
              </li>
              <li>
                przyjdziesz do nas na <b>samą stylizację włosów i brody</b>,
              </li>
              <li>
                pojawisz się w koszuli lub ubraniu, które nie wymaga zakładania
                przez głowę – unikniesz psucia fryzury.
              </li>
            </ul>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Wtedy w pełnym spokoju, bez nerwów, będziesz gotowy, aby
              powiedzieć sakramentalne &quot;tak&quot;.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[24px] text-prime font-bold">
              💈 Podsumowanie:
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light mb-[42px]">
              Przygotowania pana młodego do ślubu to nie tylko garnitur i spinki
              do mankietów. To także plan pielęgnacyjny, który zaczyna się
              <b> minimum 6 tygodni wcześniej</b> i kończy się tuż przed
              ceremonią. W Mento zadbamy o każdy szczegół – fryzurę, brodę i
              skórę – tak, byś w dniu ślubu wyglądał i czuł się TOP!
            </p>
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

export default BlogNewHaircuts;
