import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const Goal = ({goal, removeGoal}) => {
    return (
        <TouchableOpacity 
        style={styles.goalItem}
        key={goal.id}
        onPress={removeGoal.bind(this, goal.id)}>
            <Text style={{color: 'white'}}>
                {goal.text}
            </Text>
        </TouchableOpacity>        
    )
}

const styles = StyleSheet.create({
    goalItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#5c18cf',
        padding: 10,
        width: '100%',
        marginTop: 15,
        borderRadius: 10
    }
});

export default Goal;