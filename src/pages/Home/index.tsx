import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components';
import {PageHeader} from '../../components';

const HomePage = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <PageHeader type="withPhoto" />

      <View style={styles.contentWrapper1}>
        <Text style={styles.balance}>Your Balance</Text>
        <Text style={styles.balanceMoney}>Rp. 10.000.000</Text>
        <View style={styles.line} />
        <View style={styles.cashOn}>
          <Text style={styles.cashOnStyle1}>Cash on Hand</Text>
          <Text style={styles.cashOnMoney1}>Rp. 4.000.000</Text>
        </View>
        <View style={styles.cashOn}>
          <Text style={styles.cashOnStyle2}>Cash On Bank </Text>
          <Text style={styles.cashOnMoney2}>Rp. 6.000.000</Text>
        </View>
        <Gap height={24} />
      </View>
      <View style={styles.contentWrapper2}>
        <Text style={styles.transactionText}>Add Transaction</Text>
        <Button
          label="Cash On Hand"
          backgroundColor="#02CF8E"
          textColor="#000000"
          onPress={() => navigation.navigate('CashOnHand')}
        />
        <Gap height={25} />
        <Button
          label="Cash On Bank"
          backgroundColor="#02CF8E"
          textColor="#000000"
          onPress={() => navigation.navigate('CashOnBank')}
        />
      </View>
      <Gap height={25} />
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper1: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
  balance: {
    fontSize: 28,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 15,
    paddingBottom: 15,
  },
  balanceMoney: {
    fontSize: 30,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    textAlign: 'center',
    marginBottom: 25,
    fontWeight: 'bold',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  cashOn: {
    flexDirection: 'row',
  },
  cashOnStyle1: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 25,
  },
  cashOnMoney1: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 25,
    paddingLeft: 20,
    fontWeight: 'bold',
  },
  cashOnStyle2: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 15,
  },
  cashOnMoney2: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 15,
    paddingLeft: 20,
    fontWeight: 'bold',
  },
  contentWrapper2: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 25,
    backgroundColor: 'white',
    paddingBottom: 72,
  },
  transactionText: {
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 25,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  contentWrapper3: {
    flex: 2,
    marginTop: 20,
    paddingHorizontal: 25,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  //   homeIcon: {
  //     paddingTop: 15,
  //     paddingBottom: 15,
  //     flex: 1,
  //     alignItems: 'center',
  // },
  //   squareFrame: {
  //     paddingTop: 25,
  //     paddingBottom: 15,
  //     flex: 1,
  //     alignItems: 'center',
  //   },
});
