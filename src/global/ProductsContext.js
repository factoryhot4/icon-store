import React ,{useState} from 'react'
import {AoSoMi} from '../componentsShirt/ShirtData'
import {AoPoLo} from '../componentsShirt/ShirtData'
import {AoCotton} from '../componentsShirt/ShirtData'
import  {quanShort} from '../componentsQuan/ShortData'
import {Tat} from '../componentsPhukien/PhuKienData'
import {Mask} from '../componentsPhukien/PhuKienData'
import {Hat} from '../componentsPhukien/PhuKienData'
import {HangMoi} from '../componentsHangMoi/HangMoiData'
import {HangSale} from '../componentsSale/HangSaleData'
 
const ProductContext = React.createContext(); 


const ProductProvider =({children})=>{
    const [SoMiProducts] = useState(AoSoMi)
    const [PoLoProducts] = useState(AoPoLo)
    const [CottonProducts] = useState(AoCotton)
    const [ShortProducts] = useState(quanShort)
    const [TatProducts] = useState(Tat)
    const [KhauTrangProducts] = useState(Mask)
    const [HatProducts] = useState(Hat)
    const [HangMoiProducts] = useState(HangMoi)
    const [HangSaleProducts] = useState(HangSale)


    return (
        <ProductContext.Provider value={{SoMiProducts, PoLoProducts,CottonProducts,ShortProducts,TatProducts,KhauTrangProducts,HatProducts,HangMoiProducts,HangSaleProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductProvider,ProductContext}