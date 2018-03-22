import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {
    render() {
        return(
            <View style={[styles.container, {width: Dimensions.get("window").width * 0.7}]}>
                <TouchableOpacity>
                    <View style={styles.drawerItem}>
                        <Icon style={styles.drawerItemIcon} name={ Platform.OS === "android" ? "md-log-out" :"ios-log-out"} size={40} color="#aaa" />
                        <Text>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: "white",
        flex: 1,
        backgroundColor: "#eee"
    },

    drawerItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#cccccc"

    },
    drawerItemIcon: {
        marginRight: 10,
    }
})

export default SideDrawer;