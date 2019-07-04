import React ,{Component} from 'react'
import { View,Text,Button,Switch} from 'react-native'
import { styles } from '../screens/Todo/todoStyles'

export const TodoItem = ({todo,onDelete,onToggle}) => (
    <View style={styles.todoContianer}>
       
        <Button title={'Delete'} color={'red'} onPress={onDelete}/>
        <Text>{todo.text}</Text>
        <Switch value={todo.checked} onValueChange={onToggle}/>
    </View>
)


