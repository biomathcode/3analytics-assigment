type PageType = {
    page: number, 
    change: (e:number) => void;
}

function Pagination({page,change}:PageType) {
    const color =(el:number) =>  page === el ? 'var(--primary)': 'var(--black3)'
    return ( 
        <div style={{position: 'sticky', bottom: '10px', zIndex:'10', borderRadius: '10px'}} className="flex p-20 jc center gap-10 black3">
            {
                [0,1,2,3,4,5,6,7,8,9].map((el) =>  (
                        <div className={"center flex jc"    }  
                        onClick={() => change(el)}
                        style={{
                            cursor: 'pointer',
                            width: '20px',
                            height: '20px', 
                            fontSize: '12px', 
                            padding: '2px', 
                            borderRadius: '3px', 
                            background: color(el )
                        }} key={el}>{el + 1}</div>
                    )
                )
            }
        </div>
     );
}

export default Pagination;