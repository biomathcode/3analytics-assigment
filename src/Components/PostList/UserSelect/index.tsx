import { UserType } from "../../../types";
import React from 'react';
import { getPostByUserId, getUsers } from "../../../api";


 
interface UserState {
    isfetching: boolean, 
    data: UserType[], 
    selected: string, 
}

interface PropType {
    search: (isSearch:boolean, searchData: []) => void;
}

type searchType =  (isSearch:boolean, searchData: []) => void;

 
class UserSelect extends React.Component<PropType> {
    state:UserState = { isfetching: true, 
        selected: 'None', 
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
            data: data, 
            selected: 'None', 
        })
    }
    componentDidMount(): void {
       this.fetchFunction()
       console.log('this is to time render')
    }
    changeSelected = async(e:any, search:searchType) => {
        console.log(e);
        if(e.target.value === 'none') {
            this.setState((prev) => ({...prev, selected: e.target.value}));
            search(false, []);

        } else {
            this.setState((prev) => ({...prev, selected: e.target.value}));
            const data = await getPostByUserId(e.target.value)
            console.log(data, e.target.value);
            search(true, data);

        }
    }
    reset() {
        this.setState((prev) => ({...prev, selected: 'None'}));
    }

    render() { 
        const {data, selected} = this.state;

        return (
        <div className="flex " style={{width: '80%'}}>
        <label className="flex gap-10 center">
        Get Post By User
        <select defaultValue={selected} value={selected} onChange={(e) => this.changeSelected(e, this.props.search) }>
            <option value="none" >None</option>
            {
                data.map((el) => {
                    return <option value={el.id} key={el.id}>{el.username}</option>
                })
            }
        </select>
        </label>
        
   
        </div>
            

          );
    }
}
 
export default UserSelect;