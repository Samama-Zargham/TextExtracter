import ImagePicker from 'react-native-image-crop-picker';
// import { createThumbnail } from 'react-native-create-thumbnail';
import S3 from 'aws-sdk/clients/s3';
var fs = require('react-native-fs');
import AWS from "aws-sdk"
import { decode } from 'base64-arraybuffer';
import moment from 'moment';
import { FlashMessage } from '../Components/Reusables/SnackBar';
// import AsyncStorage from '@react-native-async-storage/async-storage';


// const generateThumbnail = path => {
//     setIsLoading(true);
//     createThumbnail({
//       url: path,
//       timeStamp: 10000,
//     })
//       .then(response => {
//         // console.log('thumbnail', response.path);
//         setThumbnail(response.path);
//         setIsLoading(false);
//       })
//       .catch(err => console.log({ err }));
//   };

const newImageFromGallrey = (callbackforSetState) => {
  ImagePicker.openPicker({
    width: 500,
    height: 500,
    cropping: true,
    includeBase64: true,
    mediaType: "photo",
  })
    .then(imagePath => {
      console.log('IMAGE FROM GALLERY===>>>', imagePath);
      let obj = {
        path: imagePath.path,
        base64: imagePath.data,
        contentType: "image/jpeg"
      }
      callbackforSetState(obj);
    })
    .catch(error => {
      console.log(error);
    });
};
const ImageFromGallrey = callBack => {
  ImagePicker.openPicker({
    width: 700,
    height: 700,
    cropping: true,
    includeBase64: true,
    mediaType: "photo",
  })
    .then(imagePath => {
      console.log('IMAGE FROM GALLERY===>>>', imagePath.path);
      callBack(imagePath.path);
    })
    .catch(error => {
      console.log(error);
    });
};
const SingleImageFromGallrey = (setImages, closeSheet, setVideoNull) => {
  ImagePicker.openPicker({
    width: 900,
    height: 900,
    cropping: true,
    mediaType: "photo",
    compressImageQuality: 0.5,
  })
    .then(async images => {
      const imgObj = [
        {
          mediaType: 'image/jpeg',
          path: images.path,
        }]

      setImages(imgObj);
      closeSheet ? closeSheet() : null
      setVideoNull ? setVideoNull() : null
    })
    .catch(error => {
      console.log(error);
    });
};
const MultiImageFromGallrey = (setImages, closeSheet, setVideoNull) => {
  ImagePicker.openPicker({
    width: 900,
    height: 900,
    cropping: true,
    multiple: true,
    mediaType: "photo",
    compressImageQuality: 0.5,
  })
    .then(async images => {
      const result = [];

      for await (const image of images) {
        const img =
        // await ImagePicker.openCropper(
        {
          mediaType: 'image/jpeg',
          path: image.path,
        }
        // );
        result.push(img);
      }
      setImages(result);
      closeSheet();
      setVideoNull();
    })
    .catch(error => {
      console.log(error);
    });
};

const ImageFromCamera = (setImages, closeSheet, setVideoNull) => {
  ImagePicker.openCamera({
    width: 1000,
    height: 1200,
    // cropping: true,
  })
    .then(camoImage => {
      setImages([{
        path: camoImage?.path,
        mediaType: "image/jpeg"
      }]);
      closeSheet();
      setVideoNull();
    })
    .catch(error => {
      console.log(error);
    });
};
const VideoFromGallery = (setVideo, setImagesNull, closeSheet) => {
  ImagePicker.openPicker({
    mediaType: 'video',
    // multiple: true,
  })
    .then(async videos => {
      console.log("----------> ", videos)
      const result = [];

      for await (const video of videos) {
        const vido = {
          mediaType: 'photo',
          path: video.path,
          width: 1000,
          height: 1000,
        };
        await result.push(vido.path);
      }
      setVideo(result);
      setImagesNull();
      closeSheet();
    })
    .catch(error => {
      console.log(error);
    });
};
const singleVideoFromGallery = (setVideo, setImagesNull, closeSheet) => {
  ImagePicker.openPicker({
    mediaType: 'video',
  })
    .then(async videos => {
      let video = [{
        path: videos?.path,
        mediaType: "video/mp4"
      }]
      setVideo(video);
      setImagesNull();
      closeSheet();
    })
    .catch(error => {
      console.log(error);
    });
};

const uploadImageOnS3F = (file, uploading, onSuccess) => {
  console.log("000000000000000000===>>>  ", file)
  try {

    return new Promise(async (resolve, reject) => {
      uploading(true);

      const BUCKET_NAME = 'readyhand';
      const IAM_USER_KEY = 'AKIA6C6GN4BYC34QGVHP';
      const IAM_USER_SECRET = '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';

      const s3bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        Bucket: BUCKET_NAME,
        signatureVersion: 'v4',
        region: 'eu-central-1',
      });

      let contentType = file?.mediaType;
      let contentDeposition = 'inline;filename="' + `${file?.mediaType} ${Math.floor(new Date().getTime())}` + '"';
      const base64 = await fs.readFile(file.path, 'base64')
      // console.log("base64=>  ", base64)
      const arrayBuffer = decode(base64);

      s3bucket.createBucket(async () => {
        const params = {
          Bucket: BUCKET_NAME,
          Key: `image${Math.floor(new Date().getTime())}`,
          Body: arrayBuffer,
          ContentDisposition: contentDeposition,
          ContentType: contentType,
        };
        await s3bucket
          .upload(params)
          .promise()
          .then(data => {
            console.log('then S3 upload => ', data.Location);
            let s3Url = data?.Location
            // onSuccess(s3Url)
            resolve(s3Url);
          })
          .catch(err => {
            FlashMessage("Image uploading error", "red")
            reject()
            uploading(false)
            console.log("catch S3 upload", err);
          });
      });

    })

  } catch (error) {
    FlashMessage("Image uploading error", "red")
    uploading(false);
  }

};
const RemoveItemFromArray = (array, item, callbackforSetState) => {
  let tempArray = Object.assign([], array);
  let index = tempArray.indexOf(item);
  if (index > -1) {
    tempArray.splice(index, 1);
  }
  callbackforSetState(tempArray);
};
const randomNumberRange = (min, max) => {

  return Math.floor(Math.random() * (max - min + 1)) + min;

}
const AddORremoveFromArray = (array, item, callbackforSetState) => {
  let tempArray = Object.assign([], array);
  let index = tempArray.indexOf(item);
  if (index > -1) {
    tempArray.splice(index, 1);
  } else {
    tempArray?.push(item);
  }
  callbackforSetState(tempArray);
};
function checkObjectEquality(objA, objB) {
  if (typeof objA != "object" || typeof objB != "object") return objA == objB
  for (const k in objA) {
    if (!(objB.hasOwnProperty(k))) return false
    const b = checkObjectEquality(objA[k], objB[k])
    if (!b) return b
  }
  for (const k in objB) if (!(objA.hasOwnProperty(k))) return false
  return true
}

const GetDaysAgo = (createdAt) => {
  let DaysAgo = moment.utc(new Date(Date.parse(createdAt ?? new Date()))).local().startOf('seconds').fromNow()
  return DaysAgo
}
const RemoveFromAsyncStorage = (key) => {
  return new Promise(async (resolve, reject) => {
    // await AsyncStorage.removeItem(key, (err, response) => {
    //   if (response) {
    //     console.log("resolve==>>  ", response)
    //     resolve(response);
    //   } else {
    //     console.log("reject==>>  ", response)
    //     reject(err);
    //   }
    // });
  })
}

const likeUnlike = (state, setState, postId, likeFlag) => {
  // console.log(postId, "==", state?.posts)
  let tempArray = Object.assign([], state);
  tempArray?.posts.map((item) => {
    if (item?._id == postId) {
      if (likeFlag) {
        // console.log("true")
        item.likeCount += 1
      } else {
        // console.log("false")
        item.likeCount -= 1
      }
    }
  })
  setState(tempArray);
}
export {
  ImageFromCamera,
  ImageFromGallrey,
  MultiImageFromGallrey,
  VideoFromGallery,
  newImageFromGallrey,
  singleVideoFromGallery,
  uploadImageOnS3F,
  randomNumberRange,
  RemoveItemFromArray,
  AddORremoveFromArray,
  SingleImageFromGallrey,
  checkObjectEquality,
  GetDaysAgo,
  RemoveFromAsyncStorage,
  likeUnlike
};
