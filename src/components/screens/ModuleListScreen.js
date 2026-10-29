import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Screen from '../layout/Screen';

import initialModules from '../../data/modules.js';

// Initialisations --------------------------------------------
const modules = initialModules;

// State ------------------------------------------------------

// Handlers ---------------------------------------------------
const handleSelect = () => alert('Item selected');
// View -------------------------------------------------------
const ModuleListScreen = () => {
  return (
    <Screen>
      <ScrollView style={styles.container}>
        {modules.map((module) => {
          return (
            <Pressable key={module.ModuleCode} onPress={handleSelect}>
            <View style={styles.item}>
              <Text style={styles.text}>
                {module.ModuleCode} {module.ModuleName}
              </Text>
            </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  contatiner:{},
  item:{
    paddingVertical: 15,
    borderTopWidth: 1,
    bordercolor: 'lightgray',
  },
  text:{
    ontSize: 16,
  },
});

export default ModuleListScreen;