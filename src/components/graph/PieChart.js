import React from 'react'
import PropTypes from 'prop-types'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const PieChart = ({ options }) => (
  <div>
    <HighchartsReact
      allowChartUpdate
      highcharts={Highcharts}
      options={options}
    />
  </div>
)

export default PieChart

PieChart.propTypes = {
  options: PropTypes.object.isRequired,
}
