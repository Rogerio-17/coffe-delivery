import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderContainer } from "../../components/Header/style"
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to='/' title="Voltar para página inicial">
      <img src={Logo} />
      </NavLink>
      <div>
        <span>
          <MapPin size={32} weight="fill"/> Porto Alegre, RS
        </span>
        <button >
          <NavLink to='/checkout' title="Ir para o carrinho">
          <ShoppingCart size={32} weight="fill"/>
          </NavLink>
        </button>
      </div>
    </HeaderContainer>
  );
}
