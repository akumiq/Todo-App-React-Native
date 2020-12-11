import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import IconEdit from 'react-native-vector-icons/FontAwesome';
import IconTrash from 'react-native-vector-icons/FontAwesome5';

const TodoList = (props) => {
  return (
    <View style={styles.wrapperList}>
      <Text>{props.titleList}</Text>

      <View style={styles.wrapperIcon}>
        <TouchableOpacity>
          <IconEdit name="edit" size={22} />
        </TouchableOpacity>

        <TouchableOpacity onPress={props.onPress} style={styles.icon}>
          <IconTrash name="trash" size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoList;

const styles = EStyleSheet.create({
  wrapperList: {
    marginTop: '10rem',
    paddingVertical: '10rem',
    paddingHorizontal: '10rem',
    borderWidth: 1,
    borderRadius: '10rem',
    borderColor: '#bbb',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: '20rem',
  },
});
