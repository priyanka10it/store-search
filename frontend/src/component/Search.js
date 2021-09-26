import React,{useState} from 'react';
import Data from './Data';


const Search=()=>{

const[search, setSearch]=useState('');   

const searchText=(e)=>{
    setSearch(e.target.value);
}

let dataSearch=Data.stores.filter((item)=>{
    if(search===""){
        return item
    }else if(item.name.toLowerCase().includes(search.toLowerCase())){
        return item
    }
    else {
        return null
    }
    
   });

   
    return(
        <div>
             <section className="py-4 conatiner">
              <div className="row justify-content-center">

                    <div className="col-12 mb-5">
                        <div className="mb-3 col-4 mx-auto text-center">
                            <label className="form-label h4">Welcome to Store Search</label>
                            
                            <input type="text" placeholder="Enter Store name..."
                            className="form-control"
                            value={search}
                            onChange={searchText.bind(this)}/>
                            </div>
                        </div>
                  {dataSearch.map((item,index)=>{
                      return(
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                      <div className="card p-0 overflow-hidden h-100 shadow">
                            <div className="card-body">
                              <h5 className="card-title">{item.id}</h5>
                              <p className="card-text">{item.name}</p>
                              <p className="card-text">{item.tags}</p>
                          </div>
                       </div>   
                   </div>   
            
                      )
                  })}
                 </div>   
              </section>    


            
        </div>
    )
}

export default Search;