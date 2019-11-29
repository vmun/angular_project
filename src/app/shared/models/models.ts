export class User {
  id: number;
  username: string;
  firstname: string;
  email: string;
  superuser: boolean;
}

export class Profile {
  id: number;
  origin: string;
  bio: string;
  address: string;
  avatar: string;
}

export class AuthResponse {
  token: string;
  user: User;
}

export class SubFolder {
  id: number;
  name: string;
  description: string;
  parent: string;
  type: number;
}

export class Folder {
  id: number;
  name: string;
  description: string;
  parent: string;
  type: number;
  allowed: SubFolder[];
}

export class Image {
  id: number;
  name: string;
  file: string;
  extra: boolean;
}

export class File {
  url: string;
}

export class Label {
  id: number;
  name: string;
}

export class Polygon {
  id: number;
  points: any[] = [];
  label: Label;
  name: string;
  text: string;
  image: number;
}


export class Comment {
  id: number;
  datecreated: string;
  text: string;
  image: number;
  creatorname: string;
}
