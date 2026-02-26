import style from './copyright.module.css'

export default function Copyright() {
  return (
    <section className="copyright">
      <div className={style.copyBg}>
        <div className="container py-3 d-flex justify-content-center align-items-center">
          <p className="text-white p-0 m-0">Copyright &copy; Your Website 2023</p>
        </div>
      </div>
    </section>
  )
}
