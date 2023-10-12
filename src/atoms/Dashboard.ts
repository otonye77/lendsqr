import { atom } from "recoil";

export const dashboardMenuState = atom({
    key: "dashboardMenuState",
    default: "Users",
});
  
export const filterState = atom({
    key: 'filterState',
    default: ''
})