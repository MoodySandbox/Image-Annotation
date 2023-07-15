import { useRef, useState } from 'react'
import NextImage from 'next/image'
import Table from '@/elements/Table'
import Button from '@/elements/Button'
import PredictModal from '@/components/Images/PredictModal'
import Constants from '@/config/Constants'
import { v4 as uuidv4 } from 'uuid';

export default function ImagesTab({ 
    files = [], 
    setFiles = () => {}, 
    setActiveTab = () => {}
}) {

    const uploadRef = useRef(null);
    const [modalIsActive, setModalIsActive] = useState(false);
    const [selectedFileId, setSelectedFileId] = useState(false);

    const handleUploadFile = () => {
        if (!uploadRef.current) return;

        const uploadedFiles = uploadRef.current.files;
        if (!uploadedFiles.length) return;

        [...uploadedFiles].map((file) => {

            let img = new Image(),
                objectUrl = URL.createObjectURL(file),
                width, height;

            img.src = objectUrl;
            img.onload = function() {
                width = this.width
                height = this.height
                URL.revokeObjectURL(objectUrl);

                const newFile = [{
                    file, 
                    id: uuidv4(),
                    width: width,
                    height: height,
                    title: '',
                    description: '',
                    predictions: [],
                    predicted_at: false,
                    uploaded_at: new Date().toLocaleString()
                }]

                setFiles((prev) => [...prev, ...newFile]);
            };

        });
    }
  
    return (
        <div>

            <div className={'my-10 flex justify-between items-center w-full bg-white dark:bg-slate-800 p-5 md:p-10 rounded-lg shadow flex-col md:flex-row'}>
                <p className='text-center'>Select files to upload for predictions</p>
                <Button className='mt-5 md:mt-0' onClick={() => uploadRef.current?.click()}>
                    Upload image
                </Button>
            </div>
            <input
                hidden
                multiple
                type='file'
                accept='image/*'
                ref={uploadRef}
                onChange={handleUploadFile}
            />

            <div className="w-full overflow-x-auto mt-10 shadow rounded">
                {files && files.length > 0 && (
                    <Table 
                        className="rounded-lg overflow-hidden"
                        heads={Constants.imagesTableHeaders}
                        rows={files?.map(item => [
                            <NextImage
                                className="object-cover"
                                src={URL.createObjectURL(item.file)}
                                width={100}
                                height={100}
                                alt={item.file.name}
                            />,
                            item.file.name,
                            (item.file.size / (1024*1024)).toFixed(2) + ' MB',
                            item.uploaded_at,
                            <Button
                                onClick={() => {setSelectedFileId(item.id); setModalIsActive(true)}}
                            >
                                Predict
                            </Button>
                        ])}
                    />
                )}
            </div>

            <PredictModal
                fileId={selectedFileId}
                modalIsActive={modalIsActive}
                setModalIsActive={setModalIsActive}
                files={files}
                setFiles={setFiles}
                setActiveTab={setActiveTab}
            />

        </div>
    )
}
