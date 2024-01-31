import { useUIContext } from "../components/context/ui";


function useCart(island) {

  const { cart, setCart} = useUIContext();

  const addToCart = () => {
    cart.findIndex (c => c.id === island.id) >=0 
    ? setCart(cart.filter(c => c.id !== island.id))
    : setCart(c => [...c, island]);
  }

  const addToCartText = cart.findIndex((c) => c.id === island.id) >=0
  ? "Remove from cart": "Add to cart";

  return {addToCart, addToCartText}
}

export default useCart;