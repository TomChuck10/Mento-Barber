// Project imports
import Navbar from "../components/Navbar";
import Texture from "../assets/texture.png";
import Gradient from "../assets/gradient.svg";
import { useIsMobile } from "../Hooks/useIsMobile";
import Blog6 from "../assets/blog6.jpg";

const BlogBeardDandruff = () => {
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
                src={Blog6}
                alt="panel"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-[12px] text-white mt-[32px] font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[6px]">
              Stylizacja włosów – jak to zrobić dobrze?
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              Dobra fryzura to połowa sukcesu, ale bez odpowiedniej stylizacji
              nawet najlepsze cięcie nie pokaże swojego potencjału. Wielu
              facetów uważa, że to skomplikowane i czasochłonne, a prawda jest
              taka, że wystarczy 5 minut rano, żeby włosy wyglądały świetnie
              przez cały dzień.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[32px] text-prime font-bold">
              Co będzie Ci potrzebne?
            </h1>
            <p className="text-[16px] text-white mt-[12px] font-light">
              <b>1. Tonik do włosów</b> – np. Reuzel Grooming Tonic, który daje
              lekkie utrwalenie, chroni włosy przed ciepłem suszarki i ułatwia
              stylizację.
            </p>
            <p className="text-[16px] text-white mt-[12px] font-light">
              <b>2. Produkt do wykończenia fryzury</b> – tu wybór zależy od
              efektu, jaki chcesz uzyskać:
            </p>
            <ul className="list-disc text-[16px] text-white my-[12px] ml-[20px] font-light">
              <li>
                <b>Pomada z połyskiem</b> – idealna do klasycznych, eleganckich
                fryzur.
              </li>
              <li>
                <b>Pomada matowa</b> – naturalny efekt bez świecenia, świetna do
                codziennego looku.
              </li>
              <li>
                <b>Puder do włosów</b> – jeśli potrzebujesz więcej objętości i
                lekkiego uniesienia.
              </li>
            </ul>
            <p className="text-[16px] text-white mt-[12px] font-light">
              <b>3. Suszarka</b> – nie musi być profesjonalna, ale ważne, żeby
              używać średniego nawiewu.
            </p>
            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              Krok po kroku – szybka stylizacja
            </h1>
            <ol className="list-decimal text-[16px] text-white my-[12px] ml-[15px] font-light">
              <li>
                <b>Na mokre włosy</b> nałóż niewielką ilość toniku.
              </li>
              <li>
                <b>Susz włosy suszarką</b> przez kilka minut, układając je
                dłonią lub szczotką w wybranym kierunku.
              </li>
              <li>
                <b>Nałóż wybrany produkt</b> (pomadę lub puder) – pamiętaj, żeby
                zacząć od małej ilości, zawsze możesz dołożyć więcej.
              </li>
              <li>
                <b>Utrwal fryzurę</b> ruchem dłoni lub grzebienia – zależnie od
                tego, czy chcesz efekt elegancki, czy bardziej swobodny.
              </li>
            </ol>
            <h1 className="text-[32px] text-prime font-bold mt-[32px]">
              Dlaczego warto poświęcić te 5 minut?
            </h1>
            <ul className="list-disc text-[16px] text-white my-[12px] ml-[20px] font-light">
              <li>fryzura wygląda świeżo i schludnie przez cały dzień,</li>
              <li>włosy są łatwiejsze w kontrolowaniu,</li>
              <li>dobrze dobrany produkt chroni włosy przed wysuszeniem,</li>
              <li>wyglądasz po prostu lepiej i bardziej pewnie.</li>
            </ul>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <div className="text-[16px] text-white font-light mb-[42px]">
              <span className="text-[20px]">💈</span> <b>Podsumowanie:</b>
              <br />
              Stylizacja włosów to nie magia ani strata czasu. Wystarczy{" "}
              <b>tonik, suszarka i dobrze dobrana pomada albo puder</b>, żeby w
              kilka minut stworzyć fryzurę, która podkreśli Twój styl. A jeśli
              nie wiesz, który produkt będzie najlepszy dla Ciebie – w Mento
              dobierzemy kosmetyki i pokażemy, jak ich używać.
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
                src={Blog6}
                alt="panel"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-[12px] text-white mt-[32px] font-light">
              Dodano: 09.09.2025
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[6px]">
              Stylizacja włosów – jak to zrobić dobrze?
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              Dobra fryzura to połowa sukcesu, ale bez odpowiedniej stylizacji
              nawet najlepsze cięcie nie pokaże swojego potencjału. Wielu
              facetów uważa, że to skomplikowane i czasochłonne, a prawda jest
              taka, że wystarczy 5 minut rano, żeby włosy wyglądały świetnie
              przez cały dzień.
            </p>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <h1 className="text-[24px] text-prime font-bold">
              Co będzie Ci potrzebne?
            </h1>
            <p className="text-[14px] text-white mt-[12px] font-light">
              <b>1. Tonik do włosów</b> – np. Reuzel Grooming Tonic, który daje
              lekkie utrwalenie, chroni włosy przed ciepłem suszarki i ułatwia
              stylizację.
            </p>
            <p className="text-[14px] text-white mt-[12px] font-light">
              <b>2. Produkt do wykończenia fryzury</b> – tu wybór zależy od
              efektu, jaki chcesz uzyskać:
            </p>
            <ul className="list-disc text-[14px] text-white my-[12px] ml-[20px] font-light">
              <li>
                <b>Pomada z połyskiem</b> – idealna do klasycznych, eleganckich
                fryzur.
              </li>
              <li>
                <b>Pomada matowa</b> – naturalny efekt bez świecenia, świetna do
                codziennego looku.
              </li>
              <li>
                <b>Puder do włosów</b> – jeśli potrzebujesz więcej objętości i
                lekkiego uniesienia.
              </li>
            </ul>
            <p className="text-[14px] text-white mt-[12px] font-light">
              <b>3. Suszarka</b> – nie musi być profesjonalna, ale ważne, żeby
              używać średniego nawiewu.
            </p>
            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              Krok po kroku – szybka stylizacja
            </h1>
            <ol className="list-decimal text-[14px] text-white my-[12px] ml-[15px] font-light">
              <li>
                <b>Na mokre włosy</b> nałóż niewielką ilość toniku.
              </li>
              <li>
                <b>Susz włosy suszarką</b> przez kilka minut, układając je
                dłonią lub szczotką w wybranym kierunku.
              </li>
              <li>
                <b>Nałóż wybrany produkt</b> (pomadę lub puder) – pamiętaj, żeby
                zacząć od małej ilości, zawsze możesz dołożyć więcej.
              </li>
              <li>
                <b>Utrwal fryzurę</b> ruchem dłoni lub grzebienia – zależnie od
                tego, czy chcesz efekt elegancki, czy bardziej swobodny.
              </li>
            </ol>
            <h1 className="text-[24px] text-prime font-bold mt-[32px]">
              Dlaczego warto poświęcić te 5 minut?
            </h1>
            <ul className="list-disc text-[14px] text-white my-[12px] ml-[20px] font-light">
              <li>fryzura wygląda świeżo i schludnie przez cały dzień,</li>
              <li>włosy są łatwiejsze w kontrolowaniu,</li>
              <li>dobrze dobrany produkt chroni włosy przed wysuszeniem,</li>
              <li>wyglądasz po prostu lepiej i bardziej pewnie.</li>
            </ul>
            <hr className="border-[white] opacity-5 my-[32px]" />
            <div className="text-[14px] text-white font-light mb-[42px]">
              <span className="text-[18px]">💈</span> <b>Podsumowanie:</b>
              <br />
              Stylizacja włosów to nie magia ani strata czasu. Wystarczy{" "}
              <b>tonik, suszarka i dobrze dobrana pomada albo puder</b>, żeby w
              kilka minut stworzyć fryzurę, która podkreśli Twój styl. A jeśli
              nie wiesz, który produkt będzie najlepszy dla Ciebie – w Mento
              dobierzemy kosmetyki i pokażemy, jak ich używać.
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

export default BlogBeardDandruff;
