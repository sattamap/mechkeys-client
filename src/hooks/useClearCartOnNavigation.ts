// useClearCartOnNavigation.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '@/redux/features/cartSlice';

const useClearCartOnNavigation = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname !== '/carts') {
      dispatch(clearCart());
    }
  }, [location, dispatch]);
};

export default useClearCartOnNavigation;
