import { useState } from 'react'
import Button from '@/elements/Button'
import Modal from '@/elements/Modal'
import axios from 'axios'
import _ from 'lodash'

export default function PredictModal({ 
    fileId = false, 
    files = [], 
    setFiles = () => {}, 
    modalIsActive = false, 
    setModalIsActive = () => {},
    setActiveTab = () => {}
}) {

    const selectedFile = _.find(files, { id: fileId });
    const [error, setError] = useState(false);

    const handleChange = (data) => {
        const { name, value } = data;
        const newFiles = [...files];
        const index = _.findIndex(newFiles, { id: fileId });
        newFiles[index][name] = value;
        setFiles(newFiles);
    }

    const closeModal = () => {
        setModalIsActive(false)
    }

    const predict = () => {
        axios.get('http://localhost:3009/predict')
            .then((response) => {
                setError(false);
                handleChange({ name: 'predictions', value: response.data.predictions });
                handleChange({ name: 'predicted_at', value: new Date().toLocaleString() });
                setActiveTab('predictions');
                closeModal();
            })
            .catch((error) => {
                setError(error.message);
            });

    }

    const renderFooter = () => (
        <>
            <Button onClick={closeModal}>Cancel</Button>
            <Button onClick={predict}>Submit</Button>
        </>
    )

    return (
        <Modal 
            id="predictModal" 
            title="Predict" 
            active={modalIsActive}
            onClose={closeModal}
            footer={renderFooter()}
        >
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Title</label>
                <div className="mt-2">
                    <input 
                        value={selectedFile?.title}
                        onChange={e => handleChange(e.target)}
                        type="text" 
                        name="title" 
                        id="title" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Title" />
                </div>
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Description</label>
                <div className="mt-2">
                    <textarea 
                        value={selectedFile?.description}
                        onChange={e => handleChange(e.target)}
                        type="text" 
                        name="description" 
                        id="description" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Description">
                    </textarea>
                </div>
            </div>
            {error && (
                <div>
                    <p className="text-red-500 text-sm">{error}</p>
                </div>
            )}
        </Modal>
    )
}