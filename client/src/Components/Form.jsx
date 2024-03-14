import { useState } from "react";

export default function Form(){
    const [form, setForm] = useState({
        title: "",
        githubLink: "",
        pagesLink: "",
        image: "",
        date: "",
        desc: ""
    });
    function updateForm(value) {
        const problemCharacters = ["<", ">", "'", '"',];
        if(
            Object.keys(value)[0] !== "link" &&  
            Object.keys(value)[0] !== "image" && 
            Object.keys(value)[0] !== "date"
        ){
            if(Object.values(value)[0].split("").every(character => !problemCharacters.includes(character))){
                return setForm((prev) => {
                    return { ...prev, ...value };
                }); 
            }
        }
        return setForm((prev) => {
            return { ...prev, ...value };
        }); 
    }

    async function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('githubLink', form.link);
        formData.append('pagesLink', form.publisherLink);
        formData.append('image', form.image);
        formData.append('date', form.date);
        formData.append('desc', form.desc);
        try {
            const response = await fetch('/', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                required
                name="title"
                id="title"
                placeholder="Enter display title for project"
                onChange={(e) => updateForm({ title: e.target.value })}
            />
            <input 
                type="file" 
                name="link" 
                id="link"
                accept=".pdf"
                onChange={(e) => updateForm({ link: e.target.files[0] })}
            />
            <input 
                type="text"
                required
                name="publisherLink"
                id="publisherLink"
                placeholder="Enter the publisher link for project"
                onChange={(e) => updateForm({ publisherLink: e.target.value })}
            />
            <input 
                type="text"
                required
                name="desc"
                id="desc"
                placeholder="Enter the description for the project"
                onChange={(e) => updateForm({ desc: e.target.value })}
            />
            <input 
                type="file"
                required
                name="image"
                id="image"
                accept="image/*"
                placeholder="Enter the image url for project"
                onChange={(e) => updateForm({ image: e.target.files[0] })}
            />
            <input
                type="date"
                required
                name="date"
                id="date"
                placeholder="Enter upload date for project"
                onChange={(e) => updateForm({ date: new Date(e.target.value) })}
            />
            <button type="submit">Submit</button>
        </form>
    )
}