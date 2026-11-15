
import { useEffect } from "react";

function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>

        <h2 id="modal-title">{title}</h2>

        {children}
      </section>
    </div>
  );
}

export default Modal;
