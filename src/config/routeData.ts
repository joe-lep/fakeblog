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
