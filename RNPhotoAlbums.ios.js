/**
  @providesModule RNPhotoAlbums
 */
'use strict';

import { NativeModules } from 'react-native';
const NativeRNPhotoAlbums = NativeModules.RNPhotoAlbums;

const RNPhotoAlbums = {
  getAlbumTitles: function(callback) {
    NativeRNPhotoAlbums.getAlbumTitles(callback);
  }
};

module.exports = RNPhotoAlbums;
