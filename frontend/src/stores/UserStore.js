import { extendObservable } from "mobx";

/*sdklm*/

class UserStore {
  constructor() {
    extendObservable(this, {
      loading: true,
      isLoggedIn: false,
      username: "",
    });
  }
}

export default new UserStore();
