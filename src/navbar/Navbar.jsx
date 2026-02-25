import style from './navbar.module.css'

export default function Navbar(){

console.log(style)
  const userName = "tasneem";
  return <>

    <h1 className={`${style.demo} w-75 text-danger`}>Navbar</h1>
  </>;

}

