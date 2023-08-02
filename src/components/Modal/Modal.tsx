import { StyleSheet, Text, View, Modal } from "react-native";
import React from "react";
import ModalItem from "../ModalItem/ModalItem";

const CustomModal = ({ children, isVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        alert("Modal has been closed.");
        setModalVisible(!isVisible);
      }}
    >
      <View style={{ ...styles.centeredView, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <View style={styles.modalView}>
          {children}
          {/* <ModalItem /> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 25,
    width: 320,
    alignItems: "left",
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

export default CustomModal;
