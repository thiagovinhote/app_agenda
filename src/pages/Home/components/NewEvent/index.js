/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, Modal, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from 'react-native-modal-datetime-picker';

/* Redux */
import { connect } from 'react-redux';
import EventActions from 'store/ducks/events';

import styles from './styles';

class NewEvent extends Component {
    static propTypes = {
      close: PropTypes.func.isRequired,
      eventSaveRequest: PropTypes.func.isRequired,
    }

    state = {
      event: {
        dateHour: '',
        title: '',
        place: '',
      },
      pickerVisible: false,
    }

    save = () => {
      const { event } = this.state;
      const { eventSaveRequest, close } = this.props;
      close();
      this.setState({
        event: {
          dateHour: '',
          title: '',
          place: '',
        },
      });
      return eventSaveRequest(event);
    }

    showPicker = () => this.setState({ pickerVisible: true });

    hiddenPicker = () => this.setState({ pickerVisible: false });

    changePicker = (date) => {
      this.state.event.dateHour = date;
      this.hiddenPicker();
    }

    render() {
      return (
        <Modal
          {...this.props}
        >
          <View style={[styles.container, styles.content]}>
            <View style={styles.box}>
              <Text style={styles.title}>Criar evento</Text>

              <View style={styles.containerInput}>
                <Icon style={styles.icon} name="calendar" size={20} />
                <TextInput
                  placeholder="Selecione data e horário"
                  style={styles.input}
                  placeholderTextColor="#999999"
                  value={this.state.event.dateHour.toString()}
                  onTouchStart={this.showPicker}
                  underlineColorAndroid="transparent"
                  onFocus={Keyboard.dismiss}
                />

                <DateTimePicker
                  mode="datetime"
                  isVisible={this.state.pickerVisible}
                  onConfirm={this.changePicker}
                  onCancel={this.hiddenPicker}
                />
              </View>

              <View style={styles.containerInput}>
                <TextInput
                  placeholder="Qual o nome do evento?"
                  style={styles.input}
                  placeholderTextColor="#999999"
                  onChangeText={(t) => { this.state.event.title = t }}
                />
              </View>

              <View style={styles.containerInput}>
                <TextInput
                  placeholder="Onde irá ocorrer?"
                  style={styles.input}
                  placeholderTextColor="#999999"
                  onChangeText={(t) => { this.state.event.place = t }}
                />
              </View>

              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.button}
                onPress={this.save}
              >
                <Text style={styles.text}>Criar evento</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.buttonNeat}
                onPress={this.props.close}
              >
                <Text style={styles.textNeat}>Cancelar</Text>
              </TouchableOpacity>

            </View>
          </View>
        </Modal>
      );
    }
}

const mapDispatchToProsp = dispatch => ({
  eventSaveRequest: event => dispatch(EventActions.eventSaveRequest(event)),
});

export default connect(null, mapDispatchToProsp)(NewEvent);
