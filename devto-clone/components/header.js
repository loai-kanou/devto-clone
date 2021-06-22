export default function Header() {
  return (
    <header className="w-full h-14 bg-white">
      <div className="customer-header xl:container h-full mx-auto px-4">
        <div>
          <svg
            width="50"
            height="40"
            viewBox="0 0 50 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="50"
              height="40"
              rx="3"
              style={{ fill: "#000" }}
            ></rect>
            <path
              d="M19.099 23.508c0 1.31-.423 2.388-1.27 3.234-.838.839-1.942 1.258-3.312 1.258h-4.403V12.277h4.492c1.31 0 2.385.423 3.224 1.27.846.838 1.269 1.912 1.269 3.223v6.738zm-2.808 0V16.77c0-.562-.187-.981-.562-1.258-.374-.285-.748-.427-1.122-.427h-1.685v10.107h1.684c.375 0 .75-.138 1.123-.415.375-.285.562-.708.562-1.27zM28.185 28h-5.896c-.562 0-1.03-.187-1.404-.561-.375-.375-.562-.843-.562-1.404V14.243c0-.562.187-1.03.562-1.404.374-.375.842-.562 1.404-.562h5.896v2.808H23.13v3.65h3.088v2.808h-3.088v3.65h5.054V28zm7.12 0c-.936 0-1.684-.655-2.246-1.965l-3.65-13.758h3.089l2.807 10.804 2.808-10.804H41.2l-3.65 13.758C36.99 27.345 36.241 28 35.305 28z"
              style={{ fill: "#fff" }}
            ></path>
          </svg>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="
              rounded
              border border-gray-300
              px-2
              py-2
              w-full
              bg-gray-50
              text-black text-base
            "
          />
        </div>
        <div className="custom-header__right">
          <button className="mr-2 px-4 py-2 text-blue-700 font-semibold">
            Log in
          </button>
          <button className="px-4 py-2 bg-blue-700 text-white rounded font-semibold">
            Create account
          </button>
        </div>
      </div>
    </header>
  );
}
