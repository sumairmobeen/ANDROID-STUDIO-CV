/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
} from 'react-native';

import {
  Colors,
    DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View>
      <Text style={styles.name2}>MY RESUME</Text></View>
      <View style={styles.pic}><Image source={require('./mobeen3.png')}
             style={{ width: 100, height: 100, borderRadius: 100, marginLeft: 10, marginTop: 10 }} />
             </View>
      <StatusBar style="auto" />

      <View><Text style={styles.name2}>Mohammad Mobeen</Text></View>

      <View><Text style={styles.heading}>About MySelf</Text></View>
      <Text>My name is Mohammad Mobeen. I am belong to Pakistan Karachi
           Now I am learning Web Graphice and Mobile App and Graphic Designing,and completed Graphic Designing, Audio, Video, and 2D Animation I have done my Diploma in Mechanical from PAK-SWISSS TRAINING CENTRE 'Karachi'
           I was worked as senior Executive QC/QA in Hinopak Motors Textmited from 2001 to 2010.
            In previous i was worked in Atif Engineering Works and Pak-Swiss Training  Center in 
            Technical Department </Text>



            <View style={styles.Textst}>

            <Text style={styles.heading}>Technical Courses</Text>
            
            <Text>Short Course of CAM</Text>
            <Text> Inspection and measurement techniques </Text>
            <Text>Team building workshop </Text>
            <Text> Total quaTextty management </Text>
            <Text> Time and stress management </Text>
            <Text> Muda </Text>
            <Text> Scientific problem solving </Text>
            <Text> Hinopak certified quaTextty assessor </Text>
            <Text> Six sigma/ Process certification </Text>
            <Text> Leadership skill through personal and professional effectiveness </Text>
            
            

            <Text style={styles.heading}>Computer Skills</Text>
            <Text>
            <Text>Web Graphics and Mobile App</Text> 
            <Text>Graphic Designing</Text>
            <Text>Adobe Audio Auditio</Text>
            <Text>Adobe Video Premier</Text>
            <Text>Adobe After Effect and 2D Animation</Text>
            <Text>Git</Text>
            <Text>MS Office</Text>
            </Text>

            <Text style={styles.heading}>Technical Skills</Text>

           <Text>Local parts Development and inspection</Text>
    <Text>Development of Inspection jigs/Fixtures</Text>
    <Text>Prepration of Inspection Standard by drawing</Text>
    <Text>Final Inspection of new manufactured Vehicle </Text>
    <Text>HandTextng Field Complaints (PIR)</Text>
    <Text>HandTextng Textne Complaints (QPR)</Text>
    <Text>Vendor Education About Safety, House Keeping at their end.</Text>

    </View>
      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    
    marginTop: 32,
    paddingHorizontal: 24,
    textAlign:'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  heading:{
    color:'white',
    fontSize: 18,
    backgroundColor:'black'
     
  },
  name2:{
    color:'black',
    padding:5,
    fontSize: 18,
    backgroundColor:'grey',
    textAlign:'center'
  },
  pic:{
    textAlign:'center'}
  
  
});

export default App;
