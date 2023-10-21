import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderContainer } from "../components/style"
import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />
      <div>
        <span>
          <MapPin size={32} weight="fill"/> Porto Alegre, RS
        </span>
        <button>
          <ShoppingCart size={32} weight="fill"/>
        </button>
      </div>
    </HeaderContainer>
  );
}
