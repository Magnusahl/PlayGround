import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, Button, Modal } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ReviewsContext } from '../context/Reviews';

export default function ReviewModal({
  modalVisible,
  setModalVisible,
  selectedPlayground,
}) {
  const [review, setReview] = useState('');
  const { saveReview, getReviews } = useContext(ReviewsContext);

  const reviewSave = () => {
    saveReview(review, selectedPlayground);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <Text>Write a review of this playground</Text>
        <TextInput
          placeholder="Write here..."
          value={review}
          onChangeText={setReview}
        />
        <Button
          title="save review"
          onPress={() => {
            setModalVisible(false);
            reviewSave();
            setReview('');
          }}
        />
        <Text>Reviews for :{getReviews}</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 350,
    margin: 20,
    backgroundColor: 'yellow',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
