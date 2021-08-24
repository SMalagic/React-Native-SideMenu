import React from "react";

import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/68/a1/d5/68a1d55e-656e-57c0-ad37-3b4dab84d0d6/source/200x200bb.jpg",
                }}
                size={50}
              />
            </View>
            <View style={{ marginLeft: 15, flexDirection: "column" }}>
              <Title style={styles.title}>Serkan MALAGİÇ</Title>
              <Caption style={styles.caption}>@serkanmalagic</Caption>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <View style={styles.rowView}>
            <Avatar.Image
              source={{
                uri: "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/68/a1/d5/68a1d55e-656e-57c0-ad37-3b4dab84d0d6/source/200x200bb.jpg",
              }}
              size={30}
            />
            <Text style={styles.rowText}>Giriş Yap</Text>
            <Avatar.Image
              source={{
                uri: "https://img.favpng.com/16/25/25/computer-icons-arrow-icon-design-symbol-png-favpng-xAv9guFNU3RR4J7BXeUT0kgZT.jpg",
              }}
              size={30}
              style={styles.avatarImg}
            />
          </View>
        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection}>
          <View style={styles.rowView}>
          <Avatar.Image
              source={{
                uri: "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/68/a1/d5/68a1d55e-656e-57c0-ad37-3b4dab84d0d6/source/200x200bb.jpg",
              }}
              size={30}
            />
            <Text style={styles.rowText}>Kayıt Ol</Text>
            <Avatar.Image
              source={{
                uri: "https://img.favpng.com/16/25/25/computer-icons-arrow-icon-design-symbol-png-favpng-xAv9guFNU3RR4J7BXeUT0kgZT.jpg",
              }}
              size={30}
              style={styles.avatarImg}
            />
          </View>
        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection}>
          <View style={styles.rowView}>
          <Avatar.Image
              source={{
                uri: "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/68/a1/d5/68a1d55e-656e-57c0-ad37-3b4dab84d0d6/source/200x200bb.jpg",
              }}
              size={30}
            />
            <Text style={styles.rowText}>Ücretsiz Dene</Text>
            <Avatar.Image
              source={{
                uri: "https://img.favpng.com/16/25/25/computer-icons-arrow-icon-design-symbol-png-favpng-xAv9guFNU3RR4J7BXeUT0kgZT.jpg",
              }}
              size={30}
              style={styles.avatarImg}
            />
          </View>
        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection}>
          <View style={styles.rowView}>
          <Avatar.Image
              source={{
                uri: "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/68/a1/d5/68a1d55e-656e-57c0-ad37-3b4dab84d0d6/source/200x200bb.jpg",
              }}
              size={30}
            />
            <Text style={styles.rowText}>Dijital Paket Satın Al</Text>
            <Avatar.Image
              source={{
                uri: "https://img.favpng.com/16/25/25/computer-icons-arrow-icon-design-symbol-png-favpng-xAv9guFNU3RR4J7BXeUT0kgZT.jpg",
              }}
              size={30}
              style={styles.avatarImg}
            />
          </View>
        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection}>
          <View style={styles.rowView}>
          <Avatar.Image
              source={{
                uri: "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/68/a1/d5/68a1d55e-656e-57c0-ad37-3b4dab84d0d6/source/200x200bb.jpg",
              }}
              size={30}
            />
            <Text style={styles.rowText}>Mesajlar</Text>
            <Avatar.Image
              source={{
                uri: "https://img.favpng.com/16/25/25/computer-icons-arrow-icon-design-symbol-png-favpng-xAv9guFNU3RR4J7BXeUT0kgZT.jpg",
              }}
              size={30}
              style={styles.avatarImg}
            />
          </View>
        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection}>
          <View style={styles.rowView}>
          <Avatar.Image
              source={{
                uri: "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/68/a1/d5/68a1d55e-656e-57c0-ad37-3b4dab84d0d6/source/200x200bb.jpg",
              }}
              size={30}
            />
            <Text style={styles.rowText}>Çıkış Yap</Text>
            <Avatar.Image
              source={{
                uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAA6Ojr7+/swMDAODg7Pz8+WlpaGhobg4ODd3d3w8PDX19fa2trj4+Ovr6+0tLSmpqYpKSmenp6Pj49ZWVm/v79nZ2d4eHjo6Oju7u4kJCS6urqIiIhLS0tCQkIZGRl2dnZRUVFmZmZdXV02NjY+Pj655hBrAAAEY0lEQVR4nO2d21bbMBBF7dzBgTjkHgIBSvj/TywhXZSisVHs0ZE6Ofu1WZU3uloaebKMEEIIIYQQQgghhBBCCCHkP2Ozm632nV57DvvFQzmOrfOd8SjX5nVSxLb6pDs9qPt9sL6OrXZi+BTG78jqNrZdlg3uwvkdmccW1O9/3+ldxfQr3oILvlPGE7y9Rwjm+TSW4A3G751hHMFNH2YYpxa7oCZ6YhnBcIUUzPMtXHCKFcwf0YJbsGCeT8CGz3DDHLsQv8UL5g9QQ/Awc6ILFNzEEMxnQMNZ9WP0W1P5Xx+AhvKCuz/UeQ0odntZEbe1IY8zI8V+shNrEveuOJGK152vxNeWhWoRdayF0rWX/+JgBpsShW6iv6iSGgpq16YrlD3QL6XnlrJTL0WmcIvuBZiNH8J3hSqELrIKUMzALQY1mI7dokOsGa8xxUgIf9wQzefKLWYUoBgJGipBw4DQUAkaBoSGStAwIDRUgoYBoaESNAwIDZWg4TcKxc0wkKFwdlBpOFncPd13RjdKRYMMCzcisKKY8vMHC51dcZBh9ugUI+87f42t66tUI8rQCfe4F7va/N8faRzBoQyd0wPxENh5GoWwW5Rhtvy3kL34I/eYqL0izDAbfi3jSRxFpNPa1g0VZ/hllMxf5GFSPK1tO9wADbPiz2nsW1Xonhyk3LKhIg3fGS+Xg03lvz6Lhi1rEWxYz9x9mA9a9cWkDEv3Ydo31KQMhQPp9opJGdaE2DVvqGkZ1sTYNVZMyzDbVSs2baiJGcqT/omGk0ZqhnWKzRpqcobqtZieYZ1ik76YoKFyQ03RUFcxSUPVhpqmoaZiooaKDTVVQ71JI1lDtYZ6pmEXR92NunNq8QzD7nL90gHibpP/5Yy+6G+4DHxZ/zz8G6q3YfjL+ufhrehrmJpgnldv2TUyFH4Wmxddww7e4Ec8r4T7GSZYhd43p/wMq7Zq4+J32O9n+Av/+B743ZD0M3zFP74HfvezWIcn7PdD+2Op/fkwxUpUXtPYX5emp6j+bnEB74cX8I5/sjS9TwMm0l4bDvP7peb3vM2fW5g/ezJ/fqh7kp+goflzfPOxGObjaczHRJmPa6uJTWwcCp2Wofn4UvsxwvbjvC3E6hu/b2H+zoz5e0/m766Zv39o/w6p/XvA5u9y27+Pb/+bCva/i8FvmwSEhkrQMCA0VIKGAaGhEjQMCA2VoGFAaKgEDQNi39B+jhL7eWbi5QpCZc8D5XsSYsRR+Z7s5+yC5F0T8/PB8q7Zz51nP/9hZQ5LhaO7LIkclheQh9R+Lln7+YCj5HQGjjNHnvGG2LzcF5Bbve6WWBD0l4U/Ah5stnhDae0fDs9L2LpsqudmdaYxBLPsBiYYLUBXfAEIQKQaPFLIS3BlyniCGeLKfc/vcyThGAQeUsFrNZGhG2Gnxgq2M1NLd3oI47fWeaNWYTxSnxxfS/BS+0e2y9nqsdNrz2G/mJfADQtCCCGEEEIIIYQQQgghhJBU+A2OclmzYRJ3QgAAAABJRU5ErkJggg==",
              }}
              size={30}
              style={styles.avatarImg}
            />
          </View>
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={(color, size) => (
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
              onPress={() => {}}
            />
          )}
          label="Sign Out"
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 5,
    marginLeft:15,
    height: "15%",
    justifyContent: "center",
    alignSelf:"flex-start"
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "blue",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  rowText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    flexDirection: "column",
    width:"65%",
    textAlign:"center"
  },
  rowView: {
    alignItems:"center",
    flexDirection: "row",
    justifyContent: "center"
  },
  avatarImg:{
    
  }
});
