import Modal from '@/elements/Modal'
import Button from '@/elements/Button'
import Prediction from '@/components/Predictions/Prediction'

export default function ViewPredictionsModal({ 
    file = false,
    modalIsActive = false, 
    setModalIsActive = () => {},
}) {

    if (!file) return;

    const closeModal = () => {
        setModalIsActive(false)
    }

    const renderFooter = () => (
        <Button onClick={closeModal}>Close</Button>
    )

    return (
        <Modal 
            id="viewPredictionsModal" 
            title={file.title || 'Predictions'} 
            active={modalIsActive}
            onClose={closeModal}
            footer={renderFooter()}
        >
            <Prediction file={file} />

            {file.description && (
                <>
                    <hr className='border-gray-200 dark:border-gray-600' />
                    <p>{file.description}</p>
                </>
            )}
        </Modal>
    )
}