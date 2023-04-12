import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Image from "next/image";

const Modal2 = ({ show, onClose, children}) => {
  const [isBrowser, setIsBrowser] = useState(false);
  console.log("Modal2")

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <a href="#" className="text-white font-bold" onClick={handleCloseClick}>
            x
          </a>
        </StyledModalHeader>
          <div className="overflow-x-scroll">
            <Image 
              className="relative z-[1] max-w-[210%]"
              src="/images/Schedule 2.svg"
              alt="schedule 2"
              width="800"
              height="400"
            />
          </div>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};



const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`

  width: 92%;
  height: auto;
  border-radius: 15px;
  padding: 5px;
`;
const StyledModalOverlay = styled.div`
  position: fixed;
  z-index: 40;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.65);
`;

export default Modal2;