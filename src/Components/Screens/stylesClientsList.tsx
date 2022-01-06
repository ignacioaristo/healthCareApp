import { StyleSheet } from 'react-native';

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
  }
})