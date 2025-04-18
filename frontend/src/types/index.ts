export interface User {
  id: number;
  email: string;
}

export interface AuthResponse {
  status: string;
  data: {
    user: User;
    token: string;
  };
}

export interface ErrorResponse {
  status: string;
  message: string;
}