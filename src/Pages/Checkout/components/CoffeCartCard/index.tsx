import { Trash } from "phosphor-react";
import { CountCoffe } from "../../../../components/CountCoffe";
import { ActionsContainer, CoffeCartCardConatiner, RemoveBotton } from "./style";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";
import { toastifySuccess } from "../../../../components/ToastifySettings";

export interface Coffe {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
    quantity: number
  }
  
  export interface CoffeCardProps {
    coffe: Coffe;
  }

export function CoffeCartCard({coffe}: CoffeCardProps){
    const totalPrice = coffe.price * coffe.quantity
    const PriceFormated = formatMoney(totalPrice)
    const { removeCartItem, changeCartItemQuantity } = useCart()


    function handleRemoveCartItem() {
        removeCartItem(coffe.id)
        toastifySuccess("Item removido do carrinho!", "info")
    }

    function handleOnIncrise() {
        changeCartItemQuantity(coffe.id, "increase")
    }

    function handleOnDecrise() {
        changeCartItemQuantity(coffe.id, "decrease")
    }
    
    return(
        <CoffeCartCardConatiner>
            <div>
                <img src={`/coffes/${coffe.photo}`} alt="" />
                <div>
                    <p>{coffe.name}</p>
                    <ActionsContainer>
                        <CountCoffe quantity={coffe.quantity} onIncrise={handleOnIncrise} onDecrise={handleOnDecrise}/>
                        <RemoveBotton onClick={handleRemoveCartItem} type="button">
                            <Trash/> Remover
                        </RemoveBotton>
                    </ActionsContainer>
                </div>
            </div>

            <p>R$ {PriceFormated}</p>
        </CoffeCartCardConatiner>
    )
}