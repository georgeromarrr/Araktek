import bg_desktop from "../img/header/bg_1920x859.jpg";
import bg_laptop from "../img/header/bg_1200x859.jpg";
import bg_tablet from "../img/header/bg_770x785.jpg";
import bg_mobile from "../img/header/bg_425x785.jpg";

export const HeaderTitle = ({ children }) => {
  return (
    <div>
      {/* desktop view */}
      <div className="relative laptop:hidden tablet:hidden mobile:hidden">
        <img className="w-full" src={bg_desktop} alt="1920x859" />

        <div className="absolute top-[35%] w-full text-center px-3">
          <div className="text-white">
            <h1 className="text-8xl font-bold pb-4">Wanna treat yo' self?</h1>
            <p className="text-xl">
              Browse and shop through our Pre-built PC, Peripherals, and
              Collectibles!
            </p>
          </div>

          {children}
        </div>
      </div>

      {/* laptop view */}
      <div className="relative hidden laptop:block tablet:hidden mobile:hidden">
        <img className="w-full" src={bg_laptop} alt="1200x859" />

        <div className="absolute top-[35%] w-full text-center px-3">
          <div className="text-white">
            <h1 className="text-7xl font-bold pb-4">Wanna treat yo' self?</h1>
            <p className="text-base">
              Browse and shop through our Pre-built PC, Peripherals, and
              Collectibles!
            </p>
          </div>

          {children}
        </div>
      </div>

      {/* tablet view */}
      <div className="relative hidden tablet:block mobile:hiden">
        <img className="w-full" src={bg_tablet} alt="770x785" />

        <div className="absolute top-[35%] w-full text-center px-3">
          <div className="text-white">
            <h1 className="text-6xl font-bold pb-4">Wanna treat yo' self?</h1>
            <p className="text-sm">
              Browse and shop through our Pre-built PC, Peripherals, and
              Collectibles!
            </p>
          </div>

          {children}
        </div>
      </div>

      {/* mobile view */}
      <div className="relative hidden mobile:block">
        <img className="w-full" src={bg_mobile} alt="425x785" />

        <div className="absolute top-[35%] w-full text-center px-3">
          <div className="text-white">
            <h1 className="text-6xl font-bold pb-5">Wanna treat yo' self?</h1>
            <p className="text-sm">
              Browse and shop through our Pre-built PC, Peripherals, and
              Collectibles!
            </p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};
