import logoimg from "../../assets/img/logo-black.png";

export const BrandLogo = () => {
  return <img className="h-14 mobile:h-13" src={logoimg} alt="Araktek Logo" />;
};

// Icons
export const HeartFilledIcon = () => {
  return (
    <svg
      version="1.1"
      xmlns="https://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 64 64"
    >
      <path
        d="M47.199 4c-6.727 0-12.516 5.472-15.198 11.188-2.684-5.715-8.474-11.188-15.201-11.188-9.274 0-16.8 7.527-16.8 16.802 0 18.865 19.031 23.812 32.001 42.464 12.26-18.536 31.999-24.2 31.999-42.464 0-9.274-7.527-16.802-16.801-16.802z"
        fill="#282827"
      ></path>
    </svg>
  );
};

export const HeartIcon = () => {
  return (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 64 64"
    >
      <path
        stroke="#282827"
        strokeWidth="4"
        fillOpacity="0"
        d="M45.684,2.654c-6.057,0-11.27,4.927-13.684,10.073 c-2.417-5.145-7.63-10.073-13.687-10.073c-8.349,0-15.125,6.776-15.125,15.127c0,16.983,17.134,21.438,28.812,38.231 c11.038-16.688,28.811-21.787,28.811-38.231C60.811,9.431,54.033,2.654,45.684,2.654z"
      ></path>
    </svg>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
    >
      <path
        fill="#282827"
        d="M1.594 8.03a6.443 6.443 0 0 1 6.432-6.436c8.532.355 8.527 12.519 0 12.874A6.443 6.443 0 0 1 1.594 8.03zm12.4 5C18.239 8.098 14.589.176 8.026.23A7.8 7.8 0 0 0 .23 8.026c-.054 6.563 7.868 10.213 12.8 5.968l5.582 5.582a.682.682 0 0 0 .964-.964z"
      ></path>
    </svg>
  );
};

export const CartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-4"
      viewBox="0 0 16 20"
    >
      <path
        fill="#282827"
        d="M1.73 18.41l.818-12.274h11.273l.818 12.273zM5.526 4.25c.258-3.86 5.69-3.35 5.308.54H5.526zm9.613 1.177a.682.682 0 0 0-.681-.636h-2.25c.29-6.055-8.337-6.055-8.046 0h-2.25a.682.682 0 0 0-.682.636L.321 19.064a.686.686 0 0 0 .682.727h14.364a.686.686 0 0 0 .681-.727z"
      ></path>
    </svg>
  );
};

export const UserIcon = () => {
  return (
    // <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5' viewBox="0 0 19 20">
    //   <path fill="#282827" d="M5.573 5.566a3.977 3.977 0 0 1 3.972-3.972c5.264.209 5.264 7.727 0 7.94a3.977 3.977 0 0 1-3.972-3.968zm6.922 4.437C16.841 7.126 14.832.253 9.545.23 4.26.207 2.273 7.126 6.595 10.003A9.573 9.573 0 0 0 0 19.093a.682.682 0 1 0 1.364 0 8.182 8.182 0 1 1 16.363 0 .682.682 0 1 0 1.364 0 9.573 9.573 0 0 0-6.596-9.09z"></path>
    // </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="-0.5 -0.5 21.5 21.5"
    >
      <circle
        fill="#fff"
        stroke="#000"
        strokeWidth="1.3"
        cx="10.5"
        cy="5.5"
        r="5"
      />
      <path
        fill="#fff"
        stroke="#000"
        strokeWidth="1.3"
        d="M13.183 11.5H7.817A7.317 7.317 0 0 0 .5 18.817 1.683 1.683 0 0 0 2.183 20.5h16.634a1.683 1.683 0 0 0 1.683-1.683 7.317 7.317 0 0 0-7.317-7.317Z"
      />
    </svg>
  );
};

export const UserRegIcon = () => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-5 w-5"
    //   viewBox="0 0 19 20"
    // >
    //   <path
    //     fill="#B2CB07"
    //     d="M5.573 5.566a3.977 3.977 0 0 1 3.972-3.972c5.264.209 5.264 7.727 0 7.94a3.977 3.977 0 0 1-3.972-3.968zm6.922 4.437C16.841 7.126 14.832.253 9.545.23 4.26.207 2.273 7.126 6.595 10.003A9.573 9.573 0 0 0 0 19.093a.682.682 0 1 0 1.364 0 8.182 8.182 0 1 1 16.363 0 .682.682 0 1 0 1.364 0 9.573 9.573 0 0 0-6.596-9.09z"
    //   ></path>
    // </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="-0.5 -0.5 21.5 21.5"
    >
      <circle cx="10.5" cy="5.5" r="5" />
      <path d="M13.183 11.5H7.817A7.317 7.317 0 0 0 .5 18.817 1.683 1.683 0 0 0 2.183 20.5h16.634a1.683 1.683 0 0 0 1.683-1.683 7.317 7.317 0 0 0-7.317-7.317Z" />
    </svg>
  );
};

export const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-5"
      viewBox="0 0 17 14"
    >
      <g>
        <g>
          <g>
            <path fill="#282827" d="M0 0h17v1.5H0z"></path>
          </g>
          <g>
            <path fill="#282827" d="M0 5.95h17v1.5H0z"></path>
          </g>
          <g>
            <path fill="#282827" d="M0 11.9h17v1.5H0z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

// export const LoginIcon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       class="h-6 w-6"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       stroke-width="1.3"
//     >
//       <path
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
//       />
//     </svg>
//   );
// };

// export const LogoutIcon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       class="h-6 w-6"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       stroke-width="1.3"
//     >
//       <path
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//       />
//     </svg>
//   );
// };
