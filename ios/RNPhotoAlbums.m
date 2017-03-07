#import "RNPhotoAlbums.h"

@implementation RNPhotoAlbums

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getAlbumTitles:(RCTResponseSenderBlock)callback)
{
  //fetch albums of any subtype
  PHFetchResult *fetchedAlbums = [PHAssetCollection fetchAssetCollectionsWithType:PHAssetCollectionTypeAlbum subtype:PHAssetCollectionSubtypeAny options:nil];

  int i;
  NSMutableArray *albums = [NSMutableArray array];

  NSUInteger count;
  count = [fetchedAlbums count];

  for (i = 0; i < count; i++) {
    PHAssetCollection *album = fetchedAlbums[i];
    [albums addObject:album.localizedTitle];
  }

  NSArray *returnArray = [NSArray arrayWithArray:albums];

  callback(@[[NSNull null], returnArray]);
}

@end
