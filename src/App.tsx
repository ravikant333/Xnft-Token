import React from 'react'
import ReactXnft, { Text, View,Tab } from "react-xnft";
import AccountDetail from './pages/AccountDetail';
import TokenDetail from './pages/TokenDetail';


ReactXnft.events.on("connect", () => {
  // no-op
});

export function App() {
  return (
    <View style={{ position: "relative",
    height: "100%",
    background: "rgb(0,0,0, 0.87)",}}>
   <Tab.Navigator
          options={({ route }) => {
            return {
              tabBarIcon: ({ focused }) => {
                switch (route.name) {
                  case "attributes":
                    return (
                      <Text
                        style={{
                          fontSize: "16px",
                          fontWeight: 500,
                          textAlign: "center",
                          color: "pink",
                        }}
                      >
                        Account Detail
                      </Text>
                    );
                  case "details":
                    return (
                      <Text
                        style={{
                          fontSize: "16px",
                          fontWeight: 500,
                          textAlign: "center",
                          color: "pink",
                        }}
                      >
                        Token details
                      </Text>
                    );


                  default:
                    throw new Error("unknown route");
                }
              },
              tabBarActiveTintColor: "red",
              tabBarInactiveTintColor: "yellow",
            };
          }}
          style={{
            height: "34px",
            background: "transparent",
            borderTop: "none",
          }}
           disableScroll
          top
        >
          <Tab.Screen
            name="attributes"
            disableLabel={true}
            component={() => <AccountDetail />}
          />
          <Tab.Screen
            name="details"
            disableLabel={true}
            component={() => <TokenDetail />}
          />
        </Tab.Navigator> 
     </View>

  );
}

