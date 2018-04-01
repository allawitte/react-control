const SearchBox = (props) => {
    const filterBooks = e => {        
        props.filterBooks(e.target.value);
    }
    return (
        <input type="text" placeholder="Поиск по названию или автору" onKeyDown={filterBooks}/>
    );
};