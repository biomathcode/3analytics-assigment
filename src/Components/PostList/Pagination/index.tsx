function Pagination() {
    return ( 
        <div className="flex w-100 center gap-10">
            {
                [1,2,3,4,5,6,7,8,9,10].map((el) =>  (
                        <div style={{width: '40px', height: '40px', background: '#555'}} key={el}>{el}</div>
                    )
                )
            }
        </div>
     );
}

export default Pagination;