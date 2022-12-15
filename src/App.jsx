import React, { useEffect, useState } from "react";
import axios from "axios";
import { ACCESS_KEY } from "./config/constants";

const App = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&per_page=30`
      )

      .then((response) => setImageList(response.data));
  }, []);

  return (
    <div>
      <div>
        {imageList.map((image) => {
          // console.log(image.urls.regular);
          return;
          <div>
            <img src={image.urls.regular} />
            
          </div>;
        })}
      </div>
    </div>
  );
};

export default App;
