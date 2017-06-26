This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

``` update package.json, 
npm i -g npm-check-updates
npm-check-updates -u or ncu -u ,  ncu -a is just dry run
npm install
``` generate new page called place
ionic  generate page place


``` install native google map
ionic cordova plugin add cordova-plugin-geolocation
npm install --save @ionic-native/geolocation

npm install --save angular2-google-maps

``` deploy to android
http://ionicframework.com/docs/intro/deploying/

keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key
.jks  /home/yw/ionic2/my-places/platforms/android/build/outputs/apk/android-release-unsigned.apk  my-alias

```
what is different 
// IonicStorageModule.forRoot(MyApp)
    IonicStorageModule.forRoot()