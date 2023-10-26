import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View>
                {/* content  */}
                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 100,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 70,
                        fontWeight: 800,
                        color: COLORS.white ,  
                        marginLeft:80
                    }}>Nike</Text> 

                     
                    <View style={{ 
                        marginVertical: 22,
                        top:800,
                        marginBottom: 300, }}>
                        
                    <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                        }}></Text>
                    </View>

                    <Button
                        title="Join Now"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginBottom: 22,
                            width: "100%"
                        }}
                    />
                    
                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.white,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Welcome;