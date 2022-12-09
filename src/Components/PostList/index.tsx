import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../../api';
import { PostType } from '../../types';
import LoadingIndicator from '../LoadingIndicator.tsx';
import Pagination from './Pagination';
import UserSelect from './UserSelect';

// TODO: Add Pagination 
// TODO: add Styles

interface PropType {
    
}

 
interface PostState {
    isFetching: boolean,
    data: PostType[] | [];
    page: number,
    isSearch: boolean, 
    searchData: PostType[] | []
}
 
class PostList extends React.Component<PropType,PostState>{
    constructor(props:any) {
        super(props);
        this.state = { 
            isFetching: true, 
        data: [], 
        page: 0, 
        isSearch : false,
        searchData: []
        }
    }

    async fetchFunction() {
        const data =  await getPosts();
        this.setState({
            isFetching: false, 
            data: data, 
            page: 0,
            isSearch: false, 
            searchData: []
        })
    }

    changePagination = (e:number) =>{
        console.log('this is not working', e)
        this.setState((prev) => ({...prev, page: e}))
    }

    componentDidMount(): void {
       this.fetchFunction()
       console.log('this is to time render')
    }

    Search = (isSearch:boolean, searchData: []) => {
        this.setState((prev) => ({...prev, isSearch, searchData}))
    }

    render() { 
        const {data, isFetching,page, isSearch, searchData} = this.state;

        const offset = page * 10;
        const perpage = 10;

        const newdata = data.slice(offset, offset + perpage)
        console.log('tjisis page', page);
        return ( 
            <div className=" container  jc flex col center  mt-40">
                <UserSelect  search={this.Search}  />
                {isFetching && <LoadingIndicator/>}
                {
                    !isSearch ? 
                    <>
                    <div className="flex col jc center">
                    {
                        newdata.map((post) => {
                            return(
                                <PostCard key={post.id} id={post.id} title={post.title} body={post.body}/>
                            )
                        })
                    }
    
                    </div>
                    
                    <Pagination page={page} change={this.changePagination}/>
                    </>
                    : 
                    <div className="flex col jc center">
                    {
                        searchData.map((post) => {
                            return(
                                <PostCard key={post.id} id={post.id} title={post.title} body={post.body}/>
                            )
                        })
                    }
    
                    </div>
                    
                }
               

            </div>
         );
    }
}
 
export default PostList;


const PostCard:FC<PostType> = (data) => {
    return (
        <Link to={"/post/" + data.id}>

        <div className="card">
        <div>
            <h2>{data.title}</h2>
            <div>{data.body}</div>
        </div>
        </div>
        </Link>

        
    )
}