import as from "./axios";

export function register(data) {
  return as.post("/auth/register", data);
}

export function login(data) {
  return as.post("/auth/login", data);
}

export function editProfile(data) {}

export function delAccount(data) {}

export function logout(data) {}

export function getMe(data) {}
