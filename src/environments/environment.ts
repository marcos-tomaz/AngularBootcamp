// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "",
    authDomain: "bootcamp-vnt-shopping.firebaseapp.com",
    databaseURL: "https://bootcamp-vnt-shopping.firebaseio.com",
    projectId: "bootcamp-vnt-shopping",
    storageBucket: "bootcamp-vnt-shopping.appspot.com",
    messagingSenderId: "481561882048"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
