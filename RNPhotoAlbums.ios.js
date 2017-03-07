/**
 * @providesModule RNPhotoAlbums
 * @flow
 */
'use strict';

var NativeRNPhotoAlbums = require('NativeModules').RNPhotoAlbums;

/**
 * High-level docs for the RNPhotoAlbums iOS API can be written here.
 */

var RNPhotoAlbums = {
  test: function() {
    NativeRNPhotoAlbums.test();
  }
};

module.exports = RNPhotoAlbums;
