import { useState } from "react"



const Gallery = ({ images }) => {
  const [imgIdx, setImgIdx] = useState(0)

  const handleNext = () => {
    if (imgIdx < images.length - 1) {
      setImgIdx(imgIdx + 1)
    }
  }

  const handlePrev = () => {
    if (imgIdx > 0) {
      setImgIdx(imgIdx - 1)
    }
  }

  return (
    <div>
      <div>
        <button disabled={imgIdx === 0 ? 'true' : ''} onClick={handlePrev}>prev</button>
        <img src={images[imgIdx]} />
        <button disabled={imgIdx === images.length - 1 ? 'true' : ''} onClick={handleNext}>next</button>
      </div>
      {imgIdx + 1}/{images.length}
    </div>
  )
}

export default Gallery