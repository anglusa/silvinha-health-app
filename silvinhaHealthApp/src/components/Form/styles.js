import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    formContent: {
        width: '100%',
        height: '100%',
        bottom: 0,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginTop: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,

    },
    form:
    {
      width: '100%',
      height: 'auto',
      marginTop: 30,
      padding: 10,
    },
    formLabel:
    {
      color: '#000',
      fontSize: 18,
      paddingLeft: 20,
    },
    input: {
      width: '90%',
      height: 40,
      fontSize: 18,
      borderRadius: 20,
      backgroundColor: '#f6f6f6',
      margin: 12,
      paddingHorizontal: 15,
    },
    button: {
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      backgroundColor: '#FF0043',
      paddingVertical: 14,
      marginLeft: 12,
      margin: 30,
    },
    textButton: {
      fontSize: 22,
      color: '#FFF',
    },
})

export default styles