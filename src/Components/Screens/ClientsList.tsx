import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Modal } from 'react-native';
import ClientsDATA from '../../../MOCK_DATA.json';
import ClientForm from './ClientForm';
import { styles } from './stylesClientsList';
import IconEntypo from 'react-native-vector-icons/Entypo';

const ClientsList = ({ navigation: any }) => {

  const [clientList, setClientList] = useState(ClientsDATA);
  const [selectedClient, setSelectedClient] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [clientForModal, setClientForModal] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
  })

  const openModal = (firstName, lastName, age, email) => {
    setClientForModal({
      firstName: firstName,
      lastName: lastName,
      age: age,
      email: email,
    })
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const deleteClient = (id: number) => {
    return setClientList(clientList.filter((client) => client.id !== id))
  }

  const handleUpdate = (id: number, name: string, lastName: string, email: string, age: number | string) => {
    setSelectedClient({
      id: id,
      firstName: name,
      lastName: lastName,
      email: email,
      age: age,
    })
  }

  const handleEdit = (client): void => {
    setClientList(clientList.map((item) => (item.id === client.id ? client : item)));
    setSelectedClient(undefined);
  }

  const handleAdd = (client): void => {
    setClientList([...clientList, { ...client, id: new Date().getTime() }]);
  }

  return (
    <View>
      <Modal
        transparent={true}
        visible={showModal}
        animationType={'slide'}
        onRequestClose={() => closeModal()}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.crossModal} onPress={() => closeModal()}>
            x
          </Text>
          <View style={styles.infoModal}>
            <Text>
              First name: {clientForModal.firstName}
            </Text>
            <Text>
            Last name: {clientForModal.lastName}
            </Text>
            <Text>
            Age: {clientForModal.age}
            </Text>
            <Text>
            Email: {clientForModal.email}
            </Text>
          </View>
        </View>
      </Modal>
      <ClientForm
        clientList={clientList}
        setClientList={setClientList}
        selectedClient={selectedClient}
        onSubmit={selectedClient ? handleEdit : handleAdd}
      />
      <FlatList
        data={clientList}
        keyExtractor={(client) => `${client.id}`}
        renderItem={((client) => {
          return (
            <View style={styles.rowContainer}>
              <TouchableOpacity onPress={() => openModal(client.item.firstName, client.item.lastName, client.item.age, client.item.email)}>
                <Text style={styles.row}>{`${client.item.lastName} ${client.item.firstName}`}</Text>
              </TouchableOpacity>
              <View style={styles.actionSection}>
                <TouchableOpacity onPress={() => handleUpdate(client.item.id, client.item.firstName, client.item.lastName, client.item.email, client.item.age)}>
                  <IconEntypo name='pencil' size={20} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteClient(client.item.id)} style={styles.deleteButton}>
                  <IconEntypo name='cross' size={20} />
                </TouchableOpacity>
              </View>
            </View>
          )
        }
        )}
      />
    </View>
  )
}

export default ClientsList;