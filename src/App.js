import React from "react";
import "./App.css";
// import Images from "./components/Images";

<ImageRow>
  {images.map(img => (
    <Image src={img.src} />
  ))}
</ImageRow>;

// class ShowImage extends React.Component {
//   render() {
//     return (
//       <div className="Images">
//         {this.state.images.map(image => {
//           return <img src="{images.src}" />;
//         })}
//       </div>
//     );
//   }
// }

class ImageRow extends React.Component {
  state = {
    images: [
      { id: 1, src: "../../public/img/chapel.jpg", wasClicked: false },
      { id: 2, src: "../../public/img/martinback.jpg", wasClicked: false },
      { id: 3, src: "../../public/img/martinbuds.jpg", wasClicked: false }
    ]
  };

  componentDidMount() {
    axios.get("/api/images").then(images => this.setState(images));
  }

  onImgClick(idx) {
    // update the wasClicked status of the clicked image
    newImages = [...this.state.images];
    newImages[idx].wasClicked == true;
    this.setState({ images: newImages });
  }

  render() {
    return (
      <div>
        {this.state.images.map(img, idx => (
          <Image
            key={img.id}
            src={img.src}
            wasClicked={img.wasClicked}
            onClick={() => this.onImgClick(idx)}
          />
        ))}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h1>Clicky Game</h1>
      <h2>
        Click on an image to earn points, but don't click on any more than once
      </h2>
    </div>
  );
}

export default ShowImage;
export const test = "test";
