import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { RadioButton } from 'react-native-paper';

const App = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');

    const [displayText, setDisplayText] = useState('');

    const handlePress = () => {
        setDisplayText(' Thank you for your time ');
    }


    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#f0f0f0"}}>
            <Image
                style={{ width: '100%', height: 200 }}
                source={require('./BAT1.png')}
            />
            <View style={{ paddingHorizontal: 20, backgroundColor: "#d6a0e8"}}>
                <Text style={{ fontSize: 20, marginTop: 20, backgroundColor: "#f0f0f0"}}>What is your favorite animal at the ranch?:</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#f0f0f0"}}>
                    <RadioButton
                        value="option1"
                        status={value1 === 'option1' ? 'checked' : 'unchecked'}
                        onPress={() => setValue1('option1')}
                    />
                    <Text>Pandas</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#f0f0f0"}}>
                    <RadioButton
                        value="option2"
                        status={value1 === 'option2' ? 'checked' : 'unchecked'}
                        onPress={() => setValue1('option2')}
                    />
                    <Text>Otters</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#f0f0f0" }}>
                    <RadioButton
                        value="option3"
                        status={value1 === 'option3' ? 'checked' : 'unchecked'}
                        onPress={() => setValue1('option3')}
                    />
                    <Text>Dogs</Text>
                </View>

                <Text style={{ fontSize: 20, marginTop: 20, backgroundColor: "#f0f0f0", }}>What types of animals do you most associate with our organization?:</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#f0f0f0" }}>
                    <RadioButton
                        value="option1"
                        status={value2 === 'option1' ? 'checked' : 'unchecked'}
                        onPress={() => setValue2('option1')}
                    />
                    <Text>Pandas</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#f0f0f0" }}>
                    <RadioButton
                        value="option2"
                        status={value2 === 'option2' ? 'checked' : 'unchecked'}
                        onPress={() => setValue2('option2')}
                    />
                    <Text>Otters</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#f0f0f0" }}>
                    <RadioButton
                        value="option3"
                        status={value2 === 'option3' ? 'checked' : 'unchecked'}
                        onPress={() => setValue2('option3')}
                    />
                    <Text>Dogs</Text>
                </View>

                <Text style={{ fontSize: 20, marginTop: 20, backgroundColor: "#f0f0f0"}}>If we were to build a petting zoo, would you go to it?:</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#f0f0f0"}}>
                    <RadioButton
                        value="option1"
                        status={value3 === 'option1' ? 'checked' : 'unchecked'}
                        onPress={() => setValue3('option1')}
                    />
                    <Text>Yes</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#f0f0f0"}}>
                    <RadioButton
                        value="option2"
                        status={value3 === 'option2' ? 'checked' : 'unchecked'}
                        onPress={() => setValue3('option2')}
                    />
                    <Text>No</Text>


                </View>
                <Text style={{ fontSize: 20, marginTop: 20, backgroundColor: "#f0f0f0" }}>How would you rate your overall satisfaction with our organization?:</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#f0f0f0"}}>
                    <RadioButton
                        value="option1"
                        status={value4 === 'option1' ? 'checked' : 'unchecked'}
                        onPress={() => setValue4('option1')}
                    />
                    <Text>Great</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#f0f0f0"}}>
                    <RadioButton
                        value="option2"
                        status={value4 === 'option2' ? 'checked' : 'unchecked'}
                        onPress={() => setValue4('option2')}
                    />
                    <Text>Ok</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#f0f0f0" }}>
                    <RadioButton
                        value="option3"
                        status={value4 === 'option3' ? 'checked' : 'unchecked'}
                        onPress={() => setValue4('option3')}
                    />
                    <Text>Bad</Text>
                </View>
                <Text style={{ color: "#d6a0e8" }}>No</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#d6a0e8"}}>
                <TouchableOpacity onPress={handlePress}>
                    <Text style={{ fontSize: 20, color: 'white', backgroundColor: '#0854bf', paddingHorizontal: 20, paddingVertical: 10 ,borderRadius:10}}>Submit</Text>
                </TouchableOpacity>
                <Text style={{ color: "#d6a0e8" }}>No</Text>
                <Text style={{backgroundColor: "#f0f0f0" }}>{displayText}</Text>
                <Text style={{ color: "#d6a0e8" }}>No</Text>
            </View>

        </ScrollView>
    );
};

export default App;


