import React from 'react';
import { Text, View, FlatList } from 'react-native';
import ClientsDATA from '../../MOCK_DATA.json';
import { styles } from './stylesClientsList';

const ClientsList = () => {
  return (
    <View>
      <FlatList
        data={ClientsDATA}
        renderItem={((data) => {
          return (
            <View style={styles.table}>
              <Text style={styles.row}>{`${data.item.last_name} ${data.item.first_name}`}</Text>
              <Text style={styles.row}>{data.item.age}</Text>
              <Text style={styles.row}>{data.item.email}</Text>
            </View>
          )
        }
        )}
      />
    </View>
  )
}

export default ClientsList;