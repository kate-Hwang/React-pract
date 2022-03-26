


import React from 'react';
import '../asset/css/modal.css';

const AlertModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section className="Alert-contents-section">
          <header> 
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>

          <main>
            {props.children}
            <div className="alert-modal">
                <p>Show Alert 입니다</p>
            </div>
          </main>
            
          <footer className="alert-closing-page-btn">
              <button className="close" onClick={close}>
                OK
              </button>
          </footer>

        </section>
      ) : null}
    </div>
  );
};
export default AlertModal;