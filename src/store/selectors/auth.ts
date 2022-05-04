export const selectAuth = (state:any) => state.auth.currentUser;
export const selectAuthItem = (key:any) => (state:any) => state.auth[key];