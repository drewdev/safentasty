import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaTrashAlt } from 'react-icons/fa';

interface CartItem {
  productName: string;
  price: number;
}

interface ShoppingCartProps {
  cartItems: CartItem[];
  isCartOpen: boolean;
  onClose: () => void;
  onClearCart: () => void;
}

const ShoppingCart = ({ cartItems, isCartOpen, onClose, onClearCart }: ShoppingCartProps) => {
  const cartRef = useRef<HTMLDivElement | null>(null);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleClickOutside = (event: MouseEvent) => {
    if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          ref={cartRef}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed top-0 right-0 w-64 bg-teal-100 h-full shadow-lg p-6 z-40 mt-16"
        >
          <h3 className="text-lg font-semibold text-gray-500 mb-4">Your Cart</h3>

          {cartItems.length === 0 ? (
            <p className="text-gray-800">Your cart is empty</p>
          ) : (
            <ul className="text-gray-800">
              {cartItems.map((item, index) => (
                <li key={index} className="mb-2">
                  {item.productName} - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          )}

          {cartItems.length > 0 && (
            <>
            <div className="mt-4">
              <p className="mt-4 font-bold text-gray-500">Total: ${total.toFixed(2)}</p>
            </div>
            <button
              onClick={onClearCart}
              className="flex bg-teal-500 float-right items-center mt-4 text-white-500 hover:text-red-700"
            >
              <FaTrashAlt className="mr-2" /> Clear Cart
            </button>
            </>
          )}

          <button
            onClick={onClose}
            className="absolute bg-teal-500 top-4 right-4 text-gray-700 rounded-full text-xs px-3 hover:text-red-500"
          >
            <FaTimes size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCart;
