export interface UserSignUp {
  fullName: string;
  email: string;
  password: string;
  interests: string[];
}

export interface UserLogin {
  email: string;
  password: string;
}
