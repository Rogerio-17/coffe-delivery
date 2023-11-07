import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderContainer } from "../../components/Header/style"
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />
      <div>
        <span>
          <MapPin size={32} weight="fill"/> Porto Alegre, RS
        </span>
        <button >
          <NavLink to='/checkout' title="Checkout">
          <ShoppingCart size={32} weight="fill"/>
          </NavLink>
        </button>
      </div>
    </HeaderContainer>
  );
}
