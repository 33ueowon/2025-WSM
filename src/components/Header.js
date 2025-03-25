import Reat from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

// cartItem.. = 장바구니 (몇 개인지), onSearch = 검색
function Header({cartItemCount, onSearch}){
  return(
    <header>
      <div className="logo">
        <Link to="/">
            <h1>이한과 결혼하기</h1>
        </Link>
      </div>
      <nav>
        <li><Link to="/">home</Link></li>
        <li><Link to="/category/의류">의류</Link></li>
        <li><Link to="/category/전자기기">전자기기</Link></li>
        <li><Link to="/category/액세서리">액세서리</Link></li>
      </nav>
      <div>
        {/* 콜백함수(onsearch) */}
        <SearchBar onSearch={onSearch}/>
        <div>
          <Link to="/cart">
              <span>shopping_cart</span>
              {/* 조건문 */}
              {cartItemCount > 0 && (
              <span>{cartItemCount}</span>
              )}
          </Link>
        </div>
      </div>
    </header>
  )
}
