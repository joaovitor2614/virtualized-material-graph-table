import React from 'react'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import Brightness2Icon from '@material-ui/icons/Brightness2'

export const columns = [
  {
    dataKey: 'first_name',
    label: 'First Name',
  },
  {
    dataKey: 'last_name',
    label: 'Last Name',
  },
  {
    dataKey: 'email',
    label: 'E-mail',
  },
  {
    dataKey: 'gender',
    label: 'Gender',
    inputFilterSelect: [
      { value: 'M', label: 'Male' },
      { value: 'F', label: 'Female' },
    ],
    render: ({ row, KEY }) => (
      <div style={{ fontSize: 13, textAlign: 'center', width: '90%' }}>
        {row[KEY] == 'M' ? 'Male' : 'Female'}
      </div>
    ),
  },
  {
    dataKey: 'language',
    label: 'Language',
  },
  {
    dataKey: 'birthday',
    label: 'Birthday',
    type: 'date',
  },
  {
    dataKey: 'cycle',
    label: 'Cycle',
    render: ({ row, KEY }) => {
      return (
        <div>
          {row[KEY] == 'morning' ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'linear-gradient(red, yellow)',
                padding: 5,
                borderRadius: 4,
                color: '#fff',
              }}
            >
              <WbSunnyIcon />
              {row[KEY]}
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'linear-gradient(blue, black)',
                color: '#fff',
                padding: 5,
                borderRadius: 4,
              }}
            >
              <Brightness2Icon />
              {row[KEY]}
            </div>
          )}
        </div>
      )
    },
  },
]
