import { atom } from "recoil";

export const dashboardMenuState = atom({
    key: "dashboardMenuState",
    default: "Users",
});

export const modalFilterState = atom({
    key: "modalFilterState",
    default: {
      org: "",
      username: "",
      email: "",
      phoneNumber: "",
      status: "",
    },
  });
  
  export const filterModalToggleState = atom({
    key: "filterModalToggleState",
    default: false,
  });
  
export const filterState = atom({
    key: 'filterState',
    default: ''
});