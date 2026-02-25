import style from "./navbar.module.css";

export default function Navbar() {
  console.log(style);
  return (
    <>
      <nav className={`${style.navBgColor} navbar navbar-expand-lg py-3 position-sticky top-0 z-3`}>
        <div className="container">
          <a className="navbar-brand text-white fw-bold fs-2 d-flex justify-content-center align-items-center" href="#">
            START BOOTSTRAP
          </a>
          <button
            className={`${style.menuBtn} navbar-toggler text-white`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            MENU 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10 5h10M4 12h16M4 19h10"
              />
            </svg>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active text-white fw-bold" aria-current="page" href="#">PORTFOLIO</a>
              <a className="nav-link text-white fw-bold ms-3" href="#">ABOUT</a>
              <a className="nav-link text-white fw-bold ms-3" href="#">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
