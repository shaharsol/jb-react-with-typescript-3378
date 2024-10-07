import { memo, useCallback } from "react"
import { useAppSelector } from "../../../redux/hooks"
import ProductCardSlow from "../card-slow/ProductCardSlow"

const ProductCardSlowMemo = memo(ProductCardSlow)

interface ListProps {
    query: string
}
function List(props: ListProps): JSX.Element {

    const products = useAppSelector((state) => state.products.products)
    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(props.query.toLowerCase()))

    const deleteProduct = useCallback(() => {}, [props.query])

    return (
        <div className="List">
            {filteredProducts.map(p => <ProductCardSlow key={p.id} product={p} deleteMe={deleteProduct}/>)}
        </div>
    )
}

export default memo(List)