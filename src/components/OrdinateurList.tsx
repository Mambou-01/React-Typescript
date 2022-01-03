import React from 'react';
import Ordinateur from '../components/Ordinateur'

type listOrdinateur = {
    infos : Ordinateur[]
}
export const OrdinateurList = (props: listOrdinateur) => {
    return (
        <div>
            <div className="container">
                  <div className="row">
                     
                     {props.infos.map(({id,designation,url,urlImage,prix,ram,processeur,systeme,CarteGraphique,disqueDur}) =>(
                        <div className="col-md-10 mx-auto" key={id} >
                           <div className="card mb-3">
                             
                                 <div className="row ">
                                          <div className="col-md-4">
                                          <a href={url} className='text-decoration-none'>
                                             <img src={urlImage} alt={designation} className="img-fluid rounded-start" />
                                          </a>
                                          </div>
                                          <div className="col-md-8">
                                             <div className="card-body">
                                                <div className="row">
                                                   <div className="col-7">
                                                         <a href={url} className='text-decoration-none'>
                                                            <p className="text-decoration-none h4 mt-3 mb-5">{designation}</p>
                                                         </a>
                                                         <span className='text-decoration-none  text-danger h4 mt-5'> { prix } DTN</span>
                                                   </div>
                                                   <div className="col-5">
                                                      <h4 className='text-decoration-none text-dark mb-3 mt-3'>Ram : <span className='text-primary'> { ram }</span></h4> 
                                                      <h4 className='text-decoration-none text-dark mb-3'>Système : <span className='text-primary'> { systeme }</span></h4> 
                                                      <h4 className='text-decoration-none text-dark mb-3'> Processeur : <span className='text-primary'> { processeur }</span></h4> 
                                                      <h4 className='text-decoration-none text-dark mb-3'> Carte Graphique : <span className='text-primary'> { CarteGraphique }</span></h4> 
                                                      <h4 className='text-decoration-none text-dark mb-3'> Disque Dur : <span className='text-primary'> { disqueDur }</span></h4> 
                                                   </div>

                                                </div>
                                             
                                             </div>
                                          </div>
                                 </div>
                            
                              
                              
                           </div>
                        </div>
                     ) )}

                  </div>
            </div>
        </div>
    )
}