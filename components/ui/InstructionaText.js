import {Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
function InstructionText ({children,style}) {
    return(
        <Text style={[styles.instructionText,style]}>{children}</Text>  //Example of cascading like paasing style as props and style can be array of style
    )
}

export default InstructionText ;
const styles =StyleSheet.create({
    instructionText:{
        color:Colors.accent500,
        fontSize:20

    },
})