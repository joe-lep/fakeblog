import { RouteData } from '../types';

export const HOME_ROUTE : RouteData = {
  path: '/',
  label: 'Home',
};

export const MY_PROFILE_ROUTE : RouteData = {
  path: '/profile',
  label: 'My Profile',
};

export const PROFILE_LIST_ROUTE : RouteData = {
  path: '/profiles',
  label: 'Profile List',
};

export const CREATE_PROFILE_ROUTE : RouteData = {
  path: PROFILE_LIST_ROUTE.path + '/new',
  label: 'New Profile',
};

export const CREATE_NEW_POST : RouteData = {
  path: '/create-post',
  label: 'Create New Post',
};

export const PROFILE_BY_ID_ROUTE : RouteData = {
  path: `${PROFILE_LIST_ROUTE.path}/:profileId`,
  label: 'Profile',
};

export const PROFILE_EDIT_ROUTE : RouteData = {
  path: `${PROFILE_BY_ID_ROUTE.path}/edit`,
  label: 'Edit Profile',
};

export const VIEW_POST_ROUTE : RouteData = {
  path: '/post/:postId',
  label: 'View Post',
};

export const EDIT_POST_ROUTE : RouteData = {
  path: `${VIEW_POST_ROUTE.path}/edit`,
  label: 'Edit Post',
};
