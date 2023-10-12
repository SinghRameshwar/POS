import React, { useEffect, useRef, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import Loading from "./Components/Loading";
import { colors } from "../colors";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Logo from "./Components/Logo";


const OTPLogin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("none");
  const [isDisplayOtp, setisDisplayOtp] = useState(0);
  const [otp, setOtp] = useState("");
  const refInput = useRef([]);

  useEffect(() => {
    // const setData = () => {
    //   if (getData.formatData == "Success") {
    //     setLoading("none");
    //     navigation.replace("compslt");
    //   } else if (getData.error == "Network request failed") {
    //     setLoading("none");
    //     alert(getData.error);
    //   } else if (getData.formatData != undefined) {
    //     alert(getData.formatData);
    //     setLoading("none");
    //   }
    // };
    // setData();
  }, []);

  useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      setisDisplayOtp(0)
      setOtp("")
    });
    return focusHandler; 
  },[]);

  async function loginCredentials() {
    // setisDisplayOtp(isDisplayOtp == 0 ? 1 : 0);
    if (email.length < 10) {
      alert("Please Enter Correct Mobile Number !")
    } else {
      setLoading("flex");
      // var response = await loginOTPAPI({
      //   email: email,
      // });
      setLoading("none");
      if (response.type == "Success") {
        setisDisplayOtp(1);
      } else {
        alert(response.msg)
      }
      refInput.current[0].focus();
    }
  }

  async function loginCredentialsWithOTP(otpval) {
    setLoading("flex");
   // dispatch(loginUserRequest({ email: email, otp: otpval }));
    setLoading("none");
  }

  const handleInputChange = (index, value) => {
    setOtp((prevOtp) => {
      const newOtp = prevOtp.split('');
      newOtp[index] = value;
      if (index == 5 && newOtp.join('').length == 6) {
        loginCredentialsWithOTP(newOtp.join(''));
      }
      return newOtp.join('');
    });

    if (value && index < 6 - 1) {
      refInput.current[index + 1].focus();
    }
  };

  const handleInputKeyPress = (index, key) => {
    if (key === 'Backspace' && index > 0) {
      refInput.current[index - 1].focus();
    }
  };

  const renderInputs = () => {
    const inputs = [];
    for (let i = 0; i < 6; i++) {
      inputs.push(
        <TextInput
          key={i}
          ref={(ref) => (refInput.current[i] = ref)}
          style={styles.TextInputOTP}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(value) => handleInputChange(i, value)}
          onKeyPress={({ nativeEvent }) =>
            handleInputKeyPress(i, nativeEvent.key)
          }
          value={otp[i]}
        />
      );
    }
    return inputs;
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Logo />
        <View>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>LOGIN</Text>
          <View style={styles.inputView}>
            <TextInput
              style={[styles.TextInput, { fontWeight: "bold" }]}
              placeholder="Enter your mobile number"
              placeholderTextColor="grey"
              keyboardType="numeric"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            loginCredentials();
          }}
          style={[styles.loginBtn, { opacity: isDisplayOtp == 0 ? 1 : 0.2 }]}
          disabled={isDisplayOtp == 0 ? false : true}
        >
          <Text style={styles.loginText}>Send OTP</Text>
        </TouchableOpacity>

        {/* OTP ENTER VIEW */}
        <View style={[styles.OTPView, { opacity: isDisplayOtp }]}>
          <Text>6-Digit Verification Code</Text>
          <View style={{ flexDirection: "row" }}>
            {renderInputs()}
          </View>

          {/* Resend OTP View */}
          <TouchableOpacity
            style={{ width: "75%", marginTop: 30 }}
            onPress={() => {
              loginCredentials();
            }}
          >
            <View style={[styles.forgot_button, { flexDirection: "row" }]}>
              <Text style={{ color: "grey" }}>Didn't receive OTP? </Text>
              <Text style={{ color: "#0070C3" }}>Resend</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Loading lodingType={loading} message="Authenticating..." />
      </View>
      <View
        style={{
          width: 300,
          height: 300,
          backgroundColor: colors.primeColor,
          position: "absolute",
          right: -180,
          top: -180,
          borderRadius: 130,
        }}
      />
    </View>
  );
};

export default OTPLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    backgroundColor: "#FFFFFF",
    borderColor: "grey",
    flexDirection: "row",
    borderBottomWidth: 0.3,
    width: "75%",
    height: 45,
    marginBottom: 30,
  },

  OTPView: {
    flexDirection: "column",
    marginTop: 40,
    width: "75%",
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },

  TextInputOTP: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
    borderBottomWidth: 0.3,
    borderColor: "grey",
  },

  forgot_button: {
    height: 30,
  },

  loginBtn: {
    width: "75%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0070C3",
  },

  loginText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
