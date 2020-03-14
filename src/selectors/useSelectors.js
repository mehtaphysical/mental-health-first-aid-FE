export const toGetAuth = state => state.authReducer;
export const toGetAuthentication = state => {
  const { user } = toGetAuth(state);
  return !!user;
};
