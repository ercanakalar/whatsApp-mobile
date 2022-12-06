import React, { useCallback, useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import backgroundImage from '../../assets/images/droplet.jpeg';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import colors from '../../constants/colors';

const ChatScreen = () => {
  const [messageText, setMessageText] = useState('');

  const sendMessage = useCallback(() => {
    setMessageText('');
  }, [messageText]);

  // const win = Dimensions.get('window');
  // console.log(win, 'win');

  return (
    <SafeAreaView edges={['right', 'left', 'bottom']} style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={80}
      >
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
        />
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={() => console.log('pressed')}
          >
            <Feather name="plus" size={24} color={colors.blue} />
          </TouchableOpacity>

          <TextInput
            style={styles.textBox}
            value={messageText}
            onChangeText={setMessageText}
            onSubmitEditing={sendMessage} //when you click check in the keyboard, you send the message
          />

          {messageText === '' ? (
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={() => console.log('pressed')}
            >
              <Entypo name="camera" size={24} color={colors.blue} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{ ...styles.mediaButton, ...styles.sendButton }}
              onPress={sendMessage}
            >
              <Feather name="send" size={18} color={'white'} />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 4,
    height: 50,
  },
  textBox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightGrey,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
  mediaButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
  },
  sendButton: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    width: 30,
  },
  keyboard: {
    flex: 1,
  },
});

export default ChatScreen;
