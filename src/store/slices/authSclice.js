import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const currentUser = await SecureStore.getItemAsync("user");
      if (currentUser) {
        return JSON.parse(currentUser);
      } else {
        throw new Error("user not round");
      }
    } catch (e) {
      rejectWithValue(e.messagge);
    }
  }
);
export const getToken = createAsyncThunk("auth/getCurrentUser", async (_, { rejectWithValue }) => {
  try {
    const token = await SecureStore.getItemAsync("token");
    return JSON.parse(token);
  } catch (e) {
    rejectWithValue(e.messagge);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, actions) {
      state.isLoggedIn = true;
      const details = actions.payload;
      state.user = details.user;
      state.token = details.token;
    },
    logout(state, actions) {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder;
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
          state.isLoggedIn = false;
          state.user = null;
        
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
