import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../../api';
import { PostType } from '../../types';
import LoadingIndicator from '../LoadingIndicator.tsx';
import Pagination from './Pagination';
import UserSelect from './UserSelect';

// TODO: Add Pagination 
// TODO: add Styles


 
interface PostState {
    isFetching: boolean,
    data: PostType[] | [];
}
 
class PostList extends React.Component{
    state:PostState = { 
        isFetching: true, 
    data: [] 
    }

    async fetchFunction() {
        const data =  await getPosts();
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
        const {data, isFetching} = this.state;
        return ( 
            <div>
                <UserSelect/>
                {isFetching && <LoadingIndicator/>}
                {
                    data.map((post) => {
                        return(
                            <PostCard key={post.id} id={post.id} title={post.title} body={post.body}/>
                        )
                    })
                }
        <Pagination/>


            </div>
         );
    }
}
 
export default PostList;


const PostCard:FC<PostType> = (data) => {
    return (
        <>
        <Link to={"/post/" + data.id}>
        <div>
            <h2>{data.title}</h2>
            <div>{data.body}</div>
        </div>
        </Link>
        </>
        
    )
}