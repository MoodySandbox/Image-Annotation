import { useState } from 'react'
import Image from 'next/image'
import Table from '@/elements/Table'
import Button from '@/elements/Button'
import ViewPredictionsModal from '@/components/Predictions/ViewPredictionsModal'
import Constants from '@/config/Constants'

export default function predictionsTab({ 
    files = [], 
}) {

    const [selectedFile, setSelectedFile] = useState(false);
    const [modalIsActive, setModalIsActive] = useState(false);
    const predictedFiles = _.filter(files, file => file.predictions.length);
  
    return (
        <div>

            {predictedFiles.length === 0 && (
                <div className={'my-10 flex justify-between items-center w-full bg-white dark:bg-slate-800 p-10 rounded-lg shadow'}>
                    <p>No predictions yet.</p>
                </div>
            )}

            {predictedFiles.length > 0 && (
                <div className="w-full overflow-x-auto mt-10 shadow rounded">
                        <Table 
                            className="rounded-lg overflow-hidden"
                            heads={Constants.predictionsTableHeaders}
                            rows={predictedFiles.map(item => [
                                <Image
                                    className="object-cover"
                                    src={URL.createObjectURL(item.file)}
                                    width={100}
                                    height={100}
                                    alt={item.title}
                                />,
                                item.title || 'Untitled',
                                item.description || 'No description',
                                item.predicted_at,
                                <Button
                                    onClick={() => {setSelectedFile(item); setModalIsActive(true)}}
                                >
                                    View
                                </Button>
                            ])}
                        />
                </div>
            )}

            <ViewPredictionsModal
                file={selectedFile}
                modalIsActive={modalIsActive}
                setModalIsActive={setModalIsActive}
            />

        </div>
    )
}
