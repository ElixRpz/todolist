import React ,{useState} from 'react';
import "./todolist.css";
import * as IoIcons from "react-icons/io5"
import * as FaIcons from "react-icons/fa"

const Todolist = ({changeColor,setChangeColor}) => {

    const [name,setName] = useState();

    const [age,setAge] = useState();
    const [edit,setEdit] = useState(false)

    const [testedit,setTestedit]= useState()




    const [todolist,setTodolist] = useState ([])


    const handleTodo = () => {

        const item = {
            id: Math.floor(Math.random()*1000),
            name:name,
            age:age
        }

        if(name === undefined || age === undefined){
            return alert("Attention tu a rien à ajouter")
        }else{
            setTodolist(currentValue => [...currentValue,item])
            setName(undefined)
            setAge(undefined)
        }
    }

    const suppTodo = (id) => {
      const newArray = todolist.filter(pouetpouet => pouetpouet.id !== id)
      setTodolist(newArray)
    }

    const editTodo = (id) => {

        if(name === undefined || age === undefined){
            return alert("Attention tu a rien à ajouter")
        }else{
           setTodolist(previousValue => previousValue.map(item=> (item.id === id ? {id : id ,name : name, age:parseInt(age)} : item)))
           setEdit(false)
           setName(undefined)
           setAge(undefined)
        }

    }

    const testTodo = (id) => {
       setEdit(!edit)
       setTestedit(id)
    }
    /* UN LISTE

    afficher liste done
    Ajouter des chose done
    supprimer des chose done
    editer des chose
     */
        
    return (
        <div className="todolist">
            <input onChange={(e)=> setName(e.target.value)}/>
            <input type="number" onChange={(e)=> setAge(e.target.value)}/>
            <button onClick={handleTodo}>
                Ajouter
                </button>
            <ul className='todolist_list'>

                
                {
                    todolist?.map((todo ,index) => (
                        <div style={{display:"flex"}}>
                            {
                                
                                <li key={index}> 

                                    <>
                                    {
                                        edit && todo.id === testedit ?
                                        <>
                                        <input  defaultValue={todo.name} onChange={(e)=> setName(e.target.value)}/>
                                        <input  defaultValue={todo.age} type="number" onChange={(e)=> setAge(e.target.value)}/>
                                        <IoIcons.IoCheckmarkOutline onClick={()=>editTodo(todo.id)}/>
                                        </>
                                        :
                                        <>
                                        {todo.name} {todo.age}
                                        </>
                                    }
                                    
                                    </>
                            </li>
                            }
                            
                        
                        <IoIcons.IoClose className={ edit && todo.id === testedit ? "todolist_suppr_none" : 'todolist_suppr'} onClick={()=>suppTodo(todo.id)}/>
                        <FaIcons.FaRegEdit  className='todolist_edit' onClick={()=>testTodo(todo.id)}/>

                        </div>
                    ))
                }
               
            </ul>

           <button onClick={()=>setChangeColor(!changeColor)}>bouton todo</button>

        </div>
    )
}

export default  Todolist