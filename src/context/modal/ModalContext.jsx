import PropTypes from "prop-types";
import { createContext, useState } from "react";

const ModalContext = createContext();

export function ModalContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <ModalContext.Provider value={{ isOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
}

ModalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalContext;
