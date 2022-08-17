// import bg_desktop from "../../assets/img/header/bg_1200x859.jpg";
// import Logo from "../../assets/img/logo-white.png";
import bg_desktop from '../../user/assets/img/header/bg_1200x859.jpg';
import Logo from '../../user/assets/img/logo-white.png';

export const LogoImg = () => {
  return (
    <img
      className="h-16 mobile:h-13 mx-auto my-4"
      src={Logo}
      alt="Araktek Logo"
    />
  );
};

export const Background = () => {
  return (
    <div className="relative">
      <img
        className="w-screen h-screen object-cover"
        src={bg_desktop}
        alt="1200x859"
      />
    </div>
  );
};

export const LoginHeader = () => {
  return (
    <div className="flex items-start my-12 flex-col">
      <p className="text-4xl font-dge_bold cursor-default text-white">
        Welcome to Araktek CMS
      </p>
      <p className="text-xs py-1 leading-loose text-center cursor-default text-gray-300">
        Log in to your account.
      </p>
    </div>
  );
};

export const LoginFooter = () => {
  return (
    <div className="flex justify-center text-white flex-row text-sm my-8">
      <p className="hover:underline cursor-pointer">Contact</p>
      <span className="mx-3">•</span>
      <p className="hover:underline cursor-pointer">Privacy</p>
    </div>
  );
};

export const LoginForm = ({ children }) => {
  return (
    <div className="absolute inset-0">
      <div className="container mx-auto mt-28">
        <div className="my-12">
          <LogoImg />
        </div>
        <div className="border border-gray-100 w-[55vh] mx-auto bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export const InputClass = `h-12 w-full border-0 text-white bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 focus:ring-0 focus:border focus:border-white placeholder:text-white placeholder:font-thin`;

export const ButtonClass = `bg-zinc-900 w-full text-white py-2 my-6 text-xl font-bold rounded-md hover:bg-transparent hover:outline hover:outline-1 hover:outline-white`;

export const EyeIcon = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="#fff"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
};

export const EyeOffIcon = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="#fff"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
      />
    </svg>
  );
};
