import ImagePicker from 'react-native-image-crop-picker';

const ImageFromGallrey = callBack => {
  ImagePicker.openPicker({
    width: 500,
    height: 500,
    cropping: true,
    includeBase64: true,
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
    width: 500,
    height: 500,
    cropping: true,
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
