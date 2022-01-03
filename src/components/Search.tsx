import React, { FunctionComponent } from 'react';

type SearchInput ={
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
 
const Search = (props: SearchInput) => {
    

 return (
  <div>

        <div className="container my-5 ">
             <div className="row ">
                 <div className="col-md-8 mx-auto">
                        <input type="text" value={props.value}  className="form-control form-control-lg" onChange={props.handleChange}/>
                </div>
            </div>
       
        </div>
                

  </div>
  );
}
 
export default Search;