import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image2.jpg",
  "https://res.cloudinary.com/demo/image/upload/v1652366604/docs/demo_image5.jpg",
  "https://res.cloudinary.com/demo/image/upload/v1652345874/docs/demo_image1.jpg",
];

export default function ImageCarousel() {
  return (
      <Carousel 
      infiniteLoop
      thumbWidth={64}
      >
        {images.map((URL, index) => (
          <div className="slide project-carousel">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
  );
}