import React from 'react';
import { getPostsById } from '../../api';
import { PostType } from '../../types';
import LoadingIndicator from '../LoadingIndicator.tsx';

// TODO: Add Comment

interface PostProps {
    id: string ;
}
 
interface PostState {
    isFetching?: boolean,
    data?: PostType, 
}
 
class PostView extends React.Component<PostProps, PostState> {
    state:PostState = { 
        isFetching: true, 
    data: {
        body: '', 
        title: '', 

    }
    } 

    

    async fetcher(id: string) {
        const data = await getPostsById(id);
        this.setState({
            isFetching: false, 
            data: data
        })
        console.log(data);
    }
   

   
    componentDidUpdate(prevProps: Readonly<PostProps>, prevState: Readonly<PostState>, snapshot?: any): void {
        if(prevProps.id !== this.props.id) {
            this.fetcher(this.props.id);
        }
    }

    componentDidMount(): void {
        this.fetcher( this.props.id)

    }
    render() { 
        const {data, isFetching } = this.state;
        if(isFetching) {
            return <LoadingIndicator/>
        }
        return ( data &&
            <div className='container flex jc center '>
                <div className='postview'>
                <h1>{data.title}</h1>
                
                <p>{data.body}</p>
                </div>
            

            </div>
         );
    }
}
 
export default PostView;