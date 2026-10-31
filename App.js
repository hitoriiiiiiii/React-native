import React from 'react';
import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const places = [
  { name: 'Sunday Market', type: 'BRUNCH · LOCAL FAVORITE', detail: 'Fresh pastries and slow mornings', time: '8 min walk', icon: '🥐', color: '#F6D8B8' },
  { name: 'Fern & Finch', type: 'COFFEE · QUIET CORNER', detail: 'A little green in the middle of town', time: '12 min walk', icon: '☕', color: '#C9DFD1' },
  { name: 'Little Lark', type: 'BAKERY · NEW THIS WEEK', detail: 'Warm bread, straight from the oven', time: '15 min walk', icon: '🍞', color: '#F3C8C0' },
  { name: 'The Courtyard', type: 'LUNCH · OUTDOOR SEATING', detail: 'Bright plates under the trees', time: '18 min walk', icon: '🥗', color: '#D5D9A7' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>SATURDAY, OCTOBER 31</Text>
            <Text style={styles.title}>Find your{ '\n' }next favorite.</Text>
          </View>
          <Pressable accessibilityRole="button" accessibilityLabel="Your profile" style={styles.profileButton}>
            <Text style={styles.profileInitial}>J</Text>
          </Pressable>
        </View>

        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>⌕</Text>
          <Text style={styles.searchText}>Coffee, brunch, little places...</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        >
          <Text style={[styles.category, styles.activeCategory]}>For you</Text>
          <Text style={styles.category}>Coffee</Text>
          <Text style={styles.category}>Brunch</Text>
          <Text style={styles.category}>Outdoors</Text>
          <Text style={styles.category}>Sweet treats</Text>
        </ScrollView>

        <Pressable style={styles.feature} accessibilityRole="button">
          <View style={styles.featureCopy}>
            <Text style={styles.featureLabel}>THE WEEKEND EDIT</Text>
            <Text style={styles.featureTitle}>A slower{ '\n' }kind of day</Text>
            <Text style={styles.featureLink}>Explore the guide  ↗</Text>
          </View>
          <Text style={styles.featureArt}>🌿</Text>
        </Pressable>

        <View style={styles.sectionHeading}>
          <View>
            <Text style={styles.sectionTitle}>Around the corner</Text>
            <Text style={styles.sectionSubtitle}>Good spots, close by</Text>
          </View>
          <Text style={styles.seeAll}>SEE ALL</Text>
        </View>

        {places.map((place, index) => (
          <Pressable key={place.name} style={styles.placeCard} accessibilityRole="button">
            <View style={[styles.placeArt, { backgroundColor: place.color }]}>
              <Text style={styles.placeIcon}>{place.icon}</Text>
              <Text style={styles.placeNumber}>0{index + 1}</Text>
            </View>
            <View style={styles.placeInfo}>
              <Text style={styles.placeType}>{place.type}</Text>
              <Text style={styles.placeName}>{place.name}</Text>
              <Text style={styles.placeDetail}>{place.detail}</Text>
              <Text style={styles.placeTime}>↗  {place.time}</Text>
            </View>
            <Text style={styles.bookmark}>♡</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6F1',
  },
  content: {
    paddingTop: 58,
    paddingHorizontal: 22,
    paddingBottom: 36,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  eyebrow: {
    color: '#788078',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
    marginBottom: 9,
  },
  title: {
    color: '#202923',
    fontSize: 34,
    fontWeight: '800',
    lineHeight: 38,
  },
  profileButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#D7E5D5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitial: {
    color: '#315840',
    fontSize: 16,
    fontWeight: '700',
  },
  searchBar: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8E9E2',
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 20,
  },
  searchIcon: {
    color: '#64736A',
    fontSize: 25,
    lineHeight: 28,
    marginRight: 9,
  },
  searchText: {
    color: '#929890',
    fontSize: 14,
  },
  categoryList: {
    paddingBottom: 22,
    gap: 9,
  },
  category: {
    overflow: 'hidden',
    color: '#536057',
    backgroundColor: '#ECEEE8',
    borderRadius: 18,
    paddingHorizontal: 15,
    paddingVertical: 9,
    fontSize: 13,
    fontWeight: '600',
  },
  activeCategory: {
    color: '#FFFFFF',
    backgroundColor: '#315840',
  },
  feature: {
    minHeight: 170,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    borderRadius: 16,
    backgroundColor: '#DCE8D8',
    paddingVertical: 20,
    paddingLeft: 20,
    paddingRight: 13,
    marginBottom: 29,
  },
  featureCopy: {
    zIndex: 1,
  },
  featureLabel: {
    color: '#55745A',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.3,
    marginBottom: 9,
  },
  featureTitle: {
    color: '#203C2A',
    fontSize: 25,
    fontWeight: '800',
    lineHeight: 29,
    marginBottom: 13,
  },
  featureLink: {
    color: '#315840',
    fontSize: 12,
    fontWeight: '700',
  },
  featureArt: {
    fontSize: 82,
    transform: [{ rotate: '-18deg' }],
  },
  sectionHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    color: '#202923',
    fontSize: 20,
    fontWeight: '800',
  },
  sectionSubtitle: {
    color: '#80877F',
    fontSize: 12,
    marginTop: 4,
  },
  seeAll: {
    color: '#55745A',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  placeCard: {
    minHeight: 116,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    padding: 10,
    marginBottom: 11,
  },
  placeArt: {
    width: 94,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
  },
  placeIcon: {
    fontSize: 37,
  },
  placeNumber: {
    position: 'absolute',
    bottom: 7,
    right: 8,
    color: '#34433A',
    fontSize: 9,
    fontWeight: '800',
  },
  placeInfo: {
    flex: 1,
    minWidth: 0,
    paddingHorizontal: 12,
  },
  placeType: {
    color: '#839087',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 0.6,
    marginBottom: 5,
  },
  placeName: {
    color: '#26332A',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 3,
  },
  placeDetail: {
    color: '#778078',
    fontSize: 10,
    marginBottom: 7,
  },
  placeTime: {
    color: '#4C7055',
    fontSize: 10,
    fontWeight: '700',
  },
  bookmark: {
    alignSelf: 'flex-start',
    color: '#718075',
    fontSize: 23,
    lineHeight: 25,
    paddingHorizontal: 3,
  },
});