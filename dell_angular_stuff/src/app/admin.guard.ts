import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  let uname=localStorage.getItem("username");
  if(uname=="admin")
    return true;
  else
    return false;
};
