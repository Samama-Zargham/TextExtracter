import ImagePicker from 'react-native-image-crop-picker';

const ImageFromGallrey = callBack => {
  ImagePicker.openPicker({
    width: 1200,
    height: 1200,
    cropping: true,
    showCropGuidelines: true,
    showCropFrame: true,
    mediaType: "photo",
  })
    .then(imageData => {
      console.log('IMAGE FROM GALLERY===>>>', imageData.path);
      callBack(imageData.path);
    })
    .catch(error => {
      console.log(error);
    });
};

const ImageFromCamera = (callBack) => {
  ImagePicker.openCamera({
    width: 1200,
    height: 1200,
    cropping: true,
    showCropGuidelines: true,
    showCropFrame: true
  })
    .then(imageData => {
      callBack(imageData?.path);
    })
    .catch(error => {
      console.log(error);
    });
};

export {
  ImageFromCamera,
  ImageFromGallrey,
};
