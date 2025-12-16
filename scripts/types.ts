// types.ts
import { Action, AnyAction } from 'redux';

interface AppState {
  auth: {
    user: {
      userId: string;
      username: string;
      token: string;
      profilePicture: string;
      coverPicture: string;
      bio: string;
      gender: string;
      email: string;
      phoneNumber: string;
      friends: string[];
      notifications: Notification[];
    };
    loading: boolean;
    error: boolean;
  };
  posts: {
    loading: boolean;
    error: boolean;
  };
  login: {
    loading: boolean;
    error: boolean;
  };
  post: {
    loading: boolean;
    error: boolean;
  };
  comment: {
    loading: boolean;
    error: boolean;
  };
  search: {
    results: any[];
    loading: boolean;
    error: boolean;
  };
}

interface Notification {
  id: number;
  message: string;
  post: any;
  time: string;
}

interface Post {
  id: number;
  user: any;
  message: string;
  image: string;
  likes: any[];
  comments: any[];
  date: string;
  type: string;
  postUserId: string;
}

interface SearchResults {
  id: number;
  user: any;
  message: string;
  image: string;
  likes: any[];
  comments: any[];
  date: string;
  type: string;
  postUserId: string;
}

interface PostState {
  posts: Post[];
  loading: boolean;
  error: boolean;
}

interface CommentState {
  comments: any[];
  loading: boolean;
  error: boolean;
}

interface SearchState {
  results: SearchResults[];
  loading: boolean;
  error: boolean;
}

interface UserState {
  user: any;
  loading: boolean;
  error: boolean;
}

interface FriendsState {
  friends: any[];
  loading: boolean;
  error: boolean;
}

interface ProfileState {
  user: any;
  profilePicture: string;
  coverPicture: string;
  bio: string;
  gender: string;
  email: string;
  phoneNumber: string;
  loading: boolean;
  error: boolean;
}

interface AppDispatch extends Action {
  type: 'INIT_STATE';
}

interface AppAction extends AnyAction {
  type: 'INIT_STATE';
}

interface AuthAction {
  type: 'AUTH' | 'AUTH_ERROR' | 'AUTH_LOADING';
  payload: any;
}

interface PostAction {
  type: 'GET_POSTS' | 'GET_POSTS_ERROR' | 'GET_POSTS_LOADING' | 'CREATE_POST' | 'CREATE_POST_ERROR' | 'CREATE_POST_LOADING';
  payload: any;
}

interface CommentAction {
  type: 'GET_COMMENTS' | 'GET_COMMENTS_ERROR' | 'GET_COMMENTS_LOADING' | 'CREATE_COMMENT' | 'CREATE_COMMENT_ERROR' | 'CREATE_COMMENT_LOADING';
  payload: any;
}

interface SearchAction {
  type: 'SEARCH' | 'SEARCH_ERROR' | 'SEARCH_LOADING';
  payload: any;
}

interface GetFriendsAction {
  type: 'GET_FRIENDS' | 'GET_FRIENDS_ERROR' | 'GET_FRIENDS_LOADING';
  payload: any;
}

interface ProfileAction {
  type: 'UPDATE_PROFILE' | 'UPDATE_PROFILE_ERROR' | 'UPDATE_PROFILE_LOADING';
  payload: any;
}