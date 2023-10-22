import toast from 'react-hot-toast';

const createToast = (type, message) => {
  if (type === 'success') {
    toast.success(message, {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  } else if (type === 'error') {
    // Добавьте обработку других типов уведомлений (например, error)
    toast.error(message, {
      style: {
        // настройки стиля для типа 'error'
      },
    });
  }
};

export default createToast;
