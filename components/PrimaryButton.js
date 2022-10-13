import {View,Text, StyleSheet, Pressable} from 'react-native'



function PrimaryButton ({children,onConfirmPress}) {
 
        return(
            
             <View style={styles.buttonOuterContainner}>
                <Pressable 
                android_ripple={{color:'#640233'}}
                style={({pressed}) => pressed ? 
                [styles.pressed,styles.buttonInnerContainner]:
                styles.buttonInnerContainner}
                onPress={onConfirmPress}
                >
                    <Text style={styles.buttonText}>{children}</Text>
                </Pressable>
            </View>
        )
}
export default PrimaryButton;

const styles = StyleSheet.create({


    buttonOuterContainner :{
        borderRadius:28,
        margin:4,
        overflow: 'hidden'
    },
    buttonInnerContainner:{
        backgroundColor:'#4e0329',
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2
    },
    buttonText: {
        color:'white',
        textAlign:'center',
    } ,
    pressed : {
        opacity :0.75
    }
})
