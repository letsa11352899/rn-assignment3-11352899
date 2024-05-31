import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity, ScrollViewComponent } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.tasks}>14 tasks today</Text>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Image
            source={require('./assets/Profile Image.png')}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterButton}> 
          <Image source={require('./assets/Filter.png')} style={styles.filterIcon} /> 
          
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>categories</Text>
      <ScrollView horizontal={true} style={styles.horizontalScroll} showsHorizontalScrollIndicator={false}>
      <View style={styles.categoriesContainer}>
        <TouchableOpacity style={styles.categoryCard}>
          <Image
            style={styles.categoryImage}
            source={require('./assets/exercise.png')} />
          <Text style={styles.categoryTitle}>Exerccise</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Image
            style={styles.categoryImage}
            source={require('./assets/cooking.png')} />
          <Text style={styles.categoryTitle}>cook</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Image
            style={styles.categoryImage}
            source={require('./assets/praying.png')} />
          <Text style={styles.categoryTitle}>pray</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Image
            style={styles.categoryImage}
            source={require('./assets/study.png')} />
          <Text style={styles.categoryTitle}>study</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Image
            style={styles.categoryImage}
            source={require('./assets/coding1.png')} />
          <Text style={styles.categoryTitle}>Code</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryCard}>
          <Image
            style={styles.categoryImage}
            source={require('./assets/singing.png')} />
          <Text style={styles.categoryTitle}>sing</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Image
            style={styles.categoryImage}
            source={require('./assets/dance.png')} />
          <Text style={styles.categoryTitle}>dance</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Image
            style={styles.categoryImage}
            source={require('./assets/sleeping.png')} />
          <Text style={styles.categoryTitle}>Sleep</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
      

      <View style={styles.ongoingTasks}>
        <Text style={styles.sectionTitle}>Ongoing Task</Text>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Mobile App Development</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Web Development</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Push Ups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Exercise</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Study</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Coding</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Assignments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Info Gathering</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>UI/UX</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Canva</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>UI/UX</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Timetable</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Quiz</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  greetingContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  tasks: {
    fontSize: 30,
    color: '#000',
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 2,
    height: 50,
    paddingHorizontal: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FFF',
    fontSize: 18,
  },
  filterButton: {
    marginLeft: 15,
    padding: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  
  horizontalscroll: {
    flexGrow: 0,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '40%',
    height:250,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    marginRight: 40,
  },
  categoryImage: {
    width: 150,
    height: 150,
    margin: 10,
    paddingVertical: 20,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryTasks: {
    color: '#888',
  },
  ongoingTasks: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },



  taskCard: {
    padding: 25,
    marginVertical: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    
    height: 100,
  },
  taskText: {
    fontSize: 20,

  },
});