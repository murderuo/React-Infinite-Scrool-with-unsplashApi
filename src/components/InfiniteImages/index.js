import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScrool from "react-infinite-scroll-component";
import Image from "../Image";

function InfiniteImages({ access_key }) {
  //   const [data, setData] = useState(null);
  const [urlParamsAndImages, setParamsAndImages] = useState({
    count: 20,
    start: 1,
    images: [],
  });
  const endPoint = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=${urlParamsAndImages.count}&start=${urlParamsAndImages.start}`;

  useEffect(() => {
    const fetchData = async () => {
      const reponse = await axios.get(endPoint);
      const results = reponse.data;
      setParamsAndImages({ ...urlParamsAndImages, images: results });
      //   console.log(urlParamsAndImages);
    };

    fetchData();
  }, []);

  const nextFetchImages = async () => {
    console.log("working on");
    console.log(urlParamsAndImages);
    // setTimeout(() => {}, 750);
    setParamsAndImages({
      ...urlParamsAndImages,
      start: urlParamsAndImages.start + urlParamsAndImages.count,
    });
    const moreResponse = await axios.get(endPoint);
    const results = moreResponse.data;
    setParamsAndImages({
      ...urlParamsAndImages,
      images: urlParamsAndImages.images.concat(results),
    });
  };
  return (
    <>
      <InfiniteScrool
        dataLength={urlParamsAndImages.images.length}
        next={nextFetchImages}
        hasMore={true}
        // height={600}
        // width={500}
        loader={<h2>Loading...</h2>}
      >
        {urlParamsAndImages.images.map((image, index) => (
          <Image key={image.id + index} img={image} />
        ))}
      </InfiniteScrool>
    </>
  );
}

export default InfiniteImages;
