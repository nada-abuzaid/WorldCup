import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Groups() {
  const [groups, setGroups] = useState([]);

  let baseUrl =
    "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v4";
  const url = `${baseUrl}/competitions/2000/standings`;

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "X-Auth-Token": "d7d54a2bbc864ae698f096aea02c6e76",
          "X-Requested-With": "XMLHttpRequest",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept, Authorization",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Max-Age": "86400",
        },
      })
      .then((res) => {
        setGroups(res.data.standings);
      });
  });

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
