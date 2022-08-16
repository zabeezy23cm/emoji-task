import './Menu.css'
import NavBar from '../NavBar'
import TableInfo from '../TableInfo'

const Menu = () => (
  <div className='parent'>
    <div className='firstChild'>
      <NavBar />
    </div>
    <div className='secondChild'>
      <TableInfo />
    </div>
  </div>
)

export default Menu
