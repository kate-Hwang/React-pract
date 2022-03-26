import { useState } from 'react';
import AlertModal from '../Service/AlertModal';



function GrobalAlertModal(){

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => { setModalOpen(true); };
    const closeModal = () => { setModalOpen(false); };

    return(
        <>
            <div className="check-submit-btn">
                <button type="button" className="angled-total-btn" onClick={openModal}>등록하기</button>
                <button type="button" className="angled-total-btn" >취소</button>
                <AlertModal open={modalOpen} close={closeModal} header=""></AlertModal>
            </div>
        </>
    )
}
export default GrobalAlertModal;