import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
      }>
    ) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.isLoggedIn = true;
    },
    updateUser: (
      state,
      action: PayloadAction<Partial<UserState>> // Allow partial updates
    ) => {
      Object.assign(state, action.payload); // Merge new values into state
    },
    clearUser: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.phone = "";
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, updateUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
