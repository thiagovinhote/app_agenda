/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import XDate from 'xdate';
import { parseDate, sameMonth, sameDate, xdateToData, page } from 'utils/dateutils';

/* Presentational */
import { View } from 'react-native';
import HeaderCalendar from './components/HeaderCalendar';
import Day from './components/Day';

import styles from './styles';

XDate.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'], 
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
  dayNamesShort: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
};

XDate.defaultLocale = 'pt-br';

class CalendarEvent extends Component {
  static propTypes = {
    pressDay: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      currentMonth: new XDate(),
      selected: new XDate(),
    };
  }

  pressDay = (date) => {
    const day = parseDate(date);
    this.setState({ selected: day });
    this.updateMonth(day);
    this.props.pressDay(day);
  }

  updateMonth = (day) => {
    if (day.toString('yyyy MM') === this.state.currentMonth.toString('yyyy MM')) {
      return;
    }
    this.setState({
      currentMonth: day.clone(),
    });
  }

  monthRelease = (count) => {
    this.updateMonth(this.state.currentMonth.clone().addMonths(count, true));
  }

  renderDay(day, id) {
    let state = '';
    if (day.toString('yyyy MM dd') === this.state.selected.toString('yyyy MM dd')) {
      state = 'selected';
    } else if (!sameMonth(day, this.state.currentMonth)) {
      state = 'disabled';
    } else if (sameDate(day, XDate())) {
      state = 'today';
    }
    const DayComp = Day;
    const date = day.getDate();
    const dayComp = (
      <DayComp
        key={id}
        state={state}
        onPress={this.pressDay}
        date={xdateToData(day)}
      >
        {date}
      </DayComp>);
    return dayComp;
  }

  renderWeek(days, id) {
    const week = [];
    days.forEach((day, id2) => {
      week.push(this.renderDay(day, id2));
    }, this);

    return (<View style={styles.week} key={id}>{week}</View>);
  }

  render() {
    const days = page(this.state.currentMonth, 0);
    const weeks = [];
    while (days.length) {
      weeks.push(this.renderWeek(days.splice(0, 7), weeks.length));
    }
    return (
      <View style={styles.container}>
        <HeaderCalendar
          month={this.state.currentMonth}
          monthRelease={this.monthRelease}
          monthFormat="MMMM / yy"
        />
        <View style={styles.content}>
          {weeks}
        </View>
      </View>
    );
  }
}

export default CalendarEvent;
