"use client";
import { CldImage } from "next-cloudinary";
import type React from "react";

interface CloudinaryImageProps {
  publicId: string;
}

export const CloudinaryImage: React.FC<CloudinaryImageProps> = ({
  publicId,
}) => {
  return (
    <CldImage
      width="960"
      height="600"
      src={publicId}
      sizes="100vw"
      alt="Descripción del proyecto"
      placeholder="blur"
      blurDataURL={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/w_10/${publicId}`}
    />
  );
};
