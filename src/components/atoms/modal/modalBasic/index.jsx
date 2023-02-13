import { useEffect } from "react"

export function BasicModal({ children, isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <div className="modal">
            <div className="modal-overlay" onClick={onClose} />
            <div className="modal-basic">
                {children}
            </div>
        </div>
    )
}