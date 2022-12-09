import React from 'react';
import { getPosts, getPostsById } from '../../api';
import { PostType } from '../../types';
import LoadingIndicator from '../LoadingIndicator.tsx';
import Select, { Theme, ThemeConfig } from 'react-select';
import { NavigateFunction, useNavigate } from "react-router-dom";


// TODO: Add Comment

interface OptionTypes {
    value: string, 
    label: string, 
}

 
interface SearchState {
    isFetching?: boolean,
    data: PostType[], 
}
interface PropState {
    history: NavigateFunction
}
 
class Search extends React.Component<PropState> {
    state:SearchState = { 
        isFetching: true, 
    data: []
    }

    async fetcher() {
        const data = await getPosts();
        this.setState({
            isFetching: false, 
            data: data
        })
    }

    componentDidMount(): void {
        this.fetcher()
    }

    handleChange = (e:any) => {
        this.props.history('/post/'+ e.value);
    }

    render() { 
        const {data, isFetching } = this.state;
        const theme = (theme: Theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "#404eed",
              primary: "#5865f2",
              neutral0: '#1b1c1d', 
              neutral20: '#eee' ,
              neutral80: "#fff", 
      
      
            }
            
          });

        const options:any = data &&  data.map((el) => ({value: el.id, label: el.title}))
        if(isFetching) {
            return <LoadingIndicator/>
        }
        return ( data &&
          
            <Select 
           
            theme={theme}
            onChange={(v) => this.handleChange(v)} options={options}/>
         );
    }
}


  


export default () => (
    <Search history={useNavigate()}  />
  );
 
