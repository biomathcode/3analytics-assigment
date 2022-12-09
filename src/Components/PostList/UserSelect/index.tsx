import { UserType } from "../../../types";
import React from 'react';
import { getUsers } from "../../../api";


 
interface UserState {
    isfetching: boolean, 
    data: UserType[] 
}


 
class UserSelect extends React.Component {
    state:UserState = { isfetching: true, 
    data: [
        {
            name: "Pratik Sharma", 
            id: 1, 

        }
    ]
    }
    async fetchFunction() {
        const data =  await getUsers();
        this.setState({
            isFetching: false, 
            data: data
        })
    }

    componentDidMount(): void {
       this.fetchFunction()
       console.log('this is to time render')
    }
    render() { 
        const {data} = this.state;
        return (
        <div className="flex " style={{width: '80%'}}>
        <label className="flex gap-10 center">
        Get Post By User
        <select defaultValue="None">
            <option >None</option>
            {
                data.map((el) => {
                    return <option key={el.id}>{el.username}</option>
                })
            }
</select>
</label>
        </div>
            

          );
    }
}
 
export default UserSelect;