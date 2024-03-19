import {StyleSheet, View, ScrollView, Text} from 'react-native';
import React from 'react';
import {Button, Gap, PageHeader, TextInput} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <PageHeader
          label="Sign Up"
          backButton={true}
          backButton={() => navigation.goBack()}
        />
        <Gap height={24} />
        <View style={styles.contentWrapper}>
          <View style={styles.avatarWrapper}>
            <View style={styles.border}>
              <View style={styles.addPhoto}>
                <Text style={styles.addPhotoText}>Add Photo</Text>
              </View>
            </View>
          </View>
          <Gap height={26} />
          <TextInput label="Full Name" placeholder="Type your full name" />

          <Gap height={16} />
          <TextInput
            label="Email Address"
            placeholder="Type your email address"
          />
          <Gap height={16} />
          <TextInput label="Password" placeholder="Type your password" />

          <Gap height={24} />
          <Button
            label="Continue"
            onPress={() => navigation.navigate('SignUpPhoto')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  addPhoto: {
    height: 90,
    width: 90,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
  addPhotoText: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    maxWidth: 40,
    textAlign: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderRadius: 110,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
});

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const SignUp = () => {
//   return (
//     <View>
//       <Text>SignUp</Text>
//     </View>
//   );
// };

// export default SignUp;

// const styles = StyleSheet.create({});
