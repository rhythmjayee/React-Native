import {useState} from 'react'
import { TextInput, View, Modal, StyleSheet, Button, Pressable, Text } from "react-native";

const InputModal = ({modalVisible, toggleModal, addGoals}) => {
    const [goal, setGoal] = useState("");

    const onChangeGoal = (newGoal) => {
        setGoal(newGoal);
    }
    const addNewGoals = () => {
        let newGoal = {
            text : goal,
            id : Math.random().toString()
        }
        addGoals(newGoal)
        setGoal('')
        toggleModal()
    }
    return (
        <View>
            <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}>
                <View style={styles.inputContainer}>
                    <View>
                        <TextInput
                        style={styles.input}
                        placeholder="Enter Goal here..."
                        onChangeText={onChangeGoal}
                        cursorColor='#5c18cf'
                        underlineColorAndroid='#5c18cf'
                        value={goal}/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={{marginRight: 10}}>
                            {/* <Pressable style={styles.button}>
                                <Text style={{color: 'white'}}>Add Goal</Text>
                            </Pressable> */}
                            <Button
                            color="#5c18cf"
                            title='Add Goal'
                            onPress={addNewGoals}
                            />
                        </View>
                        <View>
                            <Button
                            color="red"
                            title='Cancel'
                            onPress={toggleModal}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent : 'center',
        alignItems: 'center',
        backgroundColor: '#c7adf4'
    },
    input: {
        padding: 10,
        width: 200
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#5c18cf',
        justifyContent : 'center',
        alignItems: 'center',
        padding: 7
    }
});

export default InputModal;