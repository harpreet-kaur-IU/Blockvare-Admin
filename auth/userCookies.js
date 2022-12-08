import cookies from 'js-cookie';

export const getBlockVierAdminOnBoardFromCookie = () => {
  const cookie = cookies.get('blockvierAdmin');
  if (!cookie) {
    return null;
  }
  return cookie;
};

export const setBlockVierAdminOnBoardCookie = token => {
  cookies.set('blockvierAdmin', token);
};

export const removeBlockVierAdminOnBoardCookie = () => cookies.remove('blockvierAdmin');