import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import Detail from '../pages/Detail';

const Initial = createStackNavigator();

const InitialRoutes: React.FC = () => (
  <Initial.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Initial.Screen name="Welcome" component={Welcome} />
    <Initial.Screen name="Detail" component={Detail} />
  </Initial.Navigator>
);

export default InitialRoutes;
