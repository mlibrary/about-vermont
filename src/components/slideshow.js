import React, { useId, useRef, useState } from "react"
import PropTypes from "prop-types"

const MAX_SLIDES = 5

const Slideshow = ({ slides = [], label = "Featured content" }) => {
  const items = slides.filter(Boolean).slice(0, MAX_SLIDES)
  const [index, setIndex] = useState(0)
  const liveRef = useRef(null)
  const baseId = useId()

  if (items.length === 0) return null

  const count = items.length
  const goTo = next => setIndex((next + count) % count)

  const onKeyDown = event => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      goTo(index - 1)
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      goTo(index + 1)
    }
  }

  return (
    <section
      className="slideshow"
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={onKeyDown}
    >
      {/* Announces slide changes to screen readers */}
      <div className="sr-only" aria-live="polite" ref={liveRef}>
        {`Slide ${index + 1} of ${count}`}
      </div>

      <div className="slideshow-viewport">
        {items.map((slide, i) => (
          <div
            key={`${baseId}-slide-${i}`}
            id={`${baseId}-slide-${i}`}
            className="slideshow-slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            hidden={i !== index}
          >
            {slide.image && (
              <div className="slideshow-media">
                <img
                  src={slide.image}
                  alt={slide.alt || ""}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            )}
            {(slide.heading || slide.body || slide.buttonUrl) && (
              <div className="slideshow-body">
                {slide.heading && <h2>{slide.heading}</h2>}
                {slide.body && (
                  <div
                    className="slideshow-text"
                    dangerouslySetInnerHTML={{ __html: slide.body }}
                  />
                )}
                {slide.buttonUrl && slide.buttonLabel && (
                  <a className="btn btn-primary" href={slide.buttonUrl}>
                    {slide.buttonLabel}
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {count > 1 && (
        <div className="slideshow-controls">
          <button
            type="button"
            className="btn btn-secondary slideshow-arrow"
            onClick={() => goTo(index - 1)}
          >
            <span aria-hidden="true">&#8592;</span>
            <span className="sr-only">Previous slide</span>
          </button>

          <ul className="slideshow-dots" aria-label="Choose slide to display">
            {items.map((slide, i) => (
              <li key={`${baseId}-dot-${i}`}>
                <button
                  type="button"
                  className="slideshow-dot"
                  aria-current={i === index ? "true" : undefined}
                  aria-controls={`${baseId}-slide-${i}`}
                  onClick={() => goTo(i)}
                >
                  <span className="sr-only">
                    {`Slide ${i + 1}${slide.heading ? `: ${slide.heading}` : ""}`}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="btn btn-secondary slideshow-arrow"
            onClick={() => goTo(index + 1)}
          >
            <span aria-hidden="true">&#8594;</span>
            <span className="sr-only">Next slide</span>
          </button>
        </div>
      )}
    </section>
  )
}

Slideshow.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      alt: PropTypes.string,
      heading: PropTypes.string,
      body: PropTypes.string,
      buttonLabel: PropTypes.string,
      buttonUrl: PropTypes.string,
    })
  ),
  label: PropTypes.string,
}

export default Slideshow