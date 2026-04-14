import { createContext, useState } from "react";

export const BookmarksContext = createContext({
  ids: [],
  addBookmark: (id) => {},
  removeBookmark: (id) => {},
});

function BookmarksContextProvider({ children }) {
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  function addBookmark(id) {
    setBookmarkedIds((currentIds) => [...currentIds, id]);
  }
  function removeBookmark(id) {
    setBookmarkedIds((currentIds) =>
      currentIds.filter((bookmarkId) => bookmarkId !== id),
    );
  }
  const value = {
    ids: bookmarkedIds,
    addBookmark: addBookmark,
    removeBookmark: removeBookmark,
  };

  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
}
export default BookmarksContextProvider;
