import { toast } from 'react-hot-toast';

export const ErrorMessage = (message: string = 'Something went wrong'): void => {
  toast.error(message, {
    duration: 3000,
    position: 'top-right',
    style: {
      background: '#d32f2f',
      color: '#fff',
    },
  });
};