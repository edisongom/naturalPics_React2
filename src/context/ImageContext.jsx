import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const imgs = async () => {
        try {
            const response = await axios.get("../public/fotos.json");
            setImages(response.data.photos);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        imgs();
    }, []);

    const [images, setImages] = useState([]);

    const toggleLike = (id) => {
        const newImages = images.map((image) => {
            if (image.id === id) {
                
                return { ...image, liked: !image.liked };
            }
            return image;
        });
        setImages(newImages);
    };

    return (
        <ImageContext.Provider value={{ images, setImages, toggleLike }}>
            {children}
        </ImageContext.Provider>
    );
};

export default ImageContext;
