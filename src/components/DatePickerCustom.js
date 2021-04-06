import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers'
import FormControl from '@material-ui/core/FormControl'
import { withStyles } from '@material-ui/core/styles'
import moment from 'moment'
import {
  Event,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@material-ui/icons'
import 'moment/locale/pt-br'
import MomentUtils from '@date-io/moment'

MomentUtils.prototype.startOfMonth = MomentUtils.prototype.getStartOfMonth
moment.locale('pt-br')

const styles = theme => ({
  inputRoot: {
    marginTop: -3,
    padding: 0,
    '& input': {
      padding: '10px 8px',
      textAlign: 'center',
      fontSize: 14,
    },
  },
})

class DatePickerCustom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedDate: this.props.value || null,
    }
    this.datePickerRef = React.createRef()
  }

  handleDateChange = data => {
    this.setState({
      selectedDate: data,
    })
    this.props.filterData({ isFilterInput: true })
  }

  handleDateChangeOnPieGraphClick = data => {
    this.setState({
      selectedDate: data,
    })
  }

  render() {
    const {
      columnIndex,
      inputRefs,
      KEY,
      columnType,
      label,
      classes,
    } = this.props

    return (
      <MuiPickersUtilsProvider
        utils={MomentUtils}
        moment={moment}
        style={{ cursor: 'pointer' }}
      >
        <FormControl className={classes.inputRoot}>
          <DatePicker
            locale="pt-BR"
            keyboardIcon={<Event />}
            rightArrowIcon={<KeyboardArrowRight />}
            leftArrowIcon={<KeyboardArrowLeft />}
            handleDateChangeOnPieGraphClick={
              this.handleDateChangeOnPieGraphClick
            }
            margin="dense"
            variant="outlined"
            ref={el => {
              if (el) {
                this.datePickerRef = el
                inputRefs[columnIndex] = {
                  name: KEY,
                  el,
                  label,
                  columnType,
                  value: this.state.selectedDate
                    ? moment(this.state.selectedDate).format('DD/MM/YYYY')
                    : '',
                }
              }
            }}
            value={this.state.selectedDate}
            onChange={e => this.handleDateChange(e)}
            format="DD/MM/YYYY"
            clearable
            clearLabel="limpar filtro"
            cancelLabel="cancelar"
          />
        </FormControl>
      </MuiPickersUtilsProvider>
    )
  }
}

export default withStyles(styles)(DatePickerCustom)

DatePickerCustom.propTypes = {
  customColumns: PropTypes.array.isRequired,
  columnIndex: PropTypes.number.isRequired,
  inputRefs: PropTypes.array.isRequired,
  KEY: PropTypes.string.isRequired,
  columnType: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  classes: PropTypes.array.isRequired,
}
