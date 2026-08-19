import React, { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('autohive_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('autohive_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('autohive_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Active page state defaults to 'Home'
  const [activeNav, setActiveNav] = useState('Home');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    localStorage.setItem('autohive_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('autohive_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('autohive_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('autohive_user');
    }
  }, [user]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        showToast(`Removed "${product.title.slice(0, 20)}..." from favorites.`);
        return prev.filter((item) => item.id !== product.id);
      } else {
        showToast(`Added "${product.title.slice(0, 20)}..." to favorites! ❤️`);
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId) => wishlist.some((item) => item.id === productId);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        showToast(`Increased quantity for "${product.title.slice(0, 20)}...".`);
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        showToast(`Added "${product.title.slice(0, 20)}..." to cart! 🛒`);
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const updateCartQuantity = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    showToast('Item removed from cart.');
  };

  const clearCart = () => {
    setCart([]);
    showToast('Cart cleared!');
  };

  const login = (email, name) => {
    setUser({ email, name: name || email.split('@')[0] });
    setIsAuthModalOpen(false);
    showToast(`Welcome back, ${name || email.split('@')[0]}! 👋`);
  };

  const logout = () => {
    setUser(null);
    showToast('You have been logged out.');
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + parseFloat(item.price || 0) * item.quantity,
    0
  );

  return (
    <ShopContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        cart,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
        user,
        login,
        logout,
        activeNav,
        setActiveNav,
        searchQuery,
        setSearchQuery,
        activeCategory,
        setActiveCategory,
        isAuthModalOpen,
        setIsAuthModalOpen,
        isCartModalOpen,
        setIsCartModalOpen,
        isWishlistModalOpen,
        setIsWishlistModalOpen,
        toastMessage,
        showToast
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    return {
      wishlist: [],
      toggleWishlist: () => {},
      isInWishlist: () => false,
      cart: [],
      addToCart: () => {},
      updateCartQuantity: () => {},
      removeFromCart: () => {},
      clearCart: () => {},
      cartCount: 0,
      cartTotal: 0,
      user: null,
      login: () => {},
      logout: () => {},
      activeNav: 'Home',
      setActiveNav: () => {},
      searchQuery: '',
      setSearchQuery: () => {},
      activeCategory: 'All',
      setActiveCategory: () => {},
      isAuthModalOpen: false,
      setIsAuthModalOpen: () => {},
      isCartModalOpen: false,
      setIsCartModalOpen: () => {},
      isWishlistModalOpen: false,
      setIsWishlistModalOpen: () => {},
      toastMessage: null,
      showToast: () => {}
    };
  }
  return context;
};