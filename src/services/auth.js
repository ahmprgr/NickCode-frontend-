import as from "./axios";

export function register(data) {
  return as.post("/auth/register", data);
}

export function login(data) {
  return as.post("/auth/login", data);
}

export function editProfile(data) {}

export function delAccount(data) {}

export function logout(data) {
  return as.post("/auth/logout")
}

export function getMe() {
  return as.get("/auth/me");
}
