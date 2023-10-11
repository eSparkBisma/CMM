// // import React, {useRef, useEffect} from 'react';
// // import {View} from 'react-native';
// // import {Button, Text, TextInput} from 'react-native-paper';
// // import {addCategory, deleteCategory} from '../store/categorySlice';
// // import {useAppDispatch, useAppSelector} from '../store/store';

// // interface AddCategoryTrayProps {
// //   onPress?: () => void;
// // }

// // const AddCategoryTray: React.FC<AddCategoryTrayProps> = ({onPress}) => {
// //   const name = useRef<string>('');
// //   const dispatch = useAppDispatch();

// //   const handleBlur = () => {
// //     if (name.current.trim() !== '') {
// //       dispatch(addCategory({name: name.current}));
// //       name.current = '';
// //     }
// //   };

// //   return (
// //     <View>
// //       <TextInput
// //         label={'Category Name'}
// //         value={name.current}
// //         onChangeText={e => (name.current = e)}
// //         onBlur={handleBlur}
// //         mode="outlined"
// //       />
// //       <Button onPress={onPress}>Delete</Button>
// //     </View>
// //   );
// // };

// // export default AddCategoryTray;

// import React, {useEffect, useState} from 'react';
// import {Dimensions, StyleSheet, View} from 'react-native';
// import {Button, Text, TextInput} from 'react-native-paper';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import FieldRow from './FieldRow';

// interface AddCategoryTrayProps {}

// const AddCategoryTray: React.FC<AddCategoryTrayProps> = ({}) => {
//   return (
//     <View style={[styles.card, {flex: 1, width: '99%'}]}>
//       <TextInput
//         label={'Category Name'}
//         mode="outlined"
//         style={{width: '98%'}}
//       />
//       <FieldRow label="TEXT" />
//       <FieldRow label="DATE" />
//       <FieldRow label="CHECKBOX" />
//       <FieldRow label="NUMBER" />
//       <Button mode="contained" style={[styles.TitleButton]}>
//         TITLE FIELD:
//       </Button>
//       <View
//         style={{
//           flexDirection: 'row',
//           alignSelf: 'flex-start',
//           marginLeft: '2%',
//         }}>
//         <Button style={styles.listButton}>ADD NEW FIELD</Button>
//         <Button icon="delete" style={{paddingTop: 5}}>
//           REMOVE
//         </Button>
//       </View>
//     </View>
//   );
// };

// export default AddCategoryTray;

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: 'white',
//     padding: 5,
//     borderRadius: 3,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   listButton: {
//     borderColor: '#cccccc',
//     marginTop: 6,
//     borderWidth: 1,
//     borderRadius: 4,
//     width: 'auto',
//   },
//   fieldRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//   },
//   TitleButton: {
//     borderRadius: 3,
//     width: '95%',
//     marginTop: '2%',
//   },
//   InputField: {},
//   FieldInput: {
//     flexDirection: 'row-reverse',
//     flexWrap: 'wrap',
//     width: '80%',
//   },
// });
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Menu, Text, TextInput} from 'react-native-paper';
import FieldRow from './FieldRow';

interface AddCategoryTrayProps {}

const AddCategoryTray: React.FC<AddCategoryTrayProps> = ({}) => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('TEXT');
  const [fieldRows, setFieldRows] = useState<Array<string>>([]);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleMenuItemPress = (item: string) => {
    setSelectedItem(item);
    setFieldRows([...fieldRows, item]);
    closeMenu();
  };
  const handleDeleteFieldRow = (index: number) => {
    const updatedFieldRows = [...fieldRows];
    updatedFieldRows.splice(index, 1);
    setFieldRows(updatedFieldRows);
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <TextInput
          label={'Category Name'}
          mode="outlined"
          style={{width: '98.5%', alignSelf: 'center'}}
        />
        <View style={{}}>
          {fieldRows.map((label, index) => (
            <FieldRow
              label={label as 'TEXT' | 'DATE' | 'CHECKBOX' | 'NUMBER'}
              key={index}
              onPress={() => handleDeleteFieldRow(index)}
            />
          ))}
        </View>

        <Button mode="contained" style={styles.TitleButton}>
          TITLE FIELD:
        </Button>
      </Card.Content>
      <Card.Actions
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-start',
          paddingLeft: 15,
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button
              mode="outlined"
              style={{borderRadius: 5, borderColor: '#cccccc'}}
              onPress={openMenu}>
              ADD NEW FIELD
            </Button>
          }>
          {['TEXT', 'DATE', 'CHECKBOX', 'NUMBER'].map(item => (
            <Menu.Item
              key={item}
              onPress={() => handleMenuItemPress(item)}
              title={item}
            />
          ))}
        </Menu>

        <Button
          icon="delete"
          mode="text"
          style={{borderRadius: 5}}
          onPress={() => {
            // removeCategory(index)
          }}>
          REMOVE
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default AddCategoryTray;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 10,
    width: '98%',
  },
  listButton: {
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 4,
    width: 'auto',
  },
  TitleButton: {
    borderRadius: 3,
    width: '98%',
    marginTop: 7,
    alignSelf: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
});
