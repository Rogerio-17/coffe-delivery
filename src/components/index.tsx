import { MapPinLine, ShoppingCart } from "phosphor-react";
import { HeaderContainer } from "../components/style"
import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />
      <div>
        <span>
          <MapPinLine size={32} /> Porto Alegre, RS
        </span>
        <button>
          <ShoppingCart size={32} />
        </button>
      </div>
    </HeaderContainer>
  );
}
