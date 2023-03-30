export const setItem = (key, data) => {
  try {
    localStorage.setItem(key, data);
  } catch (error) {
    console.log("Something went wrong");
  }
};