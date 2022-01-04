import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import ClientsDATA from '../../../MOCK_DATA.json';
import { styles } from './stylesClientsList';

const ClientsList = ({ navigation }) => {

  const [clientList, setClientList] = useState(ClientsDATA);

  const deleteClient = (id: number) => {
    return setClientList(clientList.filter((client) => client.id != id))
  }

  return (
    <View>
      <FlatList
        data={clientList}
        keyExtractor={(client) => `${client.id}`}
        renderItem={((client) => {
          return (
            <View style={styles.rowContainer}>
              <TouchableOpacity>
                <Text style={styles.row}>{`${client.item.last_name} ${client.item.first_name}`}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteClient(client.item.id)} style={styles.deleteButton}>
                <Text>X</Text>
              </TouchableOpacity>
            </View>
          )
        }
        )}
      />
    </View>
  )
}

export default ClientsList;