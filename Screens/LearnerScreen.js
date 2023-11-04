import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'

export default function LearnerScreen() {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <View>
          <Text style={styles.welcome}>Welcome, Learner </Text>
          </View>
          <View style={styles.userIcon}>
            <Text>Hi</Text>
          </View>
        </View>
        <View style={styles.boxDesc}>
          <Text>Hi</Text>
        </View>
        <View style={styles.teacherHeading}>
          <Text style={styles.teacher}>Teachers</Text>
          <Text style={styles.ViewlAll}>View All</Text>
        </View>
      
        <View style={styles.teachers}>
          <View style={styles.teacherImage}>
          <Image alt=''/>
          </View>
          <View style={styles.teacherImage}>
          <Image alt=''/>
          </View>
          <View style={styles.teacherImage}>
          <Image alt=''/>
          </View>
         
        </View>
        <View style={styles.calender}>
          <Text>Subjects</Text>
        </View>
        <View style={styles.subjects}>
          <Text>All</Text>
          <Text>Mathematics</Text>
          <Text>Physical Sciences</Text>
          <Text>Accounting</Text>
          
        </View>
        <View style={styles.subjectCard}>
          <Image alt=''/>
          <View>
            <Text>Mathematics</Text>
            <Text>Grade 10</Text>
          </View>

        </View>

        <View style={styles.subjectCard}>
          <Image alt=''/>
          <View>
            <Text>Mathematics</Text>
            <Text>Grade 10</Text>
          </View>


        </View>

        <TouchableOpacity
            onPress={() => setIsChecked(!isChecked)}
            style={[styles.checkbox, isChecked ? styles.checked : null]}
          />
        
      </View>
      {/* <TouchableOpacity style={styles.button}>
        <Text>Log out</Text>
      </TouchableOpacity> */}

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10
  },
  header:{
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  welcome:{
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 14
  },
  userIcon:{
    width:40,
    hieght: 40,
    borderRadius: 20,
    backgroundColor:'#02B3FF',
    justifyContent: 'space-between'
  },
  boxDesc:{
    alignItems: 'center',
    width: 335,
    height:100 , 
    backgroundColor: '#02B3FF',
    borderRadius: 32,
    justifyContent: 'center',
    marginTop: 20,
    left: 10
  },
  teacherHeading:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    
    
  },
  upcomingAssignment:{
    marginTop: 30,
  },
  teachers:{
    marginTop: 10,
    flexDirection: 'row',
    gap:30,
    left:10
  },
  teacherImage:{
    width: 100,
    height: 100,
    borderRadius: 29, 
    backgroundColor: '#D9D9D9',
    marginTop:20
  },
  subjects:{
    flexDirection: 'row',
    gap: 5,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 24,
    left: 10
  },
  subjectCard:{
    width: '100%',
    height: 120,
    backgroundColor: 'black',
    borderRadius:13,
    marginTop: 20,
  },
  
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 4,
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#02B3FF', 
  },
  button:{
    backgroundColor: '#f4511e',
    alignItems: 'center'

  }

})