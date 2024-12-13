import { createContext, useContext, useState } from "react";
import { Modal, Pressable, Text, View, StyleSheet } from "react-native";

type ModalContextType = {
  openModal: (title: string, content: string) => void;
};

const ModalContext = createContext<ModalContextType>({} as ModalContextType);

type ModalContextProviderProps = {
  children: React.ReactNode;
};

export const useCustomModal = () => useContext(ModalContext);

const CustomModalProvider = ({ children }: ModalContextProviderProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (title: string, content: string) => {
    setModalVisible(true);
    setModalContent(content);
    setModalTitle(title);
  };

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalTitle}</Text>
            <Text>{modalContent}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ModalContext.Provider>
  );
};

export default CustomModalProvider;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
