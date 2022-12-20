import {useState} from 'react'

import { Button, View, StyleSheet, FlatList } from "react-native";
import InputModal from "./InputModal";
import Goal from './Goal'

const GoalsContainer = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [goals, setGoals] = useState([])

    const addGoals = (goal) => {
        setGoals((prevGoals) => {
            return [...prevGoals, goal]
        })
    }
    const toggleModal = () => {
        setModalVisible((modal) => !modal)
    }
    function removeGoal (goalId) {
        setGoals((prevGoals) => {
            return prevGoals.filter((goal) => goal.id != goalId)
        })
    }
    return (
        <View style={styles.centerContainer}>
            <View>
                <Button 
                title='Add New Goal'
                color="#5c18cf"
                onPress={toggleModal}
                />
            </View>
            <InputModal 
            modalVisible={modalVisible}
            toggleModal={toggleModal}
            addGoals={addGoals}
            />
            <View style={{flex: 1, width: '100%'}}>
                <FlatList
                data={goals}
                renderItem={({item}) => ( <Goal goal={item} removeGoal={removeGoal}/> )}
                keyExtractor={goal => goal.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
});

export default GoalsContainer;