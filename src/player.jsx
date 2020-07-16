import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import styled from 'styled-components'

class Player extends Component {


  //the id of this player can be accessed with this.props.id

/*

"games_played":37,
      "player_id":237,
      "season":2018,
      "min":"34:46",
      "fgm":9.92,
      "fga":19.22,
      "fg3m":2.05,
      "fg3a":5.73,
      "ftm":5.08,
      "fta":7.54,
      "oreb":0.95,
      "dreb":7.59,
      "reb":8.54,
      "ast":7.38,
      "stl":1.32,
      "blk":0.65,
      "turnover":3.49,
      "pf":1.59,
      "pts":26.97,
      "fg_pct":0.516,
      "fg3_pct":0.358,
      "ft_pct":0.674
*/


  render() {

    const columns =[{
      id: 'this.props.id',
      Header: 'PlayerID',
      accessor: 'this.props.id',
    },
    {
      Header: 'GP',
      accessor: 'games_played'
    }]

    return (
      <div>
        <ReactTable data={data} columns={columns}/>
      </div>
    )
  }
}

export default Player
