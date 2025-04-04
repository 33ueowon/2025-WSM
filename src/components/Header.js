import React from "react"
import { Link } from "react-router-dom"
import SearchBar from './SearchBar'

function Hearder({cartItemCount, onSearch}) {
    return(
        <header>
            <div>
                <Link to="/">
                    <h1>리액트 쇼핑몰</h1>
                </Link>
            </div>
            
            <nav>
                <li onClick={() => onSearch('')}><Link to="/">홈</Link></li>
                <li onClick={() => onSearch('')}><Link to="/category/의류">의류</Link></li>
                <li onClick={() => onSearch('')}><Link to="/category/전자기기">전자기기</Link></li>
                <li onClick={() => onSearch('')}><Link to="/category/액세서리">액세서리</Link></li>
            </nav>

            <div>
                <SearchBar onSearch={onSearch} />

                <div>
                    <Link to="/cart">
                        <span>🛒</span>
                        {/* 조건부 랜더링 */}
                        {cartItemCount > 0 && (
                            <span>{cartItemCount}</span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Hearder;