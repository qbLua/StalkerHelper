import React from 'react';
import {NavLink} from "react-router-dom";
import '../../css/Location.css';
import { Location_stats } from '../Logics/Logics.js';

const Location = (props) => {
    Location_stats(props.stats);
    const groups = (props.groups).map((group) => { 
        if (group == props.groups[0]) {
            return (
            <tr>
                <td>Группировки:</td>
                <td className="space"></td>
                <td>{group}</td>
            </tr> 
            );
        } else {
            return (
            <tr>
                <td></td>
                <td className="space"></td>
                <td>{group}</td>
            </tr>
            );
        }
    });

    const mutants = (props.mutants).map((mutant) => { 
        if (mutant == props.mutants[0]) {
            return (
            <tr>
                <td>Мутанты:</td>
                <td className="space"></td>
                <td>{mutant}</td>
            </tr>
            );
        } else {
            return (
            <tr>
                <td></td>
                <td className="space"></td>
                <td>{mutant}</td>
            </tr>
            );
        }
    });

    const anomalies = (props.anomalies).map((anomaly) => { 
        if (anomaly == props.anomalies[0]) {
           return (
            <tr>
                <td>Аномалии:</td>
                <td className="space"></td>
                <td>{anomaly}</td>
            </tr>
           );
        } else {
            return (
            <tr>
                <td></td>
                <td className="space"></td>
                <td>{anomaly}</td>
            </tr>
            );
        }
    });

    const radiation = <tr><td>Радиация:</td><td className="space"></td><td>{props.radiation}</td></tr>;

   return (
    <div className="location">
        <div className="name">
            {props.name}
        </div>
        <div className="img">
            <img src={require(`../../img/${props.img}.png`)}></img>
        </div>
        <div className="lvl">
            Сложность: <span className="span_space"></span><span className={props.color}>{props.lvl}</span>
        </div>
        <div className="desc">
            {props.desc}
        </div>
        <div className="table">
            <table>
                <tbody>
                {groups}
                {mutants}
                {anomalies}
                {radiation}
                </tbody>
            </table>
        </div>
        <button className="btn">Select</button>
    </div>
   );
}

export default Location;