import { Auth } from "aws-amplify"
import { useRouter } from 'next/router'
interface ILink {
  children: React.ReactChild;
  href: string
  isActive: boolean
}

const menu = [
  { href: '/', name: 'Home' },
  { href: '/card/create', name: 'CardCreate' },
  { href:'/user/info', name:'UserInfo'},
]

function Link({ children, href, isActive}: ILink){
  const router = useRouter()
  return (
    <a
      className={isActive ? "active" : ""}
      href="#"
      onClick={(e) => {
        e.preventDefault()
        router.push(href)
      }}
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const router = useRouter()
  const path = router.pathname
  
  const link: any[] = menu.map((m) => {
    const isActive: boolean = path === m.href
    return <Link key={m.name} isActive={isActive} href={m.href}>{m.name}</Link>
  })

  return (
    <nav>
      <div className="menu">
        {link}
      </div>
    </nav>
  )
}
