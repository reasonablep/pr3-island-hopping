import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_ISLANDS,
} from '../utils/actions';
import { QUERY_ISLANDS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentIsland, setCurrentIsland] = useState({});

  const { loading, data } = useQuery(QUERY_ISLANDS);

  const { islands, cart } = state;

  useEffect(() => {
    // already in global store
    if (islands.length) {
      setCurrentIsland(islands.find((island) => island._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_ISLANDS,
        islands: data.islands,
      });

      data.islands.forEach((island) => {
        idbPromise('islands', 'put', island);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('islands', 'get').then((indexedIslands) => {
        dispatch({
          type: UPDATE_ISLANDS,
          islands: indexedIslands,
        });
      });
    }
  }, [Islands, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        island: { ...currentIsland, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentIsland, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentIsland._id,
    });

    idbPromise('cart', 'delete', { ...currentIsland });
  };

  return (
    <>
      {currentIsland && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Islands</Link>

          <h2>{currentIsland.name}</h2>

          <p>{currentIsland.description}</p>

          <p>
            <strong>Price:</strong>${currentIsland.price}{' '}
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentIsland._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          <img
            src={`/images/${currentIsland.image}`}
            alt={currentIsland.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
