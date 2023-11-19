import { IntroContainer, IntroDestaques, IntroInformacoesDoServico } from "./style"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { InfoWithIcon } from "../../../../components/InfoWithIcon"


export function Intro() {
    return(
        <IntroContainer>
            <IntroInformacoesDoServico>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <IntroDestaques>
                    <InfoWithIcon cor="yellow-dark-800" content="Compra simples e segura" icon={<ShoppingCart weight="fill" size={24}/>}></InfoWithIcon>
                    <InfoWithIcon cor="base-text-700" content="Embalagem mantém o café intacto" icon={<Package weight="fill" size={24}/>}></InfoWithIcon>
                    <InfoWithIcon cor="yellow-500" content="Entrega rápida e rastreada" icon={<Timer weight="fill" size={24}/>}></InfoWithIcon>
                    <InfoWithIcon cor="purple-500" content="O café chega fresquinho até você" icon={<Coffee weight="fill" size={24}/>}></InfoWithIcon>
                </IntroDestaques>
            </IntroInformacoesDoServico>
            <div>
                <img src="/ilustrator/Coffedelivery.svg" />
            </div>
        </IntroContainer>
    )
}