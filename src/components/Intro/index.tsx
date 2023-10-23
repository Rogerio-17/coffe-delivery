import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import imgCoffe from "../../assets/Coffedelivery.svg"
import { IntroContainer, IntroDestaques, IntroDestaquesIncons, IntroInformacoesDoServico } from "./style"


export function Intro() {
    return(
        <IntroContainer>
            <IntroInformacoesDoServico>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <IntroDestaques>
                    <p><IntroDestaquesIncons cor="yellow-dark-800"><ShoppingCart size={24} weight="fill"/></IntroDestaquesIncons> Compra simples e segura</p>
                    <p><IntroDestaquesIncons cor="yellow-500"><Timer size={24} weight="fill"/></IntroDestaquesIncons>Entrega rápida e rastreada</p>
                    <p><IntroDestaquesIncons cor="base-text-700"><Package size={24} weight="fill"/></IntroDestaquesIncons>Embalagem mantém o café intacto</p>
                    <p><IntroDestaquesIncons cor="purple-500"><Coffee size={24} weight="fill"/></IntroDestaquesIncons>O café chega fresquinho até você</p>
                </IntroDestaques>
            </IntroInformacoesDoServico>
            <div>
                <img src={imgCoffe} />
            </div>
        </IntroContainer>
    )
}