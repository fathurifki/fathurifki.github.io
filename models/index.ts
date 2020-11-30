export interface User {
    login: string;
    id: number;
    avatar_url: string
}

export interface UserDetail {
    login: string;
    id: number;
    avatar_url: string;
    name: string;
    company: string;
    followers: string;
  }