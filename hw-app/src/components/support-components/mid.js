import { View, Text, TextInput, Pressable } from "react-native";
import supportMidStyles from "./mid.style";
import { useState } from "react";


export default function SupportMid(){
    const [query,setQuery] = useState('');
    return (
        <View style={supportMidStyles.container}>
            <View style={supportMidStyles.headingContainer}>
                <Text style={supportMidStyles.heading}>Need some help?</Text>
            </View>
            <View style={supportMidStyles.textAreaContainer}>
                <TextInput
	                multiline={true}
                    numberOfLines={6}
                    onChangeText={text => setQuery(text)}
                    value={query}
                    placeholder='Type here...'
                    style={supportMidStyles.textArea}
                    
                />
            </View>
            <View style={supportMidStyles.submitButtonContainer} >
                <Pressable style={supportMidStyles.submitbutton}>
                    <Text style={{color:'#fff'}}>Submit</Text>
                </Pressable>
            </View>
        </View>
    )
}