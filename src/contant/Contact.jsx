import style from './contact.module.css'

export default function Contact() {
  return (
    <section class="contactSection py-5">
          <div className="container">
    
            <div className="section-title d-flex flex-column justify-content-center align-items-center pb-5">
              <p className={`${style.title} fw-bold`}>CONTACT ME</p>
              <div className={style.star}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className='star'>
                  <path fill="#2c3e50" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" />
                </svg>
              </div>
            </div>

            <form action="" className='d-flex flex-column g-4 align-items-center '>
              <div className="form-floating mb-3 w-50">
                <input type="text" className="form-control border-0 border-bottom" id="fullname" placeholder="" />
                <label htmlFor="fullname">Full name</label>
              </div>

              <div className="form-floating mb-3 w-50">
                <input type="email" className="form-control border-0 border-bottom" id="email" placeholder="" />
                <label htmlFor="email">Email address</label>
              </div>

              <div className="form-floating mb-3 w-50">
                <input type="text" className="form-control border-0 border-bottom" id="phonenumber" placeholder="" />
                <label htmlFor="phonenumber">Phone number</label>
              </div>

            <div className="form-floating mb-3 w-50">
              <textarea className="form-control border-0 border-bottom" placeholder="" id="message" style={{ height: '100px' }}></textarea>
              <label htmlFor="message">Message</label>
            </div>

            <button type="submit" className={`${style.btnSubmit} btn fs-5 fw-semibold py-3 px-4`}>Send</button>
            </form>

    
          </div>
        </section>
  )
}
