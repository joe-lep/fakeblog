import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ActiveProfileState {
  profileId: number | undefined,
}

const initialState = {
  profileId: undefined,
} as ActiveProfileState;

export const activeProfileSlice = createSlice({
  name: 'activeProfile',
  initialState,
  reducers: {
    setActiveProfile: (state, action: PayloadAction<ActiveProfileState>) => {
      state.profileId = action.payload.profileId;
    },
    unsetActiveProfile: (state: ActiveProfileState) => {
      state.profileId = initialState.profileId;
    },
  },
});

export const { setActiveProfile, unsetActiveProfile } = activeProfileSlice.actions;

export default activeProfileSlice.reducer;
