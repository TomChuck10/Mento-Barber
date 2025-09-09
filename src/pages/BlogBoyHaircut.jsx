// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.png";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import Blog1 from "../assets/blog1.jpg";

const BlogBoyHaircut = () => {
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
                src={Blog1}
                alt="panel"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-[12px] text-white mt-[32px] font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[6px]">
              Co ile powinienem chodzić do barbera na strzyżenie?
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              To jedno z najczęstszych pytań, które słyszymy w barbershopie.
              Odpowiedź nie jest jednak taka sama dla każdego – wszystko zależy
              od tego, jak szybko rosną Twoje włosy, jaką fryzurę nosisz i jak
              chcesz wyglądać na co dzień.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] mt-[12px] mb-[24px]">
              {[
                boy1,
                boy2,
                boy3,
                boy4,
                boy5,
                boy6,
                boy7,
                boy8,
                boy9,
                boy10,
                boy11,
                boy12,
              ].map((boy, index) => (
                <div
                  key={index}
                  className="w-full h-[500px] bg-gray-300 rounded-[6px] overflow-hidden"
                >
                  <img
                    src={boy}
                    alt={`boy${index + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </div> */}
            <h1 className="text-[32px] text-prime font-bold">
              1. Krótkie fryzury (fade, buzz cut, crew cut)
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Jeśli wybierasz krótkie cięcia, szczególnie z cieniowaniem od
              zera, to włosy zaczynają tracić kształt już po 2 tygodniach.
              <br />
              <span>
                👉 Optymalna częstotliwość: <b>co 2–3 tygodnie.</b>
              </span>
            </p>

            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              2. Średnie długości (side part, french crop, klasyki)
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Przy średniej długości włosów fryzura jest bardziej wyrozumiała.
              Możesz chodzić rzadziej, ale wciąż warto dbać o linie i kontury.
              <br />
              <span>
                👉 Optymalna częstotliwość: <b>co 3–4 tygodnie.</b>
              </span>
            </p>

            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              3. Długie włosy
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Dłuższe fryzury wymagają mniej częstych wizyt, ale trzeba je
              regularnie podcinać, aby zachować zdrowe końcówki i kształt.
              <br />
              <span>
                👉 Optymalna częstotliwość: <b>co 6–8 tygodni.</b>
              </span>
            </p>

            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              4. Broda – nie zapominaj o niej!
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Jeśli nosisz brodę, to tak samo jak fryzura potrzebuje regularnego
              korygowania. Nierówne linie psują cały efekt.
              <br />
              <span>
                👉 Optymalna częstotliwość: <b>co 2–3 tygodnie</b> (w zależności
                od tempa wzrostu).
              </span>
            </p>

            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              Dlaczego warto trzymać się regularności?
            </h1>
            <ul className="text-[16px] text-white mt-[12px] font-light list-disc list-inside">
              <li>fryzura zawsze wygląda świeżo,</li>
              <li>włosy i broda są łatwiejsze w codziennej stylizacji,</li>
              <li>
                unikasz &ldquo;okresu przejściowego&rdquo;, w którym wyglądają
                niechlujnie,
              </li>
              <li>dbasz o kondycję włosów i skóry głowy.</li>
            </ul>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[32px] text-prime font-bold">
              💈 Podsumowanie:
            </h1>
            <p className="text-[16px] text-white mt-[12px] mb-[42px] font-light">
              Nie ma jednej złotej zasady dla wszystkich. Najprościej
              zapamiętać:
              <br />
              <br />
              <span className="font-semibold">krótko = częściej,</span>
              <br />
              <span className="font-semibold">długo = rzadziej.</span>
              <br />
              <br />
              Ale jeśli chcesz wyglądać perfekcyjnie każdego dnia – regularne
              wizyty u barbera to najlepsza inwestycja w Twój wizerunek.
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
        <div className="flex items-center justify-center mt-[100px] mb-[5%] overflow-hidden">
          <div
            className="w-full bg-[#171D1F] flex flex-col p-[32px] m-[16px] rounded-[10px] z-10"
            style={{ boxShadow: "0px 8px 10px #00000099" }}
          >
            <div className="h-[200px] rounded-[6px] overflow-hidden flex justify-center items-center">
              <img
                src={Blog1}
                alt="panel"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-[12px] text-white mt-[32px] font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[6px]">
              Co ile powinienem chodzić do barbera na strzyżenie?
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              To jedno z najczęstszych pytań, które słyszymy w barbershopie.
              Odpowiedź nie jest jednak taka sama dla każdego – wszystko zależy
              od tego, jak szybko rosną Twoje włosy, jaką fryzurę nosisz i jak
              chcesz wyglądać na co dzień.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            {/* <div className="grid grid-cols-2 gap-[16px] mt-[12px] mb-[24px]">
              {[
                boy1,
                boy2,
                boy3,
                boy4,
                boy5,
                boy6,
                boy7,
                boy8,
                boy9,
                boy10,
                boy11,
                boy12,
              ].map((boy, index) => (
                <div
                  key={index}
                  className="w-full h-[350px] bg-gray-300 rounded-[6px] overflow-hidden"
                >
                  <img
                    src={boy}
                    alt={`boy${index + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </div> */}
            <h1 className="text-[24px] text-prime font-bold">
              1. Krótkie fryzury (fade, buzz cut, crew cut)
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Jeśli wybierasz krótkie cięcia, szczególnie z cieniowaniem od
              zera, to włosy zaczynają tracić kształt już po 2 tygodniach.
              <br />
              <span>
                👉 Optymalna częstotliwość: <b>co 2–3 tygodnie.</b>
              </span>
            </p>

            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              2. Średnie długości (side part, french crop, klasyki)
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Przy średniej długości włosów fryzura jest bardziej wyrozumiała.
              Możesz chodzić rzadziej, ale wciąż warto dbać o linie i kontury.
              <br />
              <span>
                👉 Optymalna częstotliwość: <b>co 3–4 tygodnie.</b>
              </span>
            </p>

            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              3. Długie włosy
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Dłuższe fryzury wymagają mniej częstych wizyt, ale trzeba je
              regularnie podcinać, aby zachować zdrowe końcówki i kształt.
              <br />
              <span>
                👉 Optymalna częstotliwość: <b>co 6–8 tygodni.</b>
              </span>
            </p>

            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              4. Broda – nie zapominaj o niej!
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Jeśli nosisz brodę, to tak samo jak fryzura potrzebuje regularnego
              korygowania. Nierówne linie psują cały efekt.
              <br />
              <span>
                👉 Optymalna częstotliwość: <b>co 2–3 tygodnie</b> (w zależności
                od tempa wzrostu).
              </span>
            </p>

            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              Dlaczego warto trzymać się regularności?
            </h1>
            <ul className="text-[14px] text-white mt-[12px] font-light list-disc list-inside">
              <li>fryzura zawsze wygląda świeżo,</li>
              <li>włosy i broda są łatwiejsze w codziennej stylizacji,</li>
              <li>
                unikasz &ldquo;okresu przejściowego&rdquo;, w którym wyglądają
                niechlujnie,
              </li>
              <li>dbasz o kondycję włosów i skóry głowy.</li>
            </ul>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[24px] text-prime font-bold">
              💈 Podsumowanie:
            </h1>
            <p className="text-[14px] text-white mt-[12px] mb-[42px] font-light">
              Nie ma jednej złotej zasady dla wszystkich. Najprościej
              zapamiętać:
              <br />
              <br />
              <span className="font-semibold">krótko = częściej,</span>
              <br />
              <span className="font-semibold">długo = rzadziej.</span>
              <br />
              <br />
              Ale jeśli chcesz wyglądać perfekcyjnie każdego dnia – regularne
              wizyty u barbera to najlepsza inwestycja w Twój wizerunek.
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

export default BlogBoyHaircut;
