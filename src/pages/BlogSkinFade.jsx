// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.png";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import Blog5 from "../assets/haircut2.png";

const BlogSkinFade = () => {
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
                src={Blog5}
                alt="panel"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-[12px] text-white mt-[32px] font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[6px]">
              Jak zapobiegać łysieniu, gdy geny nie sprzyjają?
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Łysienie to częsty problem u mężczyzn. Jeśli w Twojej rodzinie
              tata, dziadek czy wujkowie wcześnie tracili włosy, istnieje duże
              prawdopodobieństwo, że u Ciebie będzie podobnie. Ale to wcale nie
              oznacza, że musisz pogodzić się z losem. Dzięki nowoczesnym
              zabiegom możesz działać prewencyjnie i zatrzymać włosy na dłużej.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[32px] text-prime font-bold">
              Mezoterapia igłowa Dr.CYJ – co to właściwie jest?
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Brzmi skomplikowanie, ale zasada jest prosta:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc">
              <li>
                za pomocą bardzo cienkiej igły podaje się w skórę głowy
                specjalny <b>koktajl peptydów i składników odżywczych</b>,
              </li>
              <li>
                zabieg pobudza krążenie, odżywia cebulki i stymuluje wzrost
                włosów,
              </li>
              <li>
                działa tam, gdzie żadne szampony czy odżywki nie są w stanie
                dotrzeć – bezpośrednio do mieszka włosowego.
              </li>
            </ul>
            <p className="text-[16px] text-white mt-[12px] font-light">
              👉 To jak &quot;doping&quot; dla włosów – dostają energię do
              wzrostu i dłużej utrzymują swoją siłę.
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              Mikronakłuwanie z egzosomami – regeneracja na poziomie komórkowym
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Tutaj zamiast wstrzykiwania używa się specjalnego urządzenia z
              mikroigiełkami, które robią w skórze bardzo drobne nakłucia.
              Dzięki temu:
            </p>
            <ul className="text-[16px] text-white mt-[12px] font-light ml-[24px] list-disc">
              <li>skóra dostaje sygnał, żeby się regenerować,</li>
              <li>
                mieszki włosowe lepiej wchłaniają podawane w trakcie zabiegu
                <b>egzosomy</b> – nowoczesne cząsteczki, które wspierają
                odbudowę i wzrost włosów,
              </li>
              <li>poprawia się ukrwienie i dotlenienie skóry głowy.</li>
            </ul>
            <p className="text-[16px] text-white mt-[12px] font-light">
              👉 Można to porównać do &quot;resetu&quot; dla skóry – pobudzasz
              ją, a ona zaczyna pracować lepiej.
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              Dlaczego warto zacząć wcześniej?
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Jeśli wiesz, że masz &quot;gen do łysienia&quot;, nie czekaj, aż
              włosy zaczną wypadać garściami. Profilaktyka działa tylko wtedy,
              gdy w porę zadbasz o mieszki włosowe.
            </p>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Łatwiej jest <b>utrzymać to, co masz</b>, niż odzyskać włosy,
              które już wypadły.
            </p>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Regularne zabiegi + pielęgnacja = włosy pozostają gęste i mocne na
              dłużej.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <p className="text-[16px] text-white font-light">
              💡 <b>Pro Tip:</b> Im szybciej zaczniesz działać, tym większe masz
              szanse, żeby zachować gęste włosy na długie lata. To inwestycja w
              Twój wygląd i pewność siebie.
            </p>
            <p className="text-[16px] text-white mt-[12px] font-light mb-[42px]">
              Umów się na konsultację do Mento Care aby dowiedzieć się więcej:{" "}
              <a
                href="http://mentocare.booksy.com"
                className="text-prime underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://mentocare.booksy.com
              </a>
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
                src={Blog5}
                alt="panel"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-[12px] text-white mt-[32px] font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[6px]">
              Jak zapobiegać łysieniu, gdy geny nie sprzyjają?
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Łysienie to częsty problem u mężczyzn. Jeśli w Twojej rodzinie
              tata, dziadek czy wujkowie wcześnie tracili włosy, istnieje duże
              prawdopodobieństwo, że u Ciebie będzie podobnie. Ale to wcale nie
              oznacza, że musisz pogodzić się z losem. Dzięki nowoczesnym
              zabiegom możesz działać prewencyjnie i zatrzymać włosy na dłużej.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[24px] text-prime font-bold">
              Mezoterapia igłowa Dr.CYJ – co to właściwie jest?
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Brzmi skomplikowanie, ale zasada jest prosta:
            </p>
            <ul className="text-[14px] text-white mt-[12px] font-light ml-[24px] list-disc">
              <li>
                za pomocą bardzo cienkiej igły podaje się w skórę głowy
                specjalny <b>koktajl peptydów i składników odżywczych</b>,
              </li>
              <li>
                zabieg pobudza krążenie, odżywia cebulki i stymuluje wzrost
                włosów,
              </li>
              <li>
                działa tam, gdzie żadne szampony czy odżywki nie są w stanie
                dotrzeć – bezpośrednio do mieszka włosowego.
              </li>
            </ul>
            <p className="text-[14px] text-white mt-[12px] font-light">
              👉 To jak &quot;doping&quot; dla włosów – dostają energię do
              wzrostu i dłużej utrzymują swoją siłę.
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              Mikronakłuwanie z egzosomami – regeneracja na poziomie komórkowym
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Tutaj zamiast wstrzykiwania używa się specjalnego urządzenia z
              mikroigiełkami, które robią w skórze bardzo drobne nakłucia.
              Dzięki temu:
            </p>
            <ul className="text-[14px] text-white mt-[12px] font-light ml-[24px] list-disc">
              <li>skóra dostaje sygnał, żeby się regenerować,</li>
              <li>
                mieszki włosowe lepiej wchłaniają podawane w trakcie zabiegu
                <b>egzosomy</b> – nowoczesne cząsteczki, które wspierają
                odbudowę i wzrost włosów,
              </li>
              <li>poprawia się ukrwienie i dotlenienie skóry głowy.</li>
            </ul>
            <p className="text-[14px] text-white mt-[12px] font-light">
              👉 Można to porównać do &quot;resetu&quot; dla skóry – pobudzasz
              ją, a ona zaczyna pracować lepiej.
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              Dlaczego warto zacząć wcześniej?
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Jeśli wiesz, że masz &quot;gen do łysienia&quot;, nie czekaj, aż
              włosy zaczną wypadać garściami. Profilaktyka działa tylko wtedy,
              gdy w porę zadbasz o mieszki włosowe.
            </p>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Łatwiej jest <b>utrzymać to, co masz</b>, niż odzyskać włosy,
              które już wypadły.
            </p>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Regularne zabiegi + pielęgnacja = włosy pozostają gęste i mocne na
              dłużej.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <p className="text-[14px] text-white font-light">
              💡 <b>Pro Tip:</b> Im szybciej zaczniesz działać, tym większe masz
              szanse, żeby zachować gęste włosy na długie lata. To inwestycja w
              Twój wygląd i pewność siebie.
            </p>
            <p className="text-[14px] text-white mt-[12px] font-light mb-[42px]">
              Umów się na konsultację do Mento Care aby dowiedzieć się więcej:{" "}
              <a
                href="http://mentocare.booksy.com"
                className="text-prime underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://mentocare.booksy.com
              </a>
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

export default BlogSkinFade;
