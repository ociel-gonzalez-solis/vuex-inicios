export const increment = (state) => {
  state.count++;
  state.lastMutation = "Increment";
};
export const incrementBy = (state, val) => {
  state.count        += val;
  state.lastMutation  = "IncrementBy";
};
export const setIsLadoing = (state, val) => {
  state.isLoading = val;
};
