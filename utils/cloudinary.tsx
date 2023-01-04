import axios from 'axios';

export const uploadImageToCloudinary = async (imageFile) => {
  // Set up the form data to be sent to Cloudinary
  const formData = new FormData();
  formData.append('file', imageFile);
  formData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET);

  try {
    // Make the request to Cloudinary's API to upload the image
    const response = await axios.post(process.env.CLOUDINARY_UPLOAD_URL, formData);

    // Return the image URL from the response
    return response.data.secure_url;
  } catch (error) {
    throw new Error(`Failed to upload image to Cloudinary: ${error}`);
  }
};
