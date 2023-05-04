import { useRef, useState } from "react";

function EditImage() {
    const fileInput = useRef(null);
    const [image, setImage] = useState("");
    const [fileError, setFileError] = useState(false);

    const handleImage = (e) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    }

    const handleSubmit =(e) =>{
        e.preventDefault();

        if (!image) {
            alert("Please Upload Image First");

            return;
        }
        else {const formData = new FormData();

            formData.append("image", image);
    
            try {
                console.log("Image")
            } catch (error) {
                console.log(error)
            }}

        
    }

    return (
        <div>
            <form onSubmit={handleImage}>
                <input type="file" accept="image/*" onChange={handleSubmit}></input>
                <button type="submit"> Upload </button>
            </form>

        </div>
    )
 
}

export default EditImage;