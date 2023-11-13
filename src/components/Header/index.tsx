import { MapPin, ShoppingCart } from "phosphor-react";
import { Address, HeaderContainer } from "../../components/Header/style"
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const {quantityCart} = useCart()
  return (
    <HeaderContainer>
      <NavLink to='/' title="Voltar para página inicial">
      <img src={Logo} />
      </NavLink>
      <div>
        <Address>
          <MapPin size={32} weight="fill"/> Porto Alegre, RS
        </Address>
        <button >
          <span>{quantityCart}</span>
          <NavLink to='/checkout' title="Ir para o carrinho">
          <ShoppingCart size={32} weight="fill"/>
          </NavLink>
        </button>
      </div>
    </HeaderContainer>
  );
}
