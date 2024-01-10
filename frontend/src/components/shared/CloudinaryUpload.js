import { cloudinary_upload_preset } from "../../config";
import { openUploadWidget } from "../../utils/CloudinaryService";

const CloudinaryUpload = ({ setUrl, setName }) => {
  const uploadImageWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: "dc4n1ojpv",
        uploadPreset: cloudinary_upload_preset,
        maxImageWidth: 600,
        sources: ["local"],
      },
      function (error, result) {
        if (!error && result.event === "success") {
          setUrl(result.info.secure_url);
          setName(result.info.original_filename);
        } else {
          if (error) {
            alert("Could not upload");
            console.log(error);
          }
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button
      className="bg-white font-semibold text-black rounded-full p-4"
      onClick={uploadImageWidget}
    >
      Select Track
    </button>
  );
};

export default CloudinaryUpload;
