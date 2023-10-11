// FieldRow.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

interface FieldRowProps {
  label: 'TEXT' | 'DATE' | 'CHECKBOX' | 'NUMBER';
  onPress?: () => void;
}

const FieldRow: React.FC<FieldRowProps> = ({label, onPress}) => {
  return (
    <View style={styles.fieldRow}>
      <View style={styles.fieldInput}>
        <Button
          style={[
            styles.listButton,
            {marginHorizontal: 0, paddingVertical: 5},
          ]}>
          {label}
        </Button>
        <TextInput
          label={'Field'}
          mode="outlined"
          style={{
            flex: 1,
          }}
        />
      </View>
      <Button
        icon="delete"
        children={undefined}
        style={{
          paddingTop: 3,
          borderRadius: 0,
          paddingLeft: '2%',
          marginRight: -40,
          // backgroundColor: 'pink',
        }}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listButton: {
    borderColor: '#cccccc',
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 4,
    width: 'auto',
  },
  fieldRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '95%',
    // backgroundColor: 'yellow',
  },
  fieldInput: {
    flexDirection: 'row-reverse',
    // flexWrap: 'wrap',
    width: '90%',
    // backgroundColor: '#ff00d4',
  },
});

export default FieldRow;
