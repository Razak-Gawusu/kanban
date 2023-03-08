import React from "react";

function useLocalStorageState(key, initialValue = false) {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialValue
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  });

  return [value, setValue];
}

export default useLocalStorageState;
