import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../Shared/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Carousel from 'react-native-snap-carousel';
import style from '../../../storybook/stories/CenterView/style';

const Home = ({ navigation }: NativeStackScreenProps<any>) => {

  const deviceWidth = Dimensions.get('window').width
  const deviceHeight = Dimensions.get('window').height


  useEffect(() => {
    AsyncStorage.getItem('user').then((response) => {
      const data = JSON.parse(response || "")
      navigation.setOptions({ headerTitle: data?.username })
    })
  }, [])

  const _renderItem = ({item}) => {
    return (
      <View style={styles.carousel}>
        <ImageBackground style={styles.carouselImage} source={{uri: item.img}}>
          <Text style={styles.title}>{ item.title }</Text>
          <Text style={styles.text}>{ item.text }</Text>
        </ImageBackground>
      </View>
    );
  }

  const carouselData = [
    {
      title: "Hong Kong to cull 2,000 hamsters and small mammals over Covid case",
      text: "A Delta outbreak in zero Covid Hong Kong will result in the euthanasia of 2,000 small mammals.",
      img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/FE66/production/_122762156_gettyimages-1036891448.jpg"

    },
    {
      title: "Chile starts fourth Covid jab dose as cases rise",
      text: "The country is the first in Latin America to offer a fourth dose, as Omicron fuels a surge in cases.",
      img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/14AAD/production/_122735648_mediaitem122735647.jpg"
    },
    {
      title: "Fussy eaters could have post-Covid disorder",
      text: "Experts write a guide on a taste and smell disorder, which they say can go undiagnosed in children.",
      img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/11786/production/_116285517_gettyimages-1153698530.jpg"
    },
    {
      title: "Reported UK Covid cases at lowest level in a month",
      text: "While case numbers are high, they are falling, but deaths are rising week on week, figures show.",
      img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/B262/production/_122666654_gettyimages-1236772730.jpg"
    },
    {
      title: "Health warnings over Tonga volcanic ash",
      text: "People are being advised to remain indoors to escape the dangerous smog.",
      img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1295/production/_122675740_tv072733236.jpg"
    }
  ]

  return (
    <View>
        <Button
          text= 'Client List'
          onPress = {() => {
            navigation.navigate('Clients')
          }}
          />
        <Text style={styles.main}>LATEST NEWS</Text>
        <Carousel
          autoplay
          autoplayInterval={1000}
          loop
          data={carouselData}
          layout='default'
          renderItem={_renderItem}
          sliderWidth={deviceWidth}
          itemWidth={deviceWidth - 100}
        />
    </View>
  )
}

export default Home;

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  carouselImage: {
    height: '100%',
    justifyContent: 'center',
    opacity: 0.8,
  },
  main: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
  },
  carousel: {
    justifyContent: 'space-evenly',
    height: deviceHeight / 5,
    marginTop: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    textAlign: 'center',
  }
})