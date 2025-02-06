// Function to get a token from cookies
export const getToken = () => {
    if (typeof document !== "undefined") {
      const match = document.cookie.match(new RegExp("(^| )token=([^;]+)"));
      return match ? match[2] : null;
    }
    return null;
  }
  
  // Function to clear the token from cookies
  export const clearSession = () => {
    document.cookie = "token=; Max-Age=0; path=/;"; // Set Max-Age=0 to expire the cookie
  };
  
  // Function to set a token in cookies
  export const setSession = (accesstoken: string) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + 24 * 60 * 60 * 1000); // Token expires in 1 day
    document.cookie = `token=${accesstoken}; expires=${expires.toUTCString()}; path=/;`;
  };
  