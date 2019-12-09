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
  parent: number;
  type: number;
}

export class Folder {
  id: number;
  name: string;
  description: string;
  parent: number;
  type: number;
  className = 'Folder';
  // allowed: SubFolder[];
}

export class ImagePack extends Folder {
  className = 'ImagePack';
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
  label: number;
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
