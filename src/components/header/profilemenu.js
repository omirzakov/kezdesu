import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const onClick = ({ key }) => {

  console.log('clicked', key)

  if(key === 'exit') {
    localStorage.removeItem('token');
    window.location.reload()
  }
  else {
    navigate(key);
  }
};


const profileMenu = (
  
    <Menu onClick={onClick}>
      {/* <Menu.Item key='/profile'>
        <a target="/settings" rel="noopener noreferrer">
          Профиль
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" >
          Настройка
        </a>
      </Menu.Item> */}
      <Menu.Item key='exit'>
        <div>
          Выйти
        </div>
      </Menu.Item>
    </Menu>
);
export default profileMenu