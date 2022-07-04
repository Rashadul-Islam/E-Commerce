import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjQ2YjYzYWI2OTlmZTlmYWQwMmM4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTk5MTI2MywiZXhwIjoxNjU2MjUwNDYzfQ.-3Mdv7z3ckcvQHDDkuqJIO7ICbHFw5Zceqtq9PU69ME";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
