import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import Icons from '../UI/icons.js';
import { Button, ButtonTray } from '../UI/Button';
import ModuleList from '../entity/modules/ModuleList.js';

import initialModules from '../../data/modules.js';

const ModuleListScreen = ({ navigation }) => {
    // Initialisations --------------------

    // State ------------------------------
    const [modules, setModules] = useState(initialModules);

    // Handlers ---------------------------
    const handleAdd = (module) => setModules([...modules, module]);

    const onAdd = (module) => {
        handleAdd(module);
        navigation.goBack();
    };

    const handleModify = (updatedModule) =>
        setModules(
            modules.map((module) => (module.ModuleID === updatedModule.ModuleID ? updatedModule : module))
        );

    const onModify = (module) => {
        handleModify(module);
        // navigation.navigate('ModuleListScreen'); // Strategy 0
        // navigation.popToTop(); // Strategy 1

        navigation.replace('ModuleViewScreen', { module, onDelete, onModify }); // Strategy 2a
    };

    const handleDelete = (module) =>
        setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

    const onDelete = (module) => {
        handleDelete(module);
        navigation.goBack();
    };

    const gotoViewScreen = (module) =>
        navigation.navigate('ModuleViewScreen', { module, onDelete, onModify });

    const gotoAddScreen = () =>
        navigation.navigate('ModuleAddScreen', { onAdd });

    // View -------------------------------
    return (
        <Screen>
            <ButtonTray>
                <Button
                    label='Add'
                    icon={<Icons.Add />}
                    onClick={gotoAddScreen}
                />
            </ButtonTray>
            <ModuleList modules={modules} onSelect={gotoViewScreen} />
        </Screen>
    );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;