/**
  @providesModule RNPhotoAlbums
 */
'use strict';

import { NativeModules } from 'react-native';
const NativeRNPhotoAlbums = NativeModules.RNPhotoAlbums;

const RNPhotoAlbums = {
  getAlbumTitles: function() {
    NativeRNPhotoAlbums.getAlbumTitles();
  }
};

module.exports = RNPhotoAlbums;
