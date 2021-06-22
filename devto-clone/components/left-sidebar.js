export default function LeftSidebar() {
  return (
    <div>
      <div className="bg-gray-50 p-4 rounded border border-gray-300">
        <p className="font-bold mb-2 text-lg">
          <span className="text-blue-700">DEV Community</span> is a community of
          640,080 amazing developers
        </p>
        <p className="mb-4">
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </p>
        <button
          className="
              px-4
              py-2
              bg-blue-700
              text-white
              rounded
              font-semibold
              w-full
              mb-2
            "
        >
          Create new account
        </button>
        <button className="mr-2 px-4 py-2 text-blue-700 font-semibold w-full">
          Log in
        </button>
      </div>
      <div className="mt-4 mb-6">
        <a href="#" className="left-menu__link p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="24"
            height="24"
            aria-hidden="true"
            className="crayons-icon crayons-icon--default mr-2"
          >
            <g className="nc-icon-wrapper">
              <path
                fill="#A0041E"
                d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"
              ></path>
              <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
              <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
              <path
                fill="#66757F"
                d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"
              ></path>
              <path
                fill="#66757F"
                d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"
              ></path>
              <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
              <path
                fill="#55ACEE"
                d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"
              ></path>
              <path
                fill="#5C913B"
                d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"
              ></path>
            </g>
          </svg>
          <span>Home</span>
        </a>
        <a href="#" className="left-menu__link p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="24"
            height="24"
            aria-hidden="true"
            className="crayons-icon crayons-icon--default mr-2"
          >
            <g className="nc-icon-wrapper">
              <path
                fill="#EF9645"
                d="M21 22s-6.031 5.274-7.74 6.832c-1.323 1.203.88 3.498 2.135 2.452 3.333-2.785 6.493-4.85 6.493-4.85l.367.526c-1.309.79-4.693 2.858-6.449 4.438-1.324 1.19.767 3.553 2.093 2.365 1.822-1.634 5.995-4.565 5.995-4.565l.368.384c-1.08.679-2.772 1.94-4.985 3.958-1.332 1.215.619 2.485 1.764 1.534 3.116-2.586 3.232-4.383 6.661-5.85C32.935 26.986 21 22 21 22z"
              ></path>
              <path
                fill="#FFCC4D"
                d="M33.979 12.836c.881-.438 1.653.144 2.106 1.053.448.911 2.532 5.015 2.953 5.869.425.852.191 2.103-.719 2.553-.911.453-2.234 1.054-3.092 2.512-.465.794-2.396 2.887-7.629 5.129-3.427 1.462-6.165 3.938-7.261 4.8-.886.698-2.673-.637-1.343-1.85 2.214-2.02 3.906-3.281 4.985-3.958l-.368-.386s-4.381 3.056-6.238 4.65c-1.261 1.085-2.938-.953-1.613-2.142 1.757-1.58 4.902-3.954 6.211-4.744l-.366-.529s-3.43 2.231-6.765 5.02c-1.113.93-2.847-1.159-1.525-2.364 1.71-1.555 5.043-4.343 7.093-5.499l-.196-.609s-3.218 1.805-5.996 4.494c-.994.961-2.974-.818-1.525-2.293 3.462-3.522 7.958-5.609 9.154-6.413 1.606-1.08 2.451-1.754 1.606-2.133-1.274-.573-3.396-2.582-4.21-4.21-1.053-2.106.44-3.77 2.105-2.106 1.053 1.053 3.159 3.158 5.263 3.158 2.829 0 3.262 1.053 5.264 1.053 1.054-.002 2.106-1.055 2.106-1.055"
              ></path>
              <path
                fill="#EF9645"
                d="M29.048 19.167c-.334.001-1.439-.15-2.684-.725-1.073-.494-1.905-1.39-2.597-2.142.039.161-.065.354-.283.58.681.792 1.723 1.696 2.654 2.146 1.082.525 2.315.79 2.871.767.572-.024.385-.622.039-.626zm2.167 8.58c-2.264-1.054-4.062-1.934-.974-.66 1.277.525 3.194-2.06 1.315-2.917C27.774 22.444 16 16 16 16s-6.368 7.437-5.58 7.914c.789.474 1.118 3.849 5.665 6.818 4.298 2.808 6.975 4.015 7.981 4.518 2.107 1.053 3.477-1.678 1.833-2.412-2.833-1.266-2.734-1.343 1.418.382 1.537.64 2.829-2.25 1.205-2.981-2.422-1.089-2.64-1.221 1.239.527 1.435.643 3.073-2.264 1.454-3.019z"
              ></path>
              <path
                fill="#FFDC5D"
                d="M11.09 13.278a1.808 1.808 0 00-2.485.615c-.525.871-2.828 4.683-3.319 5.5-.492.816-.364 2.079.506 2.604.87.526 2.447 1.477 3.236 1.952.789.477 4.011 4.477 8.662 7.279 4.648 2.808 6.366 3.286 7.412 3.697 1.05.41 2.437-1.683.793-2.416-2.837-1.268-4.836-2.438-5.859-3.205l.318-.585s2.837 2.12 6.987 3.848c1.537.64 2.79-1.754 1.167-2.487-2.423-1.089-5.412-2.894-6.651-3.79l.346-.571s3.946 2.494 7.825 4.242c1.431.645 2.632-1.786 1.013-2.542-2.26-1.054-5.448-2.955-7.394-4.277l.338-.5s3.615 2.551 6.705 3.823c1.277.528 2.78-1.861.899-2.721C27.81 22.019 23.525 19 22.401 18.1c-.918-.737-1.181-2.413 1.052-3.158 3.158-1.053 4.211-3.158 4.211-4.211 0-1.489-1.376-2.146-2.104-1.053-2.107 3.158-3.166 2.082-5.263 3.158-2.514 1.291-5.466 2.662-7.179 1.628-.733-.441-2.028-1.186-2.028-1.186"
              ></path>
              <path
                fill="#FFCC4D"
                d="M22.948 15.721l5.426-2.712a8.282 8.282 0 00-1.763-.172c-2.104 0-4.21-2.105-5.263-3.158-1.665-1.664-3.158 0-2.105 2.106.715 1.428 2.433 3.148 3.705 3.936z"
              ></path>
            </g>
          </svg>
          <span className="font-bold">Sign In/Up</span>
        </a>
        <a href="#" className="left-menu__link p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="24"
            height="24"
            className="mr-2"
          >
            <g className="nc-icon-wrapper">
              <path
                fill="#FFD983"
                d="M36 4H14a4 4 0 00-4 4v24H8a4 4 0 000 8h24a4 4 0 004-4V12a4 4 0 000-8z"
              ></path>
              <path fill="#E39F3D" d="M12 14h24v-2H14l-2-1z"></path>
              <path
                fill="#FFE8B6"
                d="M14 4a4 4 0 00-4 4v24.555A3.955 3.955 0 008 32a4 4 0 104 4V11.445c.59.344 1.268.555 2 .555a4 4 0 000-8z"
              ></path>
              <path
                fill="#C1694F"
                d="M16 8a2 2 0 11-4.001-.001A2 2 0 0116 8m-6 28a2 2 0 11-4.001-.001A2 2 0 0110 36m24-17a1 1 0 01-1 1H15a1 1 0 010-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1"
              ></path>
            </g>
          </svg>
          <span>Listings</span>
        </a>
        <a href="#" className="left-menu__link p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="24"
            height="24"
            className="mr-2"
          >
            <g className="nc-icon-wrapper">
              <path
                fill="#292F33"
                d="M10 19h24v2H10zm15 15c0 2.208-.792 4-3 4-2.209 0-3-1.792-3-4s.791-2 3-2c2.208 0 3-.208 3 2z"
              ></path>
              <path
                fill="#66757F"
                d="M22 35c-6.627 0-10 1.343-10 3v2h20v-2c0-1.657-3.373-3-10-3z"
              ></path>
              <path
                fill="#99AAB5"
                d="M22 4a9 9 0 00-9 9v7h18v-7a9 9 0 00-9-9z"
              ></path>
              <g fill="#292F33" transform="translate(4 4)">
                <circle cx="15.5" cy="2.5" r="1.5"></circle>
                <circle cx="20.5" cy="2.5" r="1.5"></circle>
                <circle cx="17.5" cy="6.5" r="1.5"></circle>
                <circle cx="22.5" cy="6.5" r="1.5"></circle>
                <circle cx="12.5" cy="6.5" r="1.5"></circle>
                <circle cx="15.5" cy="10.5" r="1.5"></circle>
                <circle cx="10.5" cy="10.5" r="1.5"></circle>
                <circle cx="20.5" cy="10.5" r="1.5"></circle>
                <circle cx="25.5" cy="10.5" r="1.5"></circle>
                <circle cx="17.5" cy="14.5" r="1.5"></circle>
                <circle cx="22.5" cy="14.5" r="1.5"></circle>
                <circle cx="12.5" cy="14.5" r="1.5"></circle>
              </g>
              <path
                fill="#66757F"
                d="M13 19.062V21c0 4.971 4.029 9 9 9s9-4.029 9-9v-1.938H13z"
              ></path>
              <path
                fill="#66757F"
                d="M34 18a1 1 0 00-1 1v2c0 6.074-4.925 11-11 11s-11-4.926-11-11v-2a1 1 0 00-2 0v2c0 7.18 5.82 13 13 13s13-5.82 13-13v-2a1 1 0 00-1-1z"
              ></path>
            </g>
          </svg>
          <span>Podcasts</span>
        </a>
        <a href="#" className="left-menu__link p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="24"
            height="24"
            className="mr-2"
          >
            <g transform="translate(4 4)">
              <path
                fill="#31373D"
                d="M34.074 18l-4.832 3H28v-4c0-.088-.02-.169-.026-.256C31.436 15.864 34 12.735 34 9a8 8 0 00-16.001 0c0 1.463.412 2.822 1.099 4H14.92c.047-.328.08-.66.08-1a7 7 0 10-14 0 6.995 6.995 0 004 6.317V29a4 4 0 004 4h15a4 4 0 004-4v-3h1.242l4.832 3H35V18h-.926zM28.727 3.977a5.713 5.713 0 012.984 4.961L28.18 8.35a2.276 2.276 0 00-.583-.982l1.13-3.391zm-.9 6.342l3.552.592a5.713 5.713 0 01-4.214 3.669 3.985 3.985 0 00-1.392-1.148l.625-2.19a2.425 2.425 0 001.429-.923zM26 3.285c.282 0 .557.027.828.067l-1.131 3.392c-.404.054-.772.21-1.081.446L21.42 5.592A5.703 5.703 0 0126 3.285zM20.285 9c0-.563.085-1.106.236-1.62l3.194 1.597-.002.023c0 .657.313 1.245.771 1.662L23.816 13h-1.871a5.665 5.665 0 01-1.66-4zm-9.088-.385A4.64 4.64 0 0112.667 12c0 .344-.043.677-.113 1H10.1c.145-.304.233-.641.233-1a2.32 2.32 0 00-.392-1.292l1.256-2.093zM8 7.333c.519 0 1.01.105 1.476.261L8.22 9.688c-.073-.007-.145-.022-.22-.022a2.32 2.32 0 00-1.292.392L4.615 8.803A4.64 4.64 0 018 7.333zM3.333 12c0-.519.105-1.01.261-1.477l2.095 1.257c-.007.073-.022.144-.022.22 0 .75.36 1.41.91 1.837a3.987 3.987 0 00-1.353 1.895C4.083 14.881 3.333 13.533 3.333 12z"
              ></path>
              <circle fill="#8899A6" cx="24" cy="19" r="2"></circle>
              <circle fill="#8899A6" cx="9" cy="19" r="2"></circle>
              <path
                fill="#8899A6"
                d="M24 27a2 2 0 00-2-2H11a2 2 0 00-2 2v6a2 2 0 002 2h11a2 2 0 002-2v-6z"
              ></path>
            </g>
          </svg>
          <span>Videos</span>
        </a>
        <a href="#" className="left-menu__link p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="24"
            height="24"
            className="mr-2"
          >
            <g className="nc-icon-wrapper">
              <path
                fill="#FFD983"
                d="M36.017 24.181L21.345 9.746C20.687 9.087 19.823 9 18.96 9H8.883C7.029 9 6 10.029 6 11.883v10.082c0 .861.089 1.723.746 2.38L21.3 39.017a3.287 3.287 0 004.688 0l10.059-10.088c1.31-1.312 1.28-3.438-.03-4.748zm-23.596-8.76a1.497 1.497 0 11-2.118-2.117 1.497 1.497 0 012.118 2.117z"
              ></path>
              <path
                fill="#D99E82"
                d="M13.952 11.772a3.66 3.66 0 00-5.179 0 3.663 3.663 0 105.18 5.18 3.664 3.664 0 00-.001-5.18zm-1.53 3.65a1.499 1.499 0 11-2.119-2.12 1.499 1.499 0 012.119 2.12z"
              ></path>
              <path
                fill="#C1694F"
                d="M12.507 14.501a1 1 0 11-1.415-1.414l8.485-8.485a1 1 0 111.415 1.414l-8.485 8.485z"
              ></path>
            </g>
          </svg>
          <span>Tags</span>
        </a>
        <a href="#" className="left-menu__link p-2">
          <span className="w-8"></span>
          <span className="text-sm text-gray-500">More...</span>
        </a>
      </div>
      <div>
        <span className="font-bold p-2">Popular Tags</span>
        <div style={{ maxHeight: "42vh", overflowY: "auto" }}>
          <a href="#" className="p-2 grid">
            #javascript
          </a>
          <a href="#" className="p-2 grid">
            #webdev
          </a>
          <a href="#" className="p-2 grid">
            #beginners
          </a>
          <a href="#" className="p-2 grid">
            #react
          </a>
          <a href="#" className="p-2 grid">
            #programming
          </a>
          <a href="#" className="p-2 grid">
            #tutorial
          </a>
          <a href="#" className="p-2 grid">
            #python
          </a>
          <a href="#" className="p-2 grid">
            #css
          </a>
          <a href="#" className="p-2 grid">
            #codenewbie
          </a>
        </div>
      </div>
      <div className="mt-12">
        <img
          className="rounded align-middle inline-block w-full h-auto"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--pVCMYZWJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://scontent-lga3-1.cdninstagram.com/vp/7c898e2c9e9fa71f72dd5d422d444549/5DFE1BFA/t51.2885-15/fr/e15/s1080x1080/57390242_386431405416711_440644832181536446_n.jpg%3F_nc_ht%3Dscontent-lga3-1.cdninstagram.com"
          alt="sponsors"
        />
        <p className="font-bold text-blue-700 text-center text-lg">
          Got DEV Stickers Yet?
        </p>
      </div>
    </div>
  );
}
