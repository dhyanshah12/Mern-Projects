import React from 'react'

export const MyTable = (props) => {
  return (
    <table class="table table-dark">

      <thead>
        <tr>
          {
            props.headers.map((th) => {
              return <th>{th}</th>
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          props.data.map((tr) => {
            return <tr>
              {
                props.headers.map((td) => {
                  return <td>{tr[td]}</td>
                })
              }
            </tr>
          })
        }
      </tbody>
    </table>
  )
}

//////////////////////////////////