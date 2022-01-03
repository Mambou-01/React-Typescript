import React, { FunctionComponent ,useState, useEffect} from 'react';
import Ordinateur from './Ordinateur';
import {OrdinateurList} from './OrdinateurList';


type dataSelect = {
        ram: string[],
        systeme: string[],
        processeur: string[],
        cartegraphique: string[],
        disqueDur: string[]
};
 



const Select: FunctionComponent = () => {
    const [data, setData] = useState<Ordinateur[]>([]);
    const [selectValues, setSelectValues]  = useState<dataSelect>( {
        ram: [],
        systeme: [],
        processeur: [],
        cartegraphique: [],
        disqueDur: []
        });

    const [selectRam,setSelectRam] = useState<string>("4 Go");
    const [selectsysteme,setSelectsysteme] = useState<string>("Windows 10");
    const [selectprocesseur,setSelectprocesseur] = useState<string>("Intel Celeron");
    const [selectcartegraphique,setSelectcartegraphique] = useState<string>("Intel HD");
    const [selectdisqueDur,setSelectdisqueDur] = useState<string>("254 Go");
    


    useEffect(() => {
        setSelectValues(selctdata);
        setData(listOrdinateur);
        console.log([selectRam,selectsysteme,selectprocesseur,selectcartegraphique,selectdisqueDur]);

    }, [selectRam,selectsysteme,selectprocesseur,selectcartegraphique,selectdisqueDur]);  

    const selctdata =
        {
        ram: ['4 Go','8 Go','12 Go'],
        systeme: ['Windows 10','ubuntu','free Dos'],
        processeur: ['Intel Celeron','Intel Celeron 1'],
        cartegraphique: ['Intel HD','Intel HD 1'],
        disqueDur: ['254 G0','1 To']
        };
    
        const listOrdinateur = 
        [
          {
             id:1,
             url:"https://www.mytek.tn/pc-portable-asus-celeron-n4020-4go-1to-gris-x543ma-gq1012t.html",
             urlImage:"https://mk-media.mytek.tn/media/catalog/product/cache/9c5129f729280efd61dc2c3fb7aaab1d/x/5/x543ma-gq1012t.jpg",
             designation:"PC Portable ASUS X543MA Celeron N4020 4Go 1To - Gris (X543MA-GQ1012T)",
             prix:"819,000",
             ram:"4 Go",
             systeme:"Windows 10",
             processeur:"Intel Celeron",
             CarteGraphique:"Intel HD",
             disqueDur:"1 To"
          },
          {
             id:2,
             url:"https://www.mytek.tn/pc-portable-hp-15-dw1000nk-dual-core-4go-1to-noir-280s8ea.html",
             urlImage:"https://mk-media.mytek.tn/media/catalog/product/cache/9c5129f729280efd61dc2c3fb7aaab1d/2/8/280s8ea_1.jpg",
             designation:"PC Portable HP 15-dw1000nk Dual Core 4Go 1To - Noir (280S8EA)",
             prix:"909,000",
             ram:"4 Go",
             systeme:"Windows 10",
             processeur:"Intel Celeron",
             CarteGraphique:"Intel HD",
             disqueDur:"1 To"
          }
       ]
       


    return (
    <div>
        
        <div className="container my-5 ">

        <div className="row">
            <div className="col-md-3">
            <select className="form-select form-select-lg mb-3" value={selectRam} 
                onChange={
                    (
                        ev: React.ChangeEvent<HTMLSelectElement>,
                    ): void => setSelectRam(ev.target.value)
                }
                >
                {selectValues.ram.map((option) =>(
                    <option value={option} key={option} >{option}</option>
                ))}
            </select>
            </div>
            <div className="col-md-2">
                    <select className="form-select form-select-lg mb-3" value={selectsysteme} 
                    onChange={
                        (
                            ev: React.ChangeEvent<HTMLSelectElement>,
                        ): void => setSelectsysteme(ev.target.value)
                    }
                >
                    {selectValues.systeme.map((option) =>(
                        <option value={option} key={option} >{option}</option>
                    ))}
                </select>
            </div>

            <div className="col-md-2">
                <select className="form-select form-select-lg mb-3" value={selectprocesseur} 
                    onChange={
                        (
                            ev: React.ChangeEvent<HTMLSelectElement>,
                        ): void => setSelectprocesseur(ev.target.value)
                    }
                >
                    {selectValues.processeur.map((option) =>(
                        <option value={option} key={option} >{option}</option>
                    ))}
                </select>
            </div>

            <div className="col-md-2">
                <select className="form-select form-select-lg mb-3" value={selectcartegraphique} 
                onChange={
                    (
                        ev: React.ChangeEvent<HTMLSelectElement>,
                    ): void => setSelectcartegraphique(ev.target.value)
                }
            >
                {selectValues.cartegraphique.map((option) =>(
                    <option value={option} key={option} >{option}</option>
                ))}
            </select>
            </div>

            <div className="col-md-3">
                <select className="form-select form-select-lg mb-3" value={selectdisqueDur} 
                    onChange={
                        (
                            ev: React.ChangeEvent<HTMLSelectElement>,
                        ): void => setSelectdisqueDur(ev.target.value)
                    }
                >
                    {selectValues.disqueDur.map((option) =>(
                        <option value={option} key={option} >{option}</option>
                    ))}
                </select>
            </div>
        </div>

        </div>

        <OrdinateurList infos={data}/>
                    

    </div>
    );
}
 
export default Select;