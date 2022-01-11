import { Dimensions, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGTH_MODAL = 150;

export const styles = StyleSheet.create({
  row: {
    margin: 15,
    maxWidth: 250,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'grey',
    borderWidth: 0.5,
  },
  deleteButton: {
    margin: 15,
  },
  actionSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 3,
    width: WIDTH - 100,
    height: HEIGTH_MODAL,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 50,
    marginTop: '75%',
  },
  crossModal: {
    alignSelf: 'flex-end'
  },
  infoModal: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
  }
})