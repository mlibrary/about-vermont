import React, { useEffect, useId, useRef, useState } from "react"

const JournalCard = ({ cover, journal }) => {
  const { title, author, readLink, description } = journal
  const [isOpen, setIsOpen] = useState(false)
  const dialogId = useId()
  const closeButtonRef = useRef(null)
  const triggerRef = useRef(null)

  const closeModal = () => {
    setIsOpen(false)
    window.setTimeout(() => triggerRef.current?.focus(), 0)
  }

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = event => {
      if (event.key === "Escape") {
        closeModal()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    closeButtonRef.current?.focus()

    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  const trapFocus = event => {
    if (event.key !== "Tab") return

    const focusableElements = event.currentTarget.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    const focusable = Array.from(focusableElements)
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last?.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first?.focus()
    }
  }

  return (
    <>
      <article className="card journal-card">
        {cover && (
          <div className="journal-card-image">
            <img src={cover} alt={title} className="card-img-top" />
          </div>
        )}

        <div className="card-body">
          <button
            ref={triggerRef}
            type="button"
            className="btn btn-secondary card-details-button"
            aria-haspopup="dialog"
            aria-controls={dialogId}
            onClick={() => setIsOpen(true)}
          >
            <span aria-hidden="true">More details</span>
            <span className="sr-only"> about {title}</span>
          </button>
        </div>
      </article>

      {isOpen && (
        <div
          className="card-modal-backdrop"
          onMouseDown={event => {
            if (event.target === event.currentTarget) closeModal()
          }}
        >
          <section
            id={dialogId}
            className="card-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${dialogId}-title`}
            onKeyDown={trapFocus}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="card-modal-close"
              onClick={closeModal}
            >
              <span aria-hidden="true">&times;</span>
              <span className="sr-only">Close details</span>
            </button>

            {cover && (
              <div className="card-modal-image">
                <img src={cover} alt={`Cover of ${title}`} />
              </div>
            )}

            <div className="card-modal-content">
              <h2 id={`${dialogId}-title`}>{title}</h2>

              {author && <p className="card-modal-author">By {author}</p>}

              {description && (
                <p className="card-modal-description">{description}</p>
              )}

              {readLink && (
                <a className="btn btn-primary" href={readLink}>
                  Read free online
                </a>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default JournalCard
