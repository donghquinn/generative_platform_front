import FormData from 'form-data';
import fs from 'fs';

export const sendImageFile = async (formData: FormData, fileName: string) => {
  const options = {
    method: 'POST',
    body: formData,
  };
};
