import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import CustomHeaderButton from '../components/CustomHeaderButton';

const ChatListScreen = props => {

    const selectedUser = props.route?.params?.selectedUserId;

    const userData = useSelector(state => state.auth.userData);

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="New chat"
                        iconName="create-outline"
                        onPress={() => props.navigation.navigate("NewChat")}/>
                </HeaderButtons>
            }
        })
    }, []);

    useEffect(() => {

        if (!selectedUser) {
            return;
        }
        
        const chatUsers = [selectedUser, userData.userId];

        props.navigation.navigate("ChatScreen", { users: chatUsers });

    }, [selectedUser])
    
    return <View style={styles.container}>
        <Text>Chat list screen</Text>

        <Button title='Go to chat screen' onPress={() => props.navigation.navigate("ChatScreen") } />
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ChatListScreen;