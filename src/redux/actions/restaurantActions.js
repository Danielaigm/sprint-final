import { filterCollection } from "../../services/filterCollections"
import { restaurantsTypes } from "../types/types"

const collectionsName = {restaurants: 'restaurants', menu: 'menu'}

const getRestaurants = (data) => {
  return {
    type: restaurantsTypes.GET_RESTAURANT,
    payload: data
  }
}
export const toggleLoading = () =>{
  return {
    type: restaurantsTypes.TOGGLE_LOADING,
  }
}

export const getRestaurantsAsync = (data) => {
       return async(dispatch)=>{
        dispatch(toggleLoading())
          try {
             const rest = await filterCollection({key: data.key, collectionName: collectionsName.restaurants, value: data.value})
             console.log(rest)
             dispatch(getRestaurants(rest))
             setTimeout(()=>{
              dispatch(toggleLoading())
             },800)
          } catch (error) {
            console.log(error);
            dispatch(getRestaurants([]))
            dispatch(toggleLoading())
          }
       } 
}

export const getMenu = (data) =>{
  return{
    type: restaurantsTypes.GET_MENU,
    payload: data
  }
}

export const getMenuAsync = (data) =>{
  return async(dispatch)=> {
    let filterMenu = []
    console.log(data)
    try {    
      dispatch(toggleLoading())
     const menu = await filterCollection({collectionName: collectionsName.menu, key: data.key, value: data.value})
        if(data.type == null){
          filterMenu = menu
          dispatch(toggleLoading())
        }else{
          if(data.label == 'type'){
            filterMenu = menu.filter((item)=> item[data.label] == data.type)
          }else if(data.label == 'name'){
            filterMenu = menu.filter((item)=> item.name.toLowerCase().includes(data.type.toLowerCase())
            )
          }
          dispatch(toggleLoading())
        }
      dispatch(getMenu(filterMenu))
    } catch (error) {
      console.log(error)
    }
  }
}