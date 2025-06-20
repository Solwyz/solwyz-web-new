import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Arrow from '@assets/AdminBlogPage/arrow_forward_ios.svg';
import uploadIcon from "@assets/AdminBlogPage/Frame (1).svg";
import AddBtn from "@assets/AdminBlogPage/Add (2).svg";
import AddHover from "@assets/AdminBlogPage/AddHover.svg";
import Api from '../../../Services/Api';

function AdminBlogForm() {

    const navigate = useNavigate();

    const { blogId } = useParams();

    const [blogForm, setBlogForm] = useState({
        name: '',
        shortDescription: '',
        image: null,
    });
    const [previewImage, setPreviewImage] = useState(null);
    const [blogData, setBlogData] = useState(null);
    const [paragraphs, setParagraphs] = useState([]);
    const [isHovered, setIsHovered] = useState(false);

    const handleParagraphChange = (index, value) => {
        const updated = [...paragraphs];
        updated[index] = value;
        setParagraphs(updated);
    }

    const addParagraph = () => {
        setParagraphs((prev) => [...prev, '']);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBlogForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBlogForm((prev) => ({ ...prev, image: file }));
            const reader = new FileReader();
            reader.onloadend = () => setPreviewImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        const formData = new FormData();
        formData.append('title', blogForm.name);
        formData.append('shortDescription', blogForm.shortDescription);
        formData.append('paragraphss', paragraphs);
        if (blogForm.image) {
            formData.append('image', blogForm.image);
        }

        // paragraphs.forEach((para, index) => {
        //     formData.append(`paragraphs[${index}]`, para);
        // });

        const method = blogId ? Api.put : Api.post;
        const url = blogId ? `api/blog/update/${blogId}` : 'api/blog/create';

        method(url, formData, {
            'Content-Type': 'multipart/form-data',
        })
            .then((res) => {
                console.log('blogForm:', blogForm);
                console.log('paragraphs:', paragraphs);
                console.log("Form data:", formData);
                console.log("Blog save response:", res);
                if (res.status === 200) {
                    alert(blogId ? 'Blog updated successfully' : 'Blog created successfully');
                    navigate('/admin/blogPage');
                }
            })
            .catch((err) => {
                console.error("Blog save error:", err);
            });
    };

    useEffect(() => {
        console.log("Blog ID:", blogId);
        Api.get(`api/blog/${blogId}`).then((res) => {
            if (res && res.status === 200) {
                console.log("Blog data:", res.data);
                setBlogData(res.data);
                //   const data = res.data.data;
                //   setBlogForm({
                //     name: data?.title,
                //     shortDescription: data?.shortDescription,
                //     image: null,
                //   });
                //   setPreviewImage(data?.image);
            }
        });

    }, []);

    useEffect(() => {
        if (blogData) {
            setBlogForm({
                name: blogData.title,
                shortDescription: blogData.shortDescription,
                image: null,
            });
            setPreviewImage(blogData.image);
            setParagraphs(blogData.paragraphss);
        }
    }, [blogData])

    return (
        <div>
            <div className="flex justify-between items-center">
                <Link to="/admin/blogPage">
                    <h2 className="text-base font-semibold mt-6 flex items-center">
                        <img className="mr-2" src={Arrow} alt="" /> {blogId ? 'Edit Blog' : 'Create Blog'}
                    </h2>
                </Link>
                <button
                    className="px-6 py-3 bg-[#ED1C24] hover:bg-[#BD1D23] duration-300 rounded-lg text-white text-sm font-semibold"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>

            <div className="flex justify-between mt-12">
                <div>
                    <label className="block text-sm font-medium">Title</label>
                    <input
                        type="text"
                        name="name"
                        value={blogForm.name}
                        onChange={handleInputChange}
                        className="w-[717px] h-[48px] px-4 mt-2 border border-[#E8E8E8] rounded-lg"
                        placeholder="Enter name"
                    />

                    <label className="block text-sm font-medium mt-8">Blog short description</label>
                    <textarea
                        name="shortDescription"
                        value={blogForm.shortDescription}
                        onChange={handleInputChange}
                        className="w-[717px] h-[123px] resize-none px-4 py-4 mt-2 border border-[#E8E8E8] rounded-lg"
                        placeholder="Add blog short description"
                    ></textarea>
                </div>

                <div className="mt-4">
                    <div className="flex flex-col items-center w-fit">
                        {previewImage ? (
                            <img src={previewImage} className="mb-2 w-[285px] h-[231px] object-cover" alt="Preview" />
                        ) : (
                            <div className="mb-2 px-[160px] py-[95px] border border-dashed bg-[#F5F5F5] text-gray-400">
                                <img src={uploadIcon} alt="Upload Icon" />
                            </div>
                        )}
                        <label htmlFor="photo-upload" className="text-[#0539BC] text-[12px] font-normal cursor-pointer mt-3">
                         Add photo (max size 2Mb) 
                        </label>
                        <input
                            id="photo-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </div>
                </div>

            



            </div>
                <div className='mt-10 '>
                    <div className='flex justify-between items-center'>
                        <div className='text-[14px] font-semibold'>Main Description</div>
                    </div>
                    {paragraphs.map((res, index) => (
                        <textarea
                            key={index}
                            value={res}
                            onChange={(e) => handleParagraphChange(index, e.target.value)}
                            placeholder={`Paragraph ${index + 1}`}
                            className='text-[14px] font-normal mt-4 w-full h-[318px] px-4 py-3 rounded-lg border border-[#CCCCCC] focus:outline-[#098476] placeholder:text-[#C5C5C5]'
                        />
                    ))}
                    <div
                        onClick={addParagraph}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className='flex items-center justify-center gap-2 py-4 rounded-lg bg-[#E7E7E7] text-[#000000] hover:text-[#0B776B] cursor-pointer mt-4'
                    >
                        {/* <img src={addIconBlack} className='w-4 h-4'></img> */}
                        <div className='text-[14px] font-normal flex justify-center items-center duration-300'> <img className='mr-2' src={isHovered ? AddHover:AddBtn} alt="" /> Add Paragraph</div>
                    </div>
                </div>
        </div>
    );
}

export default AdminBlogForm;
