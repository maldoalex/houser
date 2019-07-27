import { createStore } from "redux";

const initialState = {
  mortgage: 0,
  rent: 0,
  image_url: "",
  property_name: "",
  address: "",
  city: "",
  state: "",
  zip: 0
};

export const UPDATE_PROPERTY_NAME = "UPDATE PROPERTY_NAME";
export const UPDATE_MORTGAGE = "UPDATE MORTGAGE";
export const UPDATE_RENT = "UPDATE RENT";
export const UPDATE_IMAGE_URL = "UPDATE IMAGE_URL";
export const UPDATE_ADDRESS = "UPDATE ADDRESS";
export const UPDATE_STATE = "UPDATE STATE";
export const UPDATE_CITY = "UPDATE CITY";
export const UPDATE_ZIP = "UPDATE ZIP";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_PROPERTY_NAME:
      return { ...state, property_name: payload };
    case UPDATE_ADDRESS:
      return { ...state, address: payload };
    case UPDATE_STATE:
      return { ...state, state: payload };
    case UPDATE_CITY:
      return { ...state, city: payload };
    case UPDATE_ZIP:
      return { ...state, zip: payload };
    case UPDATE_IMAGE_URL:
      return { ...state, image_url: payload };
    case UPDATE_MORTGAGE:
      return { ...state, mortgage: payload };
    case UPDATE_RENT:
      return { ...state, rent: payload };
    default:
      return state;
  }
}

export default createStore(reducer);
