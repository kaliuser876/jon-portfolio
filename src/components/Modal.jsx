import { X } from "lucide-react";

export default function Modal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center
        transition-colors
        ${open ? "visible bg-black/70 z-[1000]" : "invisible"}
      `}
      style={{ zIndex: open ? 1000 : -1 }}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-black rounded-xl shadow-lg p-12 transition-all relative
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
          z-[1001]
        `}
        style={{ zIndex: 1001 }}
      >
        <button
          className="absolute top-3 right-3 text-white"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X />
        </button>

        {children}
      </div>
    </div>
  );
}