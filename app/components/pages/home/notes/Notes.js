import {
  Alert,
  // ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import CancelSvg from "../../../../assets/svg/CancelSvg";
import SaveFilledSvg from "../../../../assets/svg/SaveFilledSvg";

export default function Notes() {
  const [hasNotes, setHasNotes] = useState(true);
  const [writeNote, setWriteNote] = useState(false);
  const [text, setText] = useState("");

  const { width, height } = useWindowDimensions();

  const onWriteNotePress = () => {
    setWriteNote(true);
  };

  const onDiscardButtonPress = () => {
    Alert.alert(
      "Discard Note",
      "Are you sure you want to discard Note, changes will not be saved",
      [
        {
          text: "Discard",
          style: "cancel",
          onPress: () => {
            setWriteNote(false);
          },
        },
        { text: "Cancel", style: "destructive" },
      ]
    );
  };

  const onChangeText = (text) => {
    setText(text);
  };

  return (
    <>
      {hasNotes && (
        <View style={styles.noNoteContainer}>
          <Text style={styles.noNoteText}>YOU have NO NOTE YET</Text>
        </View>
      )}

      {writeNote && (
        <>
          <View
            style={[
              styles.saveCancelContainer,
              {
                width: width - 20,
              },
            ]}
          >
            <TouchableOpacity
              style={styles.discardNoteAddContainer}
              onPress={onDiscardButtonPress}
            >
              <CancelSvg fill={"red"} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveNoteContainer}>
              <SaveFilledSvg fill={"green"} />
            </TouchableOpacity>
          </View>

          <View
            style={[
              styles.noteInputContainer,
              {
                maxHeight: height - 400,
                width: width - 6,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              },
            ]}
          >
            <TextInput
              style={styles.NoteInput}
              multiline={true}
              autoFocus
              onChangeText={onChangeText}
            />

            {/************ Important Notics *************/}
            {/* This ScrollView is replaced with a View component, they both has the same style props
           Before Enabling ScrollView and disabling View, You Must go to comment out justifyContent: "center" property from styles.noteInputKitContainer
        */}

            {/* <ScrollView
          style={styles.noteInputKitContainer}
          horizontal
          alwaysBounceHorizontal
        > */}
            <View style={styles.noteInputKitContainer}>
              <TouchableOpacity style={styles.noteInputKitContentContainer}>
                <Text>Attach</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.noteInputKitContentContainer}>
                <Text>Insert</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.noteInputKitContentContainer}>
                <Text>Format</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.noteInputKitContentContainer}>
                <Text>Fonts</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* </ScrollView> */}
        </>
      )}

      {!writeNote && (
        <TouchableOpacity
          style={styles.addNoteContainer}
          onPress={onWriteNotePress}
        >
          <Text style={styles.addNoteIcon}>+</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  addNoteContainer: {
    borderRadius: 999,
    backgroundColor: "darkgray",
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 50,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addNoteIcon: {
    fontSize: 30,
  },
  noNoteContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  noNoteText: {
    fontSize: 25,
    fontWeight: "700",
    textTransform: "uppercase",
    flexWrap: "wrap",
    textAlign: "center",
    color: "darkgray",
  },
  noteInputContainer: {
    position: "absolute",
    bottom: 0,
    borderWidth: 1,
    marginHorizontal: 2,
  },
  NoteInput: {
    minHeight: 100,
    padding: 10,
    marginVertical: 0,
    margin: 5,
  },
  noteInputKitContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "lightgray",
    display: "flex",
    flexDirection: "row",
    gap: 3,
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  noteInputKitContentContainer: {
    alignSelf: "center",
    marginHorizontal: 5,
  },
  saveCancelContainer: {
    height: 40,
    position: "absolute",
    top: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  saveNoteContainer: {
    height: 40,
    width: 40,
  },
  discardNoteAddContainer: {
    height: 30,
    width: 30,
    borderWidth: 1,
    borderRadius: 10,
  },
});
