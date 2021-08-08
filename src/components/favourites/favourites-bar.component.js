import React from "react";
import { ScrollView, TouchableOpacity, View, Image } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Text variant="caption">Favourites</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <View key={key} size="medium">
              <TouchableOpacity
                style={{ paddingLeft: 4 }}
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
