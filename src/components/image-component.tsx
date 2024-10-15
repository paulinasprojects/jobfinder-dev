import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface ImageComponentProps {
  coverImage: string | StaticImageData;
  mobileCoverImage: string | StaticImageData;
  profileImage: string | StaticImageData;
  className?: string;
}

const ImageComponent = ({coverImage, mobileCoverImage, profileImage, className}: ImageComponentProps) => {
  return (
    <>
       <Image
          src={coverImage}
          alt="job details image"
          className="ml-5 mt-5 hidden lg:block"
        />
        <Image
          src={mobileCoverImage}
          alt="mobile cover image"
          className="block lg:hidden max-sm:ml-[24px] max-sm:mt-5"
        />
        <Image
          src={profileImage}
          alt="company logo image"
          className={cn("ml-10 -mt-5 max-sm:ml-16", className)}
        />
    </>
  )
}

export default ImageComponent