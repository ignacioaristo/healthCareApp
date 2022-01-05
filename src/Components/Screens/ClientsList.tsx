import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import ClientsDATA from '../../../MOCK_DATA.json';
import ClientForm from './ClientForm';
import { styles } from './stylesClientsList';

const ClientsList = ({ navigation: any }) => {

  const [clientList, setClientList] = useState(ClientsDATA);
  const [selectedClient, setSelectedClient] = useState('');

  const deleteClient = (id: number) => {
    return setClientList(clientList.filter((client) => client.id != id))
  }

  const handleUpdate = (id: number, name: string, lastName: string, email: string, age: number | string) => {
    setSelectedClient({
      id: id,
      first_name: name,
      last_name: lastName,
      email: email,
      age: age,
    })
  }

  return (
    <View>
      <ClientForm clientList={clientList} setClientList={setClientList} selectedClient={selectedClient} />
      <FlatList
        data={clientList}
        keyExtractor={(client) => `${client.id}`}
        renderItem={((client) => {
          return (
            <View style={styles.rowContainer}>
              <TouchableOpacity onPress={() => handleUpdate(client.item.id, client.item.first_name, client.item.last_name, client.item.email, client.item.age)}>
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