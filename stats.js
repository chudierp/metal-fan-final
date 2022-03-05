import { Text, View, StyleSheet } from 'react-native';
import stats from './metal.json'

internationalNumberFormat = new Intl.NumberFormat('en-US')

const getTotalBands = (data) => {
  return data.length
}

const getTotalFanCount = (data) => {
  return data.reduce((acc, b) => acc + b.fans, 0)
}

const getTotalCountryCount = (data) => {
  const countries = data.map(b => b.origin)
  return new Set(countries).size
}

const getTotalActiveBands = (data) => {
  const active = data.filter(b => b.split === '-')
  return active.length
}

const getTotalSpilitBands = (data) => {
  const split = data.filter(b => b.split !== '-')
  return split.length
}

function StatsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
      <Text style={styles.heading}>Metal Stats 🎸 </Text>
      </View>
     
      <View style={styles.details}>
        <Text style={styles.label}>Count: </Text>
        <Text style={styles.count}>{getTotalBands(stats.bands)}</Text>
      </View>
      
      <View style={styles.details}>
        <Text style={styles.label}>Fans: </Text>
        <Text style={styles.count}>{internationalNumberFormat.format(getTotalFanCount(stats.bands) * 1000)}</Text>
      </View>
      
      <View style={styles.details}>
        <Text style={styles.label}>Countries: </Text>
        <Text style={styles.count}>{getTotalCountryCount(stats.bands)}</Text>
      </View>
      
      <View style={styles.details}>
        <Text style={styles.label}>Active: </Text>
        <Text style={styles.count}>{getTotalActiveBands(stats.bands)}</Text>
      </View>
      
      <View style={styles.details}>
        <Text style={styles.label}>Split: </Text>
        <Text style={styles.count} >{getTotalSpilitBands(stats.bands)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    container: {
        paddingTop: 100,
        flex: 1
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20 
    },
    count: {
        fontSize: 18,
    }
});

export default StatsScreen;