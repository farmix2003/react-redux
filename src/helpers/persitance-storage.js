export const setItem = (key, data) => {
  try {
    localStorage.setItem(key, data);
  } catch (error) {
    console.log("Something went wrong");
  }
};
export const getItem = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.log("error getting data");
  }
};
export const removeItem = (key) => {
  try {
    return localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
