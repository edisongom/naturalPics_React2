import React, { useContext } from "react";
import "../styles.css";
import Heart from "./Heart";
import ImageContext from "../context/ImageContext";

const Gallery = () => {
    const { images, toggleLike } = useContext(ImageContext);

    return (
        <div className="galeria grid-columns-5 p-3">
            {images.map((image, i) => (
                <div
                    key={i}
                    className="foto"
                    style={{
                        backgroundImage: `url(${image.src.portrait})`,
                    }}
                    onClick={() => toggleLike(image.id)}
                >
                    <Heart filled={image.liked} />
                    <p>{image.alt}</p>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
