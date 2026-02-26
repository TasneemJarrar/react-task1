import style from './footer.module.css'

export default function Footer(){
  return <>
    <section className="footer">
      <div className={style.footerBg}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 d-flex flex-column gap-3 align-items-center">
            <p className="text-white fw-bold fs-4">LOCATION</p>
            <span className='text-white fs-5 text-center'>2215 John Daniel Drive <br />Clark, MO 65243</span>
          </div>

          <div className="col-md-4 d-flex flex-column gap-3 align-items-center">
            <p className="text-white fw-bold fs-4">AROUND THE WEB</p>
            <div className="socials d-flex gap-2 justify-content-center align-items-center">
              <a href="#" className={`${style.social} btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#fff" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
                </svg>
              </a>

              <a href="#" className={`${style.social} btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#fff" d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164" />
                </svg>
              </a>

              <a href="#" className={`${style.social} btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#fff" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
                </svg>
              </a>

              <a href="#" className={`${style.social} btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                  <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                    <path d="M44 24a19.94 19.94 0 0 1-5.889 14.173A19.94 19.94 0 0 1 24 44C12.954 44 4 35.046 4 24a19.93 19.93 0 0 1 5.5-13.775A19.94 19.94 0 0 1 24 4a19.94 19.94 0 0 1 14.111 5.827A19.94 19.94 0 0 1 44 24" />
                    <path d="M44 24c-2.918 0-10.968-1.1-18.173 2.063C18 29.5 12.333 34.832 9.863 38.147" />
                    <path d="M16.5 5.454C19.63 8.343 26.46 15.698 29 23s3.48 16.28 4.06 18.835" />
                    <path d="M4.154 21.5c3.778.228 13.779.433 20.179-2.3s11.907-7.76 13.796-9.355M5.5 31.613a20.08 20.08 0 0 0 9 9.991" />
                    <path d="M4 24a19.93 19.93 0 0 1 5.5-13.775M24 4a19.94 19.94 0 0 0-14.5 6.225M32 5.664a20 20 0 0 1 6.111 4.163A19.94 19.94 0 0 1 44 24c0 2.462-.445 4.821-1.26 7M24 44a19.94 19.94 0 0 0 14.111-5.827" />
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="col-md-4 d-flex flex-column gap-3 align-items-center">
            <p className="text-white fw-bold fs-4">ABOUT FREELANCER</p>
            <p className='text-white text-center fs-5'>Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="#" className='text-success'>Start Bootstrap</a> .</p>
          </div>

        </div>
      </div>
      </div>
    </section>
  </>
}
