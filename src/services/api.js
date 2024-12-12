import axios from "axios";

export const fetchData = async ({ method, url, payload }) => {
  try {
    const request = {
      method: method,
      url: `${url}`,
      data: payload,
    };
    const res = await axios(request);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data || error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
};

export const fetchLogin = (payload) => {
  const request = {
    url: "https://reqres.in/api/users/2",
    method: "POST",
    payload: payload,
  };
  return fetchData(request)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });
};

export const fetchProductList = () => {
  return fetchData({
    url: "https://dummyjson.com/products",
    method: "GET",
    payload:"",
  })
    .then((res) => {
      return res;
    })
    .catch((ex) => {
      throw ex;
    });
};
export const fetchProductSearchList = (query) => {
  return fetchData({
    url: `https://dummyjson.com/products/search?q=${query}`,
    method: "GET",
    payload:"",
  })
    .then((res) => {
      return res;
    })
    .catch((ex) => {
      throw ex;
    });
};
export const fetchProductCategory = () => {
  return fetchData({
    url: "https://dummyjson.com/products/categories",
    method: "GET",
    payload:"",
  })
    .then((res) => {
      return res;
    })
    .catch((ex) => {
      throw ex;
    });
};
export const fetchProductCategoryFilter = (value) => {
  return fetchData({
    url: `https://dummyjson.com/products/category/${value}`,
    method: "GET",
    payload:"",
  })
    .then((res) => {
      return res;
    })
    .catch((ex) => {
      throw ex;
    });
};