import { createContext, useContext, useState } from "react";

const GalleryContext = createContext();

const fakeListProduct = require("../services/api/dataListProduct.json");

function GalleryProvider(props) {
  const [listItem, setListItem] = useState(fakeListProduct);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  function toggleFavorite(photoId) {
    const updatedArray = listItem.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setListItem(updatedArray);
  }
  // 1. Viết function addToCart
  // 2. Function addToCart truyền params là photo
  function addToCart(newItem) {
    // 3. Cập nhật lại state giỏ hàng (cartItems)
    setCartItems((prevItems) => {
      // 4. Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
      const isExisted = prevItems.some((item) => item.id === newItem.id);
      console.log("setCartItems ~ isExisted", isExisted);
      // 5. Nếu tồn tại thì trả về danh sách trước đó
      if (isExisted) return [...prevItems];
      // 6. Chưa tồn tại thì thêm vào giỏ hàng
      return [...prevItems, newItem];
    });
  }

  function removeFromCart(photoId) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== photoId)
    );
  }

  const value = {
    listItem,
    cartItems,
    favoriteList,
    toggleFavorite,
    addToCart,
    removeFromCart,
  };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  console.log(context);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within a GalleryProvider");
  return context;
}
export { useGallery, GalleryProvider };
