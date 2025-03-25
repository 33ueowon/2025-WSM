import ProductItem from "./ProductItem";

//상품 목록 랜더링
function ProductList({products, addToCart, categoryFilter=null, searchTerm=''})
{
  //카테고리 필터 적용
  let fillteredProducts = categoryFilter
  // 배열
  ? products.filter(product => product.category === categoryFilter)
  : products; // filter() 메서드 :  주어진 조건을 만족하는 요소만 포함하는 new 배열을 반환

  //검색어 필터 적용 (**대소문자 구분 제거**)
  if (searchTerm){
    fillteredProducts = fillteredProducts.filter(
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  return(
    <div className="product-list-container">
      {fillteredProducts.length === 0?(
        <div>
          <p>검색 결과가 없습니다.</p>
          </div>
      ):(
        <div>
          {fillteredProducts.map(product =>( // map() : 배열의 각 요소를 변환해서 new 배열반환
            <ProductItem
            key={product.id}  // React 최적화를 위해 필수
            product={product}
            addToCart={addToCart}
            />
          ))}
          </div>
      )}
    </div>
  )

}
export default ProductList;