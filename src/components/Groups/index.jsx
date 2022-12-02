// import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

export default function Groups() {
  const [groups] = useState([
    {
      stage: "GROUP_STAGE",
      type: "TOTAL",
      group: "GROUP_A",
      table: [
        {
          position: 1,
          team: {
            id: 8601,
            name: "Netherlands",
            shortName: "Netherlands",
            tla: "NED",
            crest: "https://crests.football-data.org/8601.svg",
          },
          playedGames: 3,
          form: null,
          won: 2,
          draw: 1,
          lost: 0,
          points: 7,
          goalsFor: 5,
          goalsAgainst: 1,
          goalDifference: 4,
        },
        {
          position: 2,
          team: {
            id: 804,
            name: "Senegal",
            shortName: "Senegal",
            tla: "SEN",
            crest: "https://crests.football-data.org/senegal.svg",
          },
          playedGames: 3,
          form: null,
          won: 2,
          draw: 0,
          lost: 1,
          points: 6,
          goalsFor: 5,
          goalsAgainst: 4,
          goalDifference: 1,
        },
        {
          position: 3,
          team: {
            id: 791,
            name: "Ecuador",
            shortName: "Ecuador",
            tla: "ECU",
            crest: "https://crests.football-data.org/791.svg",
          },
          playedGames: 3,
          form: null,
          won: 1,
          draw: 1,
          lost: 1,
          points: 4,
          goalsFor: 4,
          goalsAgainst: 3,
          goalDifference: 1,
        },
        {
          position: 4,
          team: {
            id: 8030,
            name: "Qatar",
            shortName: "Qatar",
            tla: "QAT",
            crest: "https://crests.football-data.org/8030.svg",
          },
          playedGames: 3,
          form: null,
          won: 0,
          draw: 0,
          lost: 3,
          points: 0,
          goalsFor: 1,
          goalsAgainst: 7,
          goalDifference: -6,
        },
      ],
    },
    {
      stage: "GROUP_STAGE",
      type: "TOTAL",
      group: "GROUP_B",
      table: [
        {
          position: 1,
          team: {
            id: 770,
            name: "England",
            shortName: "England",
            tla: "ENG",
            crest: "https://crests.football-data.org/770.svg",
          },
          playedGames: 3,
          form: null,
          won: 2,
          draw: 1,
          lost: 0,
          points: 7,
          goalsFor: 9,
          goalsAgainst: 2,
          goalDifference: 7,
        },
        {
          position: 2,
          team: {
            id: 771,
            name: "United States",
            shortName: "USA",
            tla: "USA",
            crest: "https://crests.football-data.org/usa.svg",
          },
          playedGames: 3,
          form: null,
          won: 1,
          draw: 2,
          lost: 0,
          points: 5,
          goalsFor: 2,
          goalsAgainst: 1,
          goalDifference: 1,
        },
        {
          position: 3,
          team: {
            id: 840,
            name: "Iran",
            shortName: "Iran",
            tla: "IRN",
            crest: "https://crests.football-data.org/iran.svg",
          },
          playedGames: 3,
          form: null,
          won: 1,
          draw: 0,
          lost: 2,
          points: 3,
          goalsFor: 4,
          goalsAgainst: 7,
          goalDifference: -3,
        },
        {
          position: 4,
          team: {
            id: 833,
            name: "Wales",
            shortName: "Wales",
            tla: "WAL",
            crest: "https://crests.football-data.org/833.svg",
          },
          playedGames: 3,
          form: null,
          won: 0,
          draw: 1,
          lost: 2,
          points: 1,
          goalsFor: 1,
          goalsAgainst: 6,
          goalDifference: -5,
        },
      ],
    },
    {
      stage: "GROUP_STAGE",
      type: "TOTAL",
      group: "GROUP_C",
      table: [
        {
          position: 1,
          team: {
            id: 762,
            name: "Argentina",
            shortName: "Argentina",
            tla: "ARG",
            crest: "https://crests.football-data.org/762.png",
          },
          playedGames: 3,
          form: null,
          won: 2,
          draw: 0,
          lost: 1,
          points: 6,
          goalsFor: 5,
          goalsAgainst: 2,
          goalDifference: 3,
        },
        {
          position: 2,
          team: {
            id: 794,
            name: "Poland",
            shortName: "Poland",
            tla: "POL",
            crest: "https://crests.football-data.org/794.svg",
          },
          playedGames: 3,
          form: null,
          won: 1,
          draw: 1,
          lost: 1,
          points: 4,
          goalsFor: 2,
          goalsAgainst: 2,
          goalDifference: 0,
        },
        {
          position: 3,
          team: {
            id: 769,
            name: "Mexico",
            shortName: "Mexico",
            tla: "MEX",
            crest: "https://crests.football-data.org/769.svg",
          },
          playedGames: 3,
          form: null,
          won: 1,
          draw: 1,
          lost: 1,
          points: 4,
          goalsFor: 2,
          goalsAgainst: 3,
          goalDifference: -1,
        },
        {
          position: 4,
          team: {
            id: 801,
            name: "Saudi Arabia",
            shortName: "Saudi Arabia",
            tla: "KSA",
            crest: "https://crests.football-data.org/saudi_arabia.svg",
          },
          playedGames: 3,
          form: null,
          won: 1,
          draw: 0,
          lost: 2,
          points: 3,
          goalsFor: 3,
          goalsAgainst: 5,
          goalDifference: -2,
        },
      ],
    },
    {
      stage: "GROUP_STAGE",
      type: "TOTAL",
      group: "GROUP_D",
      table: [
        {
          position: 1,
          team: {
            id: 773,
            name: "France",
            shortName: "France",
            tla: "FRA",
            crest: "https://crests.football-data.org/773.svg",
          },
          playedGames: 3,
          form: null,
          won: 2,
          draw: 0,
          lost: 1,
          points: 6,
          goalsFor: 6,
          goalsAgainst: 3,
          goalDifference: 3,
        },
        {
          position: 2,
          team: {
            id: 779,
            name: "Australia",
            shortName: "Australia",
            tla: "AUS",
            crest: "https://crests.football-data.org/779.svg",
          },
          playedGames: 3,
          form: null,
          won: 2,
          draw: 0,
          lost: 1,
          points: 6,
          goalsFor: 3,
          goalsAgainst: 4,
          goalDifference: -1,
        },
        {
          position: 3,
          team: {
            id: 802,
            name: "Tunisia",
            shortName: "Tunisia",
            tla: "TUN",
            crest: "https://crests.football-data.org/tunisia.svg",
          },
          playedGames: 3,
          form: null,
          won: 1,
          draw: 1,
          lost: 1,
          points: 4,
          goalsFor: 1,
          goalsAgainst: 1,
          goalDifference: 0,
        },
        {
          position: 4,
          team: {
            id: 782,
            name: "Denmark",
            shortName: "Denmark",
            tla: "DEN",
            crest: "https://crests.football-data.org/782.svg",
          },
          playedGames: 3,
          form: null,
          won: 0,
          draw: 1,
          lost: 2,
          points: 1,
          goalsFor: 1,
          goalsAgainst: 3,
          goalDifference: -2,
        },
      ],
    },
    {
      stage: "GROUP_STAGE",
      type: "TOTAL",
      group: "GROUP_E",
      table: [
        {
          position: 1,
          team: {
            id: 766,
            name: "Japan",
            shortName: "Japan",
            tla: "JPN",
            crest: "https://crests.football-data.org/766.svg",
          },
          playedGames: 3,
          form: null,
          won: 2,
          draw: 0,
          lost: 1,
          points: 6,
          goalsFor: 4,
          goalsAgainst: 3,
          goalDifference: 1,
        },
        {
          position: 2,
          team: {
            id: 760,
            name: "Spain",
            shortName: "Spain",
            tla: "ESP",
            crest: "https://crests.football-data.org/760.svg",
          },
          playedGames: 3,
          form: null,
          won: 1,
          draw: 1,
          lost: 1,
          points: 4,
          goalsFor: 9,
          goalsAgainst: 3,
          goalDifference: 6,
        },
        {
          position: 3,
          team: {
            id: 759,
            name: "Germany",
            shortName: "Germany",
            tla: "GER",
            crest: "https://crests.football-data.org/759.svg",
          },
          playedGames: 3,
          form: null,
          won: 1,
          draw: 1,
          lost: 1,
          points: 4,
          goalsFor: 6,
          goalsAgainst: 5,
          goalDifference: 1,
        },
        {
          position: 4,
          team: {
            id: 793,
            name: "Costa Rica",
            shortName: "Costa Rica",
            tla: "CRC",
            crest: "https://crests.football-data.org/costa_rica.svg",
          },
          playedGames: 3,
          form: null,
          won: 1,
          draw: 0,
          lost: 2,
          points: 3,
          goalsFor: 3,
          goalsAgainst: 11,
          goalDifference: -8,
        },
      ],
    },
    {
      stage: "GROUP_STAGE",
      type: "TOTAL",
      group: "GROUP_F",
      table: [
        {
          position: 1,
          team: {
            id: 815,
            name: "Morocco",
            shortName: "Morocco",
            tla: "MAR",
            crest: "https://crests.football-data.org/morocco.svg",
          },
          playedGames: 3,
          form: null,
          won: 2,
          draw: 1,
          lost: 0,
          points: 7,
          goalsFor: 4,
          goalsAgainst: 1,
          goalDifference: 3,
        },
        {
          position: 2,
          team: {
            id: 799,
            name: "Croatia",
            shortName: "Croatia",
            tla: "CRO",
            crest: "https://crests.football-data.org/799.svg",
          },
          playedGames: 3,
          form: null,
          won: 1,
          draw: 2,
          lost: 0,
          points: 5,
          goalsFor: 4,
          goalsAgainst: 1,
          goalDifference: 3,
        },
        {
          position: 3,
          team: {
            id: 805,
            name: "Belgium",
            shortName: "Belgium",
            tla: "BEL",
            crest: "https://crests.football-data.org/805.svg",
          },
          playedGames: 3,
          form: null,
          won: 1,
          draw: 1,
          lost: 1,
          points: 4,
          goalsFor: 1,
          goalsAgainst: 2,
          goalDifference: -1,
        },
        {
          position: 4,
          team: {
            id: 828,
            name: "Canada",
            shortName: "Canada",
            tla: "CAN",
            crest: "https://crests.football-data.org/canada.svg",
          },
          playedGames: 3,
          form: null,
          won: 0,
          draw: 0,
          lost: 3,
          points: 0,
          goalsFor: 2,
          goalsAgainst: 7,
          goalDifference: -5,
        },
      ],
    },
    {
      stage: "GROUP_STAGE",
      type: "TOTAL",
      group: "GROUP_G",
      table: [
        {
          position: 1,
          team: {
            id: 764,
            name: "Brazil",
            shortName: "Brazil",
            tla: "BRA",
            crest: "https://crests.football-data.org/764.svg",
          },
          playedGames: 2,
          form: null,
          won: 2,
          draw: 0,
          lost: 0,
          points: 6,
          goalsFor: 3,
          goalsAgainst: 0,
          goalDifference: 3,
        },
        {
          position: 2,
          team: {
            id: 788,
            name: "Switzerland",
            shortName: "Switzerland",
            tla: "SUI",
            crest: "https://crests.football-data.org/788.svg",
          },
          playedGames: 2,
          form: null,
          won: 1,
          draw: 0,
          lost: 1,
          points: 3,
          goalsFor: 1,
          goalsAgainst: 1,
          goalDifference: 0,
        },
        {
          position: 3,
          team: {
            id: 781,
            name: "Cameroon",
            shortName: "Cameroon",
            tla: "CMR",
            crest: "https://crests.football-data.org/cameroon.svg",
          },
          playedGames: 2,
          form: null,
          won: 0,
          draw: 1,
          lost: 1,
          points: 1,
          goalsFor: 3,
          goalsAgainst: 4,
          goalDifference: -1,
        },
        {
          position: 4,
          team: {
            id: 780,
            name: "Serbia",
            shortName: "Serbia",
            tla: "SRB",
            crest: "https://crests.football-data.org/780.svg",
          },
          playedGames: 2,
          form: null,
          won: 0,
          draw: 1,
          lost: 1,
          points: 1,
          goalsFor: 3,
          goalsAgainst: 5,
          goalDifference: -2,
        },
      ],
    },
    {
      stage: "GROUP_STAGE",
      type: "TOTAL",
      group: "GROUP_H",
      table: [
        {
          position: 1,
          team: {
            id: 765,
            name: "Portugal",
            shortName: "Portugal",
            tla: "POR",
            crest: "https://crests.football-data.org/765.svg",
          },
          playedGames: 2,
          form: null,
          won: 2,
          draw: 0,
          lost: 0,
          points: 6,
          goalsFor: 5,
          goalsAgainst: 2,
          goalDifference: 3,
        },
        {
          position: 2,
          team: {
            id: 763,
            name: "Ghana",
            shortName: "Ghana",
            tla: "GHA",
            crest: "https://crests.football-data.org/ghana.svg",
          },
          playedGames: 2,
          form: null,
          won: 1,
          draw: 0,
          lost: 1,
          points: 3,
          goalsFor: 5,
          goalsAgainst: 5,
          goalDifference: 0,
        },
        {
          position: 3,
          team: {
            id: 772,
            name: "South Korea",
            shortName: "Korea Republic",
            tla: "KOR",
            crest: "https://crests.football-data.org/772.png",
          },
          playedGames: 2,
          form: null,
          won: 0,
          draw: 1,
          lost: 1,
          points: 1,
          goalsFor: 2,
          goalsAgainst: 3,
          goalDifference: -1,
        },
        {
          position: 4,
          team: {
            id: 758,
            name: "Uruguay",
            shortName: "Uruguay",
            tla: "URU",
            crest: "https://crests.football-data.org/758.svg",
          },
          playedGames: 2,
          form: null,
          won: 0,
          draw: 1,
          lost: 1,
          points: 1,
          goalsFor: 0,
          goalsAgainst: 2,
          goalDifference: -2,
        },
      ],
    },
  ]);

  // const [groups, setGroups] = useState([]);
  // let baseUrl =
  //   "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v4";
  // const url = `${baseUrl}https://api.football-data.org/v4/competitions/2000/standings`;

  // useEffect(() => {
  //   axios
  //     .get(url, {
  //       headers: {
  //         "X-Auth-Token": "d7d54a2bbc864ae698f096aea02c6e76",
  //         "X-Requested-With": "XMLHttpRequest",
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //         "Access-Control-Allow-Headers":
  //           "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  //         "Access-Control-Allow-Credentials": "true",
  //         "Access-Control-Max-Age": "86400",
  //       },
  //     })
  //     .then((res) => {
  //       setGroups(res.data.standings);
  //     });
  // });

  return (
    <Container>
      {groups.map((group, index) => {
        return (
          <div key={index} className="group_table">
            <p className="group_title">
              {group.group.toLocaleLowerCase().replace("_", " ")}
            </p>
            <table>
              <thead>
                <tr>
                  <th>Team</th>
                  <th>Played</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>Pts</th>
                </tr>
              </thead>
              <tbody>
                {group.table.map((team, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img
                          src={team.team.crest}
                          alt="Flag"
                          className="flag"
                        />
                        <p> {team.team.tla}</p>
                      </td>
                      <td>{team.playedGames}</td>
                      <td>{team.won}</td>
                      <td>{team.draw}</td>
                      <td>{team.lost}</td>
                      <td>{team.points}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  .group_table {
    margin: 10px;
    width: 40%;
    text-align: center;
    border-radius: 10px 0;
    .group_title {
      font-size: 1rem;
      text-transform: capitalize;
      background-color: #8a1538 !important;
      color: white;
      font-weight: bold;
      padding: 10px;
      border-radius: 10px 10px 0 0;
    }
    table {
      width: 100%;
      border-spacing: 0;
      thead {
        background-color: #5b0d25 !important;
        color: white;
        font-size: 0.9rem;
        th {
          padding: 10px;
        }
      }
      tbody td {
        background-color: #f2f2f2;
        font-size: 0.9rem;
        padding: 10px !important;
        :first-child {
          display: flex;
          align-items: center;
          font-weight: 600;
          img {
            width: 25px;
            height: 20px;
            object-fit: cover;
            margin-right: 5px;
            border-radius: 50%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 980px) {
    .group_table {
      width: 70%;
    }
  }
  @media only screen and (max-width: 600px) {
    .group_table {
      width: 100%;
    }
  }
  @media only screen and (max-width: 400px) {
    .group_table {
      width: 115%;
    }
  }
`;
