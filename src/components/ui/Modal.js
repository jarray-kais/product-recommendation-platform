const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-1/3">
        <div className="p-4">{children}</div>
        <button onClick={onClose} className="absolute top-2 right-2">
          ×
        </button>
      </div>
    </div>
  );
};

export default Modal;
