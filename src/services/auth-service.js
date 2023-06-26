import HttpService from "./htttp.service";

class AuthService {
  authEndpoint = process.env.API_URL;

  login = async (payload) => {
    const loginEndpoint = 'sign_in';
    return await HttpService.post(loginEndpoint, payload);
  };

  register = async (credentials) => {
    const registerEndpoint = 'sign_up';
    console.log(credentials, "register", registerEndpoint)
    return await HttpService.post(registerEndpoint, credentials);
  };

  // logout = async () => {
  //   const logoutEndpoint = 'logout';
  //   return await HttpService.post(logoutEndpoint);
  // };

  forgotPassword = async (payload) => {
    const forgotPassword = 'password-forgot';
    return await HttpService.post(forgotPassword, payload);
  }

  resetPassword = async (credentials) => {
    const resetPassword = 'password-reset';
    return await HttpService.post(resetPassword, credentials);
  }

  getProfile = async() => {
    const getProfile = 'me';
    return await HttpService.get(getProfile);
  }

  updateProfile = async (newInfo) => {
    const updateProfile = "me";
    return await HttpService.patch(updateProfile, newInfo);
  }

  addUserProfile = async (newInfo) => {
    const adduserprofile = "addUser";
    return await HttpService.post(adduserprofile, newInfo);
  }
}

export default new AuthService();
