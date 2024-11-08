import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import SignUpFormLayout from "../../layout/auth/SignUpFormLayout";
import SignUpNextAndPrevButton from "../../layout/auth/SignUpNextAndPrevButton";

export default function DateOfBirthFormPage() {
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [maritalStatus, setMaritalStatus] = useState("");
  const [sex, setSex] = useState("");

  const [datePicker, setDatePicker] = useState(false);

  const [canGoNext, setCanGoNext] = useState(false);

  const checkSexBox = useCallback(
    (sex) => {
      switch (sex) {
        case "male":
          setSex("male");
          break;
        case "female":
          setSex("female");
          break;
        case "custom":
          setSex("custom");
          break;
        default:
          break;
      }
    },
    [sex]
  );

  const checkMaritalStatusBox = useCallback(
    (status) => {
      switch (status) {
        case "single":
          setMaritalStatus("single");
          break;
        case "married":
          setMaritalStatus("married");
          break;
        case "widowed":
          setMaritalStatus("widowed");
          break;
        default:
          break;
      }
    },
    [maritalStatus]
  );

  useEffect(() => {
    if (maritalStatus === "" || dateOfBirth === new Date() || sex === "") {
      setCanGoNext(false);
    } else {
      setCanGoNext(true);
    }
  }, [maritalStatus, sex, dateOfBirth]);

  const toogleDatePicker = () => {
    setDatePicker(!datePicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type === "set") {
      if (Platform.OS === "android") {
        setDatePicker(false);
        setDateOfBirth(selectedDate);
      }
      setDateOfBirth(currentDate);
    } else {
      toogleDatePicker();
    }
  };

  let ms = maritalStatus;
  let sx = sex;

  return (
    <SignUpFormLayout>
      <View style={styles.container}>
        <Text style={styles.nameTitle}>Date Of Birth :</Text>
        <Pressable style={styles.inputContainer} onPress={toogleDatePicker}>
          <TextInput
            style={styles.inputBox}
            value={dateOfBirth.toDateString()}
            editable={false}
          />
        </Pressable>
        {datePicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={dateOfBirth}
            onChange={onChange}
          />
        )}

        {/********* Gender or Sex ************/}
        {/********* NOTE: some of the styles below *statusContainer* are the same with *genderContainer* styles because they have simple similarities ************/}

        <View style={styles.genderContainer}>
          <Text style={styles.nameTitle}>Sex :</Text>
          <View style={styles.checkBoxContainer}>
            <View style={styles.checkBoxWrapper}>
              <Pressable
                onPress={() => checkSexBox("male")}
                style={[
                  styles.checkBox,
                  {
                    backgroundColor: sx === "male" ? "gold" : "transparent",
                  },
                ]}
              ></Pressable>
              <Text style={styles.checkBoxText}>Male</Text>
            </View>

            <View style={styles.checkBoxWrapper}>
              <Pressable
                onPress={() => checkSexBox("female")}
                style={[
                  styles.checkBox,
                  {
                    backgroundColor: sx === "female" ? "gold" : "transparent",
                  },
                ]}
              ></Pressable>
              <Text style={styles.checkBoxText}>Female</Text>
            </View>

            <View style={styles.checkBoxWrapper}>
              <Pressable
                onPress={() => checkSexBox("custom")}
                style={[
                  styles.checkBox,
                  {
                    backgroundColor: sx === "custom" ? "gold" : "transparent",
                  },
                ]}
              ></Pressable>
              <Text style={styles.checkBoxText}>Custom</Text>
            </View>
          </View>
        </View>

        {/********* Marital Status ************/}
        {/********* NOTE: some of the styles below *statusContainer* are the same with Gender styles because they have simple similarities ************/}

        <View style={styles.statusContainer}>
          <Text style={styles.nameTitle}>Marital Status : </Text>
          <View style={styles.checkBoxContainer}>
            <View style={styles.checkBoxWrapper}>
              <Pressable
                onPress={() => checkMaritalStatusBox("single")}
                style={[
                  styles.checkBox,
                  {
                    backgroundColor: ms === "single" ? "blue" : "transparent",
                  },
                ]}
              ></Pressable>
              <Text style={styles.checkBoxText}>Single</Text>
            </View>

            <View style={styles.checkBoxWrapper}>
              <Pressable
                onPress={() => checkMaritalStatusBox("married")}
                style={[
                  styles.checkBox,
                  {
                    backgroundColor: ms === "married" ? "blue" : "transparent",
                  },
                ]}
              ></Pressable>
              <Text style={styles.checkBoxText}>Married</Text>
            </View>

            <View style={styles.checkBoxWrapper}>
              <Pressable
                onPress={() => checkMaritalStatusBox("widowed")}
                style={[
                  styles.checkBox,
                  {
                    backgroundColor: ms === "widowed" ? "blue" : "transparent",
                  },
                ]}
              ></Pressable>
              <Text style={styles.checkBoxText}>Widowed</Text>
            </View>
          </View>
        </View>

        <View style={styles.navDownButtonsContainer}>
          <SignUpNextAndPrevButton
            nextTo={"emailAndPasswordPage"}
            canGoNext={canGoNext}
          />
        </View>
      </View>
    </SignUpFormLayout>
  );
}

const styles = StyleSheet.create({
  checkBoxContainer: {
    paddingTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 80,
  },
  checkBoxText: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "600",
  },
  checkBoxWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    // alignContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  genderContainer: {
    paddingTop: 25,
  },
  inputBox: {
    borderTopRightRadius: 10,
    fontSize: 20,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#808",
  },
  inputContainer: {
    paddingTop: 10,
    width: "100%",
  },
  nameTitle: {
    fontWeight: "600",
    fontSize: 25,
  },
  navDownButtonsContainer: {
    paddingTop: 30,
  },
  statusContainer: {
    paddingTop: 40,
  },
});
