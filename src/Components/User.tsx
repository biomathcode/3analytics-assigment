import React from "react";
import { UserType } from "../types";

type PropType = {
    value: number;
  };

type StateType = {
    isFetching: boolean;
    users: UserType[] | [];
}

class UserTableAutonomous extends React.Component<PropType, StateType> {
    constructor(props:PropType) {
        super(props);
        this.state = {
            isFetching: false,
            users: []
        }
    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.users.map((user, index) => (
                        <tr key={index} className={String(index)}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <p>{this.state.isFetching ? 'Fetching users...' : ''}</p>
            </div>
        )
    }
}
