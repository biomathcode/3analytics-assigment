// define types here

export interface PostType {
  userId?: number;
  id?: number;
  title: string;
  body: string;
}

export interface CommentTypes {
  id?: string;
  postid?: string;
  name?: string;
  email?: string;
  body: string;
}

export interface UserType {
  id: number;
  name: string;
  username?: string;
  email?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface GetUserResponse {
  data: UserType[];
}

export interface GetPostResponse {
  data: PostType[];
}

export interface GetCommentsByIdResponse {
  data: CommentTypes[];
}
