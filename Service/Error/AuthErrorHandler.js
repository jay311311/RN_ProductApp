import { AUTH_ERROR_CODES } from './AuthErrorEntity';

export const getAuthErrorMessage = (error) => {
  let errorMessage = "Login failed. Please try again.";

  switch (error.code) {
    case AUTH_ERROR_CODES.ADMIN_ONLY_OPERATION:
      errorMessage = "This operation is restricted to administrators only.";
      break;
    case AUTH_ERROR_CODES.ARGUMENT_ERROR:
      errorMessage = "There was an error with the provided arguments. Please check and try again.";
      break;
    case AUTH_ERROR_CODES.APP_NOT_AUTHORIZED:
      errorMessage = "This app is not authorized to use Firebase Authentication. Please check your configuration.";
      break;
    case AUTH_ERROR_CODES.APP_NOT_INSTALLED:
      errorMessage = "The app is not installed. Please install the app and try again.";
      break;
    case AUTH_ERROR_CODES.CAPTCHA_CHECK_FAILED:
      errorMessage = "CAPTCHA verification failed. Please try again.";
      break;
    case AUTH_ERROR_CODES.CODE_EXPIRED:
      errorMessage = "The code has expired. Please request a new code.";
      break;
    case AUTH_ERROR_CODES.CORDOVA_NOT_READY:
      errorMessage = "Cordova is not ready. Please try again later.";
      break;
    case AUTH_ERROR_CODES.CORS_UNSUPPORTED:
      errorMessage = "CORS is unsupported. Please check your server configuration.";
      break;
    case AUTH_ERROR_CODES.CREDENTIAL_ALREADY_IN_USE:
      errorMessage = "This credential is already in use. Please use a different credential.";
      break;
    case AUTH_ERROR_CODES.CUSTOM_TOKEN_MISMATCH:
      errorMessage = "The custom token does not match. Please check your token.";
      break;
    case AUTH_ERROR_CODES.CREDENTIAL_TOO_OLD_LOGIN_AGAIN:
      errorMessage = "Your credential is too old. Please log in again.";
      break;
    case AUTH_ERROR_CODES.DEPENDENT_SDK_INIT_BEFORE_AUTH:
      errorMessage = "A dependent SDK was initialized before Firebase Auth. Please check your initialization order.";
      break;
    case AUTH_ERROR_CODES.DYNAMIC_LINK_NOT_ACTIVATED:
      errorMessage = "Dynamic Links are not activated for this project. Please enable them in the Firebase Console.";
      break;
    case AUTH_ERROR_CODES.EMAIL_CHANGE_NEEDS_VERIFICATION:
      errorMessage = "Email change needs verification. Please verify your new email address.";
      break;
    case AUTH_ERROR_CODES.EMAIL_EXISTS:
      errorMessage = "This email is already in use. Please use a different email.";
      break;
    case AUTH_ERROR_CODES.EMULATOR_CONFIG_FAILED:
      errorMessage = "Failed to configure the emulator. Please check your emulator settings.";
      break;
    case AUTH_ERROR_CODES.EXPIRED_OOB_CODE:
      errorMessage = "The out-of-band code has expired. Please request a new one.";
      break;
    case AUTH_ERROR_CODES.EXPIRED_POPUP_REQUEST:
      errorMessage = "The popup request has expired. Please try again.";
      break;
    case AUTH_ERROR_CODES.INTERNAL_ERROR:
      errorMessage = "An internal error occurred. Please try again later.";
      break;
    case AUTH_ERROR_CODES.INVALID_API_KEY:
      errorMessage = "The API key is invalid. Please check your API key.";
      break;
    case AUTH_ERROR_CODES.INVALID_APP_CREDENTIAL:
      errorMessage = "The app credential is invalid. Please check your app credentials.";
      break;
    case AUTH_ERROR_CODES.INVALID_APP_ID:
      errorMessage = "The app ID is invalid. Please check your app ID.";
      break;
    case AUTH_ERROR_CODES.INVALID_AUTH:
      errorMessage = "The authentication token is invalid. Please log in again.";
      break;
    case AUTH_ERROR_CODES.INVALID_AUTH_EVENT:
      errorMessage = "The authentication event is invalid. Please try again.";
      break;
    case AUTH_ERROR_CODES.INVALID_CERT_HASH:
      errorMessage = "The certificate hash is invalid. Please check your certificate.";
      break;
    case AUTH_ERROR_CODES.INVALID_CODE:
      errorMessage = "The verification code is invalid. Please check your code.";
      break;
    case AUTH_ERROR_CODES.INVALID_CONTINUE_URI:
      errorMessage = "The continue URL is invalid. Please check your URL.";
      break;
    case AUTH_ERROR_CODES.INVALID_CORDOVA_CONFIGURATION:
      errorMessage = "The Cordova configuration is invalid. Please check your configuration.";
      break;
    case AUTH_ERROR_CODES.INVALID_CUSTOM_TOKEN:
      errorMessage = "The custom token is invalid. Please check your token.";
      break;
    case AUTH_ERROR_CODES.INVALID_DYNAMIC_LINK_DOMAIN:
      errorMessage = "The dynamic link domain is invalid. Please check your domain.";
      break;
    case AUTH_ERROR_CODES.INVALID_EMAIL:
      errorMessage = "The email address is invalid. Please check your email.";
      break;
    case AUTH_ERROR_CODES.INVALID_EMULATOR_SCHEME:
      errorMessage = "The emulator scheme is invalid. Please check your emulator settings.";
      break;
    case AUTH_ERROR_CODES.INVALID_IDP_RESPONSE:
      errorMessage = "There was an issue with the response from the identity provider. Please try again.";
      break;
    case AUTH_ERROR_CODES.INVALID_LOGIN_CREDENTIALS:
      errorMessage = "The login credentials are invalid. Please check your credentials.";
      break;
    case AUTH_ERROR_CODES.INVALID_MESSAGE_PAYLOAD:
      errorMessage = "The message payload is invalid. Please check your message.";
      break;
    case AUTH_ERROR_CODES.INVALID_MFA_SESSION:
      errorMessage = "The multi-factor authentication session is invalid. Please try again.";
      break;
    case AUTH_ERROR_CODES.INVALID_OAUTH_CLIENT_ID:
      errorMessage = "The OAuth client ID is invalid. Please check your client ID.";
      break;
    case AUTH_ERROR_CODES.INVALID_OAUTH_PROVIDER:
      errorMessage = "The OAuth provider is invalid. Please check your provider.";
      break;
    case AUTH_ERROR_CODES.INVALID_OOB_CODE:
      errorMessage = "The out-of-band code is invalid. Please check your code.";
      break;
    case AUTH_ERROR_CODES.INVALID_ORIGIN:
      errorMessage = "The origin is invalid. Please check your origin settings.";
      break;
    case AUTH_ERROR_CODES.INVALID_PASSWORD:
      errorMessage = "The password is incorrect. Please check your password.";
      break;
    case AUTH_ERROR_CODES.INVALID_PERSISTENCE:
      errorMessage = "The persistence type is invalid. Please check your settings.";
      break;
    case AUTH_ERROR_CODES.INVALID_PHONE_NUMBER:
      errorMessage = "The phone number is invalid. Please check your phone number.";
      break;
    case AUTH_ERROR_CODES.INVALID_PROVIDER_ID:
      errorMessage = "The provider ID is invalid. Please check your provider ID.";
      break;
    case AUTH_ERROR_CODES.INVALID_RECIPIENT_EMAIL:
      errorMessage = "The recipient email is invalid. Please check the email address.";
      break;
    case AUTH_ERROR_CODES.INVALID_SENDER:
      errorMessage = "The sender information is invalid. Please check your sender settings.";
      break;
    case AUTH_ERROR_CODES.INVALID_SESSION_INFO:
      errorMessage = "The session information is invalid. Please try again.";
      break;
    case AUTH_ERROR_CODES.INVALID_TENANT_ID:
      errorMessage = "The tenant ID is invalid. Please check your tenant ID.";
      break;
    case AUTH_ERROR_CODES.MFA_INFO_NOT_FOUND:
      errorMessage = "The multi-factor authentication information was not found. Please try again.";
      break;
    case AUTH_ERROR_CODES.MFA_REQUIRED:
      errorMessage = "Multi-factor authentication is required. Please complete the required steps.";
      break;
    case AUTH_ERROR_CODES.MISSING_ANDROID_PACKAGE_NAME:
      errorMessage = "The Android package name is missing. Please check your settings.";
      break;
    case AUTH_ERROR_CODES.MISSING_APP_CREDENTIAL:
      errorMessage = "The app credential is missing. Please provide the required credentials.";
      break;
    case AUTH_ERROR_CODES.MISSING_AUTH_DOMAIN:
      errorMessage = "The authentication domain is missing. Please check your configuration.";
      break;
    case AUTH_ERROR_CODES.MISSING_CODE:
      errorMessage = "The verification code is missing. Please provide the code.";
      break;
  }
  return errorMessage;
};