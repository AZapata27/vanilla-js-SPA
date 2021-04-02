import {pages} from '../controllers/index.controller';


let mainContent= document.getElementById('root');

const router = async(route)=>{

        /* reinicia contenido de elemento */
mainContent.innerHTML='';
    
    
        switch (route) {
            case '#/':{

                
                return mainContent.appendChild(pages.home());

            }
            case '#/products':
                    return mainContent.appendChild(pages.products());
            case '#/posts':
                    return mainContent.appendChild(await pages.posts());
        
            default:
                return mainContent.appendChild(pages.notFound());
        }

}

export {router};