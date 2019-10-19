export interface IAuthResponse {
  token: string;
  username: string;
  super: boolean;
}

export interface IImage {
  id: number;
  name: string;
  file: string;
  extra: boolean;
}

export interface IFile {
  url: string;
}

export interface ILabel {
  id: number;
  name: string;
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
  parent: string;
}
