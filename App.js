import React from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const App = () => {
  const carouselItems = [
    {
      title: 'Homem-Aranha (Terra-616)',
      image:
        'https://feededigno.com.br/wp-content/uploads/2018/10/homem-aranha-no-aranhaverso-18-10-03-img01.jpg',
    },
    {
      title: 'Miles Morales (Terra-1610)',
      image:
        'https://feededigno.com.br/wp-content/uploads/2018/10/homem-aranha-no-aranhaverso-18-10-03-img02.jpg',
    },
    {
      title: 'Spider-Gwen (Terra-65)',
      image:
        'https://feededigno.com.br/wp-content/uploads/2018/10/homem-aranha-no-aranhaverso-18-10-03-img03.jpg',
    },
    {
      title: 'Porco-Aranha (Terra-8311)',
      image:
        'https://feededigno.com.br/wp-content/uploads/2018/10/homem-aranha-no-aranhaverso-18-10-03-img05.jpg',
    },
  ];

  function renderItem({item}) {
    return (
      <View style={styles.carouselItemContainer}>
        <Text style={styles.carouselItemTitle}>{item.title}</Text>
        <Image
          style={styles.carouselItemImage}
          source={{uri: `${item.image}`}}
        />
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Carousel
            layout={'tinder'}
            layoutCardOffset={10}
            data={carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={renderItem}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselItemContainer: {
    backgroundColor: '#333',
    borderRadius: 4,
    height: 300,
    padding: 20,
    marginTop: 20,
  },
  carouselItemImage: {
    width: '100%',
    height: 200,
    borderRadius: 4,
    flex: 1,
    marginTop: 10,
  },
  carouselItemTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default App;
