import { createContext, useState } from "react";

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const toggleBookmark = (item) => {
    setBookmarks((prevBookmarks) => {
      const isBookmarked = prevBookmarks.some((b) => b.id === item.id);

      if (isBookmarked) {
        return prevBookmarks.filter((b) => b.id !== item.id);
      } else {
        return [...prevBookmarks, item];
      }
    });
  };

  const clearBookmarks = () => {
    setBookmarks([]);
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, toggleBookmark, clearBookmarks }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
