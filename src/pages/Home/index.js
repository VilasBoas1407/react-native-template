import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, Picker} from 'react-native';

import {Background,Title,View} from './styles';

export default function Home({ navigation }) {


  useEffect(() => {
  }, []);


  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
        <Background>
            <View>
                <Title>Template</Title>
            </View>
        </Background>
    </KeyboardAvoidingView>
  );
}
