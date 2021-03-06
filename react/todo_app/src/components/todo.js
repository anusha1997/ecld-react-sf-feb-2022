import React from 'react';
import './todo.css';
import { v4 as uuidv4 } from "uuid";
import Pagination  from './pagination';


class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentItem: '',
            id:uuidv4(),
            list : [],
            editItem :false,
            currentPage: 1,
           
        }
    }
     handlePage = (pageNum) => {
         const pageNums = pageNum
        this.setState({
            currentPage : pageNums
        })
     }

    render() {
        const { list, currentPage} = this.state;
        const perPage = 2;
        const totalPages = Math.ceil(list.length / perPage);


       const handleChange = (event) => {
            this.setState({
                currentItem :event.target.value

            })
        }
        const handleAdd = event => {
            event.preventDefault();
            const newItem = {
                id: this.state.id,
                task:this.state.currentItem
            }
            const newItems = [...this.state.list, newItem];
            this.setState({
                list: newItems,
                currentItem: '',
                editItem: false,
                id:uuidv4(),
            })
        }
        const deleteItem = id => {
         const filteredItems = this.state.list.filter((item) =>
            item.id !== id);
            this.setState({
                list:filteredItems
            })
        }
    
        const editItem = id => {
            const filteredItems = this.state.list.filter(item =>
                item.id !== id);
            const selectedItem = this.state.list.find(item =>
                item.id === id)
                this.setState({
                    list:filteredItems,
                    currentItem:selectedItem.task,
                    id:id,
                    editItem:true,
                   })
               };
        const handleToggle = event => {
            const element = event.target;
            element.classList.toggle("crossed-line");
        }

       
         const goToPreviousPage = () => {
             const page = currentPage - 1;
             this.setState({
                currentPage : page
             })
         }
         const goToNextPage = () => {
            const page = currentPage + 1;
         
            this.setState({
               currentPage : page
            })
        }
        
        return(
        <div className="container">

        <h1>Todo App</h1>
        <div className='input-section'  >
            <input 
            placeholder='Enter Text' 
            type='text' 
            value={this.state.currentItem}
            onChange={handleChange}/>
            <button onClick={handleAdd}> {this.state.editItem ? 'Edit' : 'Add'}</button>
             </div>
            {
                list.filter((_, index) => index >= (currentPage - 1) * perPage && index < currentPage * perPage)
                .map(item =>{
                return(
                <ul>
                <li onClick={handleToggle}>{item.task}<span></span>
                <i class="fa-solid fa-pen-to-square" onClick={() =>editItem(item.id)}></i>
                <i class="fa-solid fa-trash-can" onClick={() =>deleteItem(item.id)}></i></li>
                </ul>
                )
                })
            }
            <Pagination totalPages={totalPages} handlePage = {this.handlePage} goToNextPage={goToNextPage} gotoPreviousPage={goToPreviousPage} currentPage={currentPage} />
        </div>
        )
    }
}
export default Todo;