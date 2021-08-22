import Navbar from "./Navbar";
interface Props {
  children?: React.ReactChild;
}

export default function Layout({ children }:Props) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}