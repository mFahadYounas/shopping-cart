import { ChangeEvent, useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import './SearchBar.css'

function SearchBar() {

    const [searchBar, setSearchBar] = useState<string>('')

  return (
    <div className='searchBar'>
        <SearchOutlined className='test' />
        <input
         value={searchBar} 
         type='text' 
         className='searchBar'
         placeholder='Search'
         onChange={(e:ChangeEvent<HTMLInputElement>) => setSearchBar(e.target.value)}
        />
    </div>
  )
}

export default SearchBar