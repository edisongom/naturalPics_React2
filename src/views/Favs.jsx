import React from "react";

import { useContext } from "react";
import ImageContext from "../context/ImageContext";
import Heart from "../components/Heart";

const Favs = () => {
    const { images } = useContext(ImageContext);

    return (
        <div>
            <h1>Fav Pictures</h1>
            <div className="p-3 galeria grid-columns-4">
                {images
                    .filter((image) => image.liked)
                    .map((image, i) => (
                        <div
                            key={i}
                            className="foto"
                            style={{
                                backgroundImage: `url(${image.src.portrait})`,
                            }}
                        >
                            <Heart filled={image.liked} />
                            <p>{image.alt}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Favs;
