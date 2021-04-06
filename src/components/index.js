import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {
  datetimeToStringYYYY_MM_DD,
  datetimeToStringDD_MM_YYYY,
} from './utils/dateHelpers'
import Relatorio from './relatorio'

export default function ShowRelatorio(props) {
  const {
    customColumns,
    data,
    noFilters,
    rowHeight,
    noBottomTotal,
    renderGraphBtn,
    tableHeight,
  } = props

  let DATA = JSON.parse(JSON.stringify(data))

  let hasData = data && data.length > 0 ? true : false
  let hasCustomColumns =
    customColumns && customColumns.length > 0 ? true : false

  if (!hasData || !hasCustomColumns) {
    return <> Sem relatorio, contate o administrador do sistema. </>
  }

  let columnToFormat = []

  customColumns.map(column => {
    Object.keys(column).map(key => {
      if (column[key] === 'date' || column[key] === 'datetime') {
        columnToFormat.push(column)
      }
    })
  })

  if (columnToFormat.length > 0) {
    DATA.map(e => {
      columnToFormat.map(column => {
        if (e[column.dataKey]) {
          if (column.type == 'date') {
            e[column.dataKey] = moment(e[column.dataKey])
              .utc()
              .format('DD/MM/YYYY')
          } else if (column.type == 'datetime') {
            if (column.dateType == 'dd/mm/yyyy') {
              let response = datetimeToStringDD_MM_YYYY(e[column.dataKey])

              let formatedDate = moment(response.data)
                .utc()
                .format('DD/MM/YYYY')
              e[column.dataKey] = `${formatedDate} ${response.hhmmss}`
            } else if (column.dateType == 'yyyy-mm-dd') {
              let response = datetimeToStringYYYY_MM_DD(e[column.dataKey])

              let formatedDate = moment(response.date)
                .utc()
                .format('DD/MM/YYYY')
              e[column.dataKey] = `${formatedDate} ${response.hhmmss}`
            } else if (column.dateType == 'iso') {
              let response = datetimeToStringYYYY_MM_DD(e[column.dataKey])

              let formatedDate = moment(response.date)
                .utc()
                .format('DD/MM/YYYY')
              e[column.dataKey] = `${formatedDate} ${response.hhmmss}`
            } else {
              e[column.dataKey] = moment(e[column.dataKey])
                .utc()
                .format('DD/MM/YYYY hh:mm:ss')
            }
          }
        } else {
          return ''
        }
      })
    })
  }

  return (
    <Relatorio
      customColumns={customColumns}
      data={DATA}
      noFilters={noFilters}
      rowHeight={rowHeight}
      noBottomTotal={noBottomTotal}
      renderGraphBtn={renderGraphBtn}
      tableHeight={tableHeight}
    />
  )
}

ShowRelatorio.defaultProps = {
  noBottomTotal: false,
  noFilters: false,
  renderGraphBtn: true,
  tableHeight: 400,
}

ShowRelatorio.propTypes = {
  customColumns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  rowHeight: PropTypes.number.isRequired,
  noFilters: PropTypes.bool,
  noBottomTotal: PropTypes.bool,
  renderGraphBtn: PropTypes.bool,
  tableHeight: PropTypes.number,
}
