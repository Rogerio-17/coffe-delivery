import { AddressFormContent } from "./style";

export function AddressForm() {
    return (
        <AddressFormContent>
        <div className="n1">
          <input type="number" placeholder="CEP" />
        </div>

        <input type="text" placeholder="Rua" />

        <div className="n2">
          <input type="number" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
        </div>

        <div className="n3">
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </div>
      </AddressFormContent>
    )
}