import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        height: height,
        width: width,
        zIndex: 0,
    },
    redbox: {

        backgroundColor: '#333',
        zIndex: 1,
        width: width,
        height: height
    },
    headerStyle: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '100',

    },
    elementsContainer: {
        alignSelf: 'stretch',
        backgroundColor: '#ecf5fd'
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    submitButtonText: {
        top: 10,
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 20,
        height: 60,

    },


    /*sosicone:{
      position:'absolute',
      bottom:100,
      right:20,
      zIndex:3,
  
    },*/

    vide: {
        backgroundColor: '#600',
        flex: 1,

    },

    submitSos: {


        position: 'absolute',
        height: 60,
        width: width - 10,
        bottom: 45,
        zIndex: 2,
        backgroundColor: '#E54188',
        borderRadius: 20,
        alignSelf: 'center',
        alignContent: 'center',

    },


    burgerMenu: {

        width: 70,
        height: 70,
        position: 'absolute',
        top: 22,
        left: 7,
        zIndex: 3,
    }
});
export default styles;
