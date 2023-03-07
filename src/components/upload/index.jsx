import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { storeImageToFireBase } from '../../utils/storeImageToFirebase';
import Banner from '../banner';

function Upload() {
      const [image, setImage] = useState("");
      const [selectedFile, setSelectedFile] = useState();
      const [isLoading, setIsLoading] = useState(false);
      console.log("🚀 ~ file: index.jsx:11 ~ Upload ~ isLoading:", isLoading)
      useEffect(
        () => {
          const uploadImage = async () => {
            setIsLoading(true);
            if (!selectedFile) {
              setIsLoading(false);
              return;
            }
            const { isSuccess, imageUrl, message } = await storeImageToFireBase(
              selectedFile
            );
            if (isSuccess) {
              setImage(imageUrl);
              setIsLoading(false);
              return imageUrl;
            } else {
              console.log(message);
            }
            setIsLoading(false);
          };
          uploadImage();
        },
        // eslint-disable-next-line
        [selectedFile]
      );
      const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
          setSelectedFile(undefined);
          return;
        }
        setSelectedFile(e.target.files[0]);
      };
      // useEffect(
      //   () => {
      //      dispatch(postLogin());
      //   },
      //   // eslint-disable-next-line
      //   []
      // );
  return (
    <div>
      <Banner />
      <img src={image} alt="" />
      <input
        type="file"
        name="imageUrl"
        accept="image/*"
        onChange={onSelectFile}
        id="upload"
      />
    </div>
  );
}

export default Upload