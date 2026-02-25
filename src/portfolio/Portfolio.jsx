import style from './portfolio.module.css'
import house from './../assets/imgs/1.png'
import cake from './../assets/imgs/2.png'
import circus from './../assets/imgs/3.png'
import game from './../assets/imgs/4.png'
import safe from './../assets/imgs/5.png'
import sub from './../assets/imgs/6.png'

export default function Portfolio() {
  return (
    <section className="portfolioSection py-5">
      <div className="container">

        <div className="section-title d-flex flex-column justify-content-center align-items-center">
          <p className={`${style.title} fw-bold`}>PORTFOLIO</p>
          <div className={style.star}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className='star'>
              <path fill="#2c3e50" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" />
            </svg>
          </div>
        </div>

        <div className="images py-4">
          <div className="row g-4">

            <div className="col-md-4">
              <img src={house} alt="house" className='w-100 rounded-2' />
            </div>

            <div className="col-md-4">
              <img src={cake} alt="house" className='w-100 rounded-2' />
            </div>

            <div className="col-md-4">
              <img src={circus} alt="house" className='w-100 rounded-2' />
            </div>

            <div className="col-md-4">
              <img src={game} alt="house" className='w-100 rounded-2' />
            </div>

            <div className="col-md-4">
              <img src={safe} alt="house" className='w-100 rounded-2' />
            </div>

            <div className="col-md-4">
              <img src={sub} alt="house" className='w-100 rounded-2' />
            </div>

          </div>
          
        </div>

      </div>
    </section>
  )
}

