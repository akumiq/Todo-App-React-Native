import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import IconEdit from 'react-native-vector-icons/FontAwesome';
import IconTrash from 'react-native-vector-icons/FontAwesome5';

const TodoList = (props) => {
  return (
    <View style={styles.wrapperList}>
      <Text style={styles.textList}>{props.titleList}</Text>

      <View style={styles.wrapperIcon}>
        <TouchableOpacity>
          <IconEdit name="edit" size={22} color="#949599" />
        </TouchableOpacity>

        <TouchableOpacity onPress={props.onPress} style={styles.icon}>
          <IconTrash name="trash" size={18} color="#949599" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoList;

const styles = EStyleSheet.create({
  wrapperList: {
    marginTop: '10rem',
    paddingVertical: '12rem',
    paddingHorizontal: '10rem',
    borderWidth: 1,
    borderRadius: '10rem',
    borderColor: '#bbb',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textList: {
    fontSize: '13rem',
  },
  wrapperIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: '20rem',
  },
});
